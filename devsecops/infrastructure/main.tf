terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.19.0"
    }
  }
}

data "google_client_config" "current" {}

provider "kubernetes" {
  alias                  = "development_cluster"
  host                   = module.development_cluster.endpoint
  token                  = data.google_client_config.current.access_token
  client_certificate     = base64decode(module.development_cluster.client_certificate)
  client_key             = base64decode(module.development_cluster.client_key)
  cluster_ca_certificate = base64decode(module.development_cluster.cluster_ca_certificate)
}

module "development_cluster" {
  source                          = "./gke-regional"
  project_id                      = var.project_id
  prefix                          = "dev"
  region                          = "asia-south1"
  gke_num_nodes                   = 1
  google_compute_network_vpc_name = google_compute_network.vpc_development.name
  preemptible                     = true
  node_storage                    = 100
  env                             = "development"
  tags                            = ["gke-development"]
}

provider "helm" {
  alias      = "development_cluster_helm"
  kubernetes = "kubernetes.development_cluster"
}

module "gce-lb-dev-http" {
  source            = "GoogleCloudPlatform/lb-http/google"
  version           = "~> 6.2.0"
  project           = var.project_id
  name              = "gke-development-lb"
  target_tags       = ["gke-development"]
  firewall_networks = [google_compute_network.vpc_development.name]

  backends = {
    "0" = [
      {
        group = element(module.development_cluster.instance_groups, 0)
      },
      {
        group = element(module.development_cluster.instance_groups, 1)
      },
      {
        group = element(module.development_cluster.instance_groups, 2)
      },
    ]
  }

  backend_params = [
    // health check path, port name, port number, timeout seconds.
    "/,http,30000,10",
  ]
}

import {ScrollView, View} from 'react-native';
import React from 'react';

import CMSRenderer from '../../features/CMS';
import {
  CoreComponentType,
  HomePageComponentType,
} from '../../features/CMS/types/common';

import dataJson from '../../config/data.json';

const HomePage = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <View>
      <CMSRenderer
        components={[
          {
            _component: CoreComponentType.Header,
            key: '123',
            title: dataJson.core.header.title,
            leftIcon: dataJson.core.header.leftIcon,
            rightIcon: dataJson.core.header.rightIcon,
            rightOnPress: () => {
              props.navigation.navigate('Profile');
            },
          },
        ]}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 5, paddingBottom: 80}}>
        <CMSRenderer
          components={[
            {
              _component: HomePageComponentType.DeliveringSelection,
              key: '124',
              country: dataJson.core.homePage.deliveringSection.country,
              location: dataJson.core.homePage.deliveringSection.location,
            },
            {
              _component: HomePageComponentType.HeroSlide,
              key: '128',
              backgroundImageSrc:
                dataJson.core.homePage.heroSlide.backgroundImage,
              title: dataJson.core.homePage.heroSlide.title,
              subTitle: dataJson.core.homePage.heroSlide.subTitle,
              buttonTitle: dataJson.core.homePage.heroSlide.buttonTitle,
              handlePress: () => {
                props.navigation.navigate('ProductListPage');
              },
            },
            {
              _component: HomePageComponentType.HeroCategories,
              key: '127',
              title: dataJson.core.homePage.heroCategories.title,
              items: dataJson.core.homePage.heroCategories.items,
              onPress: () => {
                props.navigation.navigate('ProductListPage');
              },
            },
            {
              _component: HomePageComponentType.PromotionalGrid,
              key: '129',
              items: [
                {
                  key: dataJson.core.homePage.promotionalGrid.items[0].key,
                  heading:
                    dataJson.core.homePage.promotionalGrid.items[0].heading,
                  button1Text:
                    dataJson.core.homePage.promotionalGrid.items[0].button1Text,
                  onPress1: () => {
                    props.navigation.navigate('ProductListPage');
                  },
                  height: [180, 240, 260, 270],
                  image: dataJson.core.homePage.promotionalGrid.items[0].image,
                  width: ['100%', '50%', '100%', '100%'],
                },
                {
                  key: dataJson.core.homePage.promotionalGrid.items[1].key,
                  heading:
                    dataJson.core.homePage.promotionalGrid.items[1].heading,
                  button1Text:
                    dataJson.core.homePage.promotionalGrid.items[1].button1Text,
                  onPress1: () => {
                    props.navigation.navigate('ProductListPage');
                  },
                  height: [180, 240, 260, 270],
                  image: dataJson.core.homePage.promotionalGrid.items[1].image,
                  width: ['100%', '50%', '100%', '100%'],
                },
                {
                  key: dataJson.core.homePage.promotionalGrid.items[2].key,
                  heading:
                    dataJson.core.homePage.promotionalGrid.items[2].heading,
                  button1Text:
                    dataJson.core.homePage.promotionalGrid.items[2].button1Text,
                  onPress1: () => {
                    props.navigation.navigate('ProductListPage');
                  },
                  height: [180, 240, 260, 270],
                  image: dataJson.core.homePage.promotionalGrid.items[2].image,
                  width: ['100%', '50%', '100%', '100%'],
                },
              ],
            },
            {
              _component: HomePageComponentType.FeaturedCollection,
              key: '1251',
              title: 'In Season Products',
              products: [
                {
                  name: dataJson.core.homePage.featuredCollection.products[0]
                    .name,
                  key: dataJson.core.homePage.featuredCollection.products[0]
                    .key,
                  price: 40.0,
                  currency:
                    dataJson.core.homePage.featuredCollection.products[0]
                      .currency,
                  weight_unit:
                    dataJson.core.homePage.featuredCollection.products[0]
                      .weight_unit,
                  packaging:
                    dataJson.core.homePage.featuredCollection.products[0]
                      .packaging,
                  notes:
                    dataJson.core.homePage.featuredCollection.products[0].notes,
                  image:
                    dataJson.core.homePage.featuredCollection.products[0].image,
                  onProductPress: () => {
                    props.navigation.navigate('ProductPage');
                  },
                },
                {
                  name: dataJson.core.homePage.featuredCollection.products[1]
                    .name,
                  key: dataJson.core.homePage.featuredCollection.products[1]
                    .key,
                  price: 105.0,
                  currency:
                    dataJson.core.homePage.featuredCollection.products[1]
                      .currency,
                  weight_unit:
                    dataJson.core.homePage.featuredCollection.products[1]
                      .weight_unit,
                  packaging:
                    dataJson.core.homePage.featuredCollection.products[1]
                      .packaging,
                  notes:
                    dataJson.core.homePage.featuredCollection.products[1].notes,
                  image:
                    dataJson.core.homePage.featuredCollection.products[1].image,
                  onProductPress: () => {
                    props.navigation.navigate('ProductPage');
                  },
                },
                {
                  name: dataJson.core.homePage.featuredCollection.products[2]
                    .name,
                  key: dataJson.core.homePage.featuredCollection.products[2]
                    .key,
                  price: 7.35,
                  currency:
                    dataJson.core.homePage.featuredCollection.products[2]
                      .currency,
                  weight_unit:
                    dataJson.core.homePage.featuredCollection.products[2]
                      .weight_unit,
                  packaging:
                    dataJson.core.homePage.featuredCollection.products[2]
                      .packaging,
                  notes:
                    dataJson.core.homePage.featuredCollection.products[2].notes,
                  image:
                    dataJson.core.homePage.featuredCollection.products[2].image,
                  onProductPress: () => {
                    props.navigation.navigate('ProductPage');
                  },
                },
              ],
              handlePress: () => {
                props.navigation.navigate('ProductListPage');
              },
            },
            {
              _component: HomePageComponentType.FeaturedProduct,
              key: '126',
              productInfo: dataJson.core.homePage.featuredProduct.productInfo,
            },
            {
              _component: HomePageComponentType.SplitOfferCard,
              key: '131',
              title: 'Get Exclusive Offers',
              subtitle:
                'Get exclusive offers & more by signing up for our promotional email',
              image: dataJson.core.homePage.splitOfferCard.image,
              buttonTitle: 'View Offers',
            },
            {
              _component: HomePageComponentType.BlogPosts,
              key: '125',
              title: 'From the journal',
              mainBlog: {
                id: 1,
                title: dataJson.core.homePage.blogPosts.mainBlogs.title,
                image: dataJson.core.homePage.blogPosts.mainBlogs.image,
                published_date: 'May 26, 2022',
              },
              blogs: dataJson.core.homePage.blogPosts.blogs,
            },
            {
              _component: HomePageComponentType.TextWithImage,
              key: '132',
              title: dataJson.core.homePage.textWithImage.title,
              columns: dataJson.core.homePage.textWithImage.columns,
            },
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default HomePage;

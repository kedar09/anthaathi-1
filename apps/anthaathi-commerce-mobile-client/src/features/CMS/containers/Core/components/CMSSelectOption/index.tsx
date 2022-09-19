import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Divider, List} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import CMSBottomSheet from '../CMSBottomSheet';
import { FormField } from '../../../../components/RenderForm';
import { useFormValue } from '../../../../utils/useFormValue';

export type OptionDataProps = {
  id: number;
  key?: string;
  title: string;
  subtitle?: string;
  leftIconName?: string;
};

export interface CMSSelectOptionProps {
  title: string;
  options: [];
  optionOnPress?: (data: OptionDataProps) => void;
}

const CMSSelectOption = (props: FormField & CMSSelectOptionProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [isVisible, setVisible] = React.useState(false);
  const [, setValue] = useFormValue<number>(props.id);

  return (
    <View style={{marginHorizontal: 10}} testID="cmsSelectOption">
      <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
        {props.title}
      </Text>
      <View style={{marginVertical: 5}}>
        <ListItemData
          title={props.options[selectedOption]['title']}
          subtitle={props.options[selectedOption]['subtitle']}
          leftIconName={props.options[selectedOption]['leftIconName']}
          rightIconName={'chevron-right'}
          onPress={() => {
            setVisible(!isVisible);
          }}
        />
      </View>
      <CMSBottomSheet
        bottomSheetTitle={props.title}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: 'white',
          maxHeight: '40%',
          minHeight: '15%',
        }}
        bottomSheetTitleStyle={{color: '#364A15'}}
        setBottomSheetVisible={setVisible}
        bottomSheetVisible={isVisible}>
        <ScrollView>
          {props.options &&
            props.options.map((data: OptionDataProps, index: number) => (
              <ListItemData
                key={index}
                title={data.title}
                subtitle={data.subtitle}
                onPress={() => {
                  props.optionOnPress && props.optionOnPress(data);
                  setSelectedOption(index);
                  setValue(data.id);
                  setVisible(!isVisible);
                }}
                leftIconName={data.leftIconName}
                rightIconName={index === selectedOption ? 'check' : undefined}
                divider
              />
            ))}
        </ScrollView>
      </CMSBottomSheet>
    </View>
  );
};

const ListItemData = ({
  title,
  subtitle,
  leftIconName,
  rightIconName,
  onPress,
  divider = false,
}: {
  title: string;
  subtitle?: string;
  leftIconName?: string;
  rightIconName?: string;
  onPress?: () => void;
  divider?: boolean;
}) => {
  return (
    <>
      <List.Item
        onPress={onPress}
        style={{paddingVertical: subtitle ? 2 : 3, backgroundColor: '#fff'}}
        title={title}
        description={subtitle}
        left={props => {
          return (
            leftIconName && (
              <List.Icon
                {...props}
                icon={leftIconName}
                style={{marginLeft: 0, marginRight: 5}}
              />
            )
          );
        }}
        right={props => {
          return rightIconName && <List.Icon {...props} icon={rightIconName} />;
        }}
      />
      {divider && <Divider />}
    </>
  );
};

export default CMSSelectOption;

export const SelectOptionCMSInput = {
  _component: CoreComponentType.CMSSelectOption,
  component: CMSSelectOption,
};

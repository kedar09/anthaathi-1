import {View, Text, TextInput as RNTextInput} from 'react-native';
import React, {ComponentPropsWithRef} from 'react';
import {TextInput} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import {FormField} from '../../../../components/RenderForm';
import {useFormValue} from '../../../../utils/useFormValue';

export interface CMSTextInputProps
  extends ComponentPropsWithRef<typeof RNTextInput> {
  title: string;
  label: string;
  multiline?: boolean;
}

const CMSTextInput = (props: FormField & CMSTextInputProps) => {
  const [value, setValue] = useFormValue<string>(props.id);
  return (
    <View style={{marginHorizontal: 10, marginVertical: 5}}>
      {props.title && (
        <Text
          style={{
            color: '#364A15',
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 5,
          }}>
          {props.title}
        </Text>
      )}

      <TextInput
        mode="flat"
        label={props.label}
        multiline={props.multiline}
        style={[
          {backgroundColor: '#fff', fontSize: 14, height: 56},
          props.multiline && {height: 120},
        ]}
        activeUnderlineColor="#0f8443"
        value={value}
        onChangeText={prev => {
          setValue(prev);
        }}
      />
    </View>
  );
};

export default CMSTextInput;

export const TextInputCMSInput = {
  _component: CoreComponentType.CMSTextInput,
  component: CMSTextInput,
};

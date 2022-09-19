import React, {useEffect} from 'react';
import {atom, useRecoilState} from 'recoil';
import {View} from 'react-native';
import CMSTextInput, {
  CMSTextInputProps,
} from '../containers/Core/components/CMSTextInput';
import DatePicker, {
  DatePickerProps,
} from '../containers/Core/components/DatePicker';
import CMSSelectOption, { CMSSelectOptionProps } from '../containers/Core/components/CMSSelectOption';

export const formValueAtom = atom<Record<string, Record<string, object>>>({
  key: '_dynamicFormValues',
  default: {},
});

export const FormKeyContext = React.createContext<string>(
  null as never as string,
);

export interface FormField {
  type: 'input' | 'date' | 'textarea' | 'option';
  id: string;
  attributes?: Record<string, any>;
  validations?: Record<string, any>;
}

export interface RenderFormProps {
  id: string;
  body: (FormField & (CMSTextInputProps | DatePickerProps | CMSSelectOptionProps ))[];
}

const RenderForm = ({body, id}: RenderFormProps) => {
  const [, setFormValue] = useRecoilState(formValueAtom);

  useEffect(() => {
    const result: Record<string, object> = {};

    body.forEach(res => {
      result[res.id] = (res as any).value;
    });

    setFormValue(prevValue => ({
      ...prevValue,
      [id]: result,
    }));
  }, [id]);

  return (
    <FormKeyContext.Provider value={id}>
      {body.map(field => {
        let component: React.ReactNode;
        console.log(field);

        switch (field.type) {
          case 'input':
            component = <CMSTextInput {...field} />;
            break;
          case 'textarea':
            component = <CMSTextInput multiline={true} {...field} />;
            break;
          case 'date':
            component = <DatePicker {...field} />;
            break;
          case 'option':
            component = <CMSSelectOption {...field} />;
            break;
        }
        return <View key={field.id}>{component}</View>;
      })}
    </FormKeyContext.Provider>
  );
};

export default RenderForm;

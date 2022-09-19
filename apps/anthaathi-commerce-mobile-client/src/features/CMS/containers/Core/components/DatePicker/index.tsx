import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Divider} from 'react-native-paper';
import {CoreComponentType} from '../../../../types/common';
import CMSBottomSheet from '../CMSBottomSheet';
import {useIntl} from 'react-intl';
import {FormField} from '../../../../components/RenderForm';
import {useFormValue} from '../../../../utils/useFormValue';

export interface DatePickerProps {
  title?: string;
}

const DatePicker = (props: FormField & DatePickerProps) => {
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useFormValue<Date>(props.id);

  const formatDate = (dateData: Date) => {
    if (dateData) {
      return `${dateData.getDate()}/${
        dateData.getMonth() + 1
      }/${dateData.getFullYear()}`;
    } else {
      setValue(new Date());
      let dateData = new Date();
      return `${dateData.getDate()}/${
        dateData.getMonth() + 1
      }/${dateData.getFullYear()}`;
 
    }
  };

  return (
    <View testID="datePicker" style={{marginHorizontal: 10, marginVertical: 5}}>
      {props.title && (
        <Text style={{color: '#364A15', fontSize: 16, fontWeight: '600'}}>
          {props.title}
        </Text>
      )}

      <Button
        style={{
          marginVertical: 3,
          borderColor: '#E3E2E7',
          backgroundColor: '#fff',
        }}
        contentStyle={{
          paddingVertical: 5,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}
        labelStyle={{color: '#364A15'}}
        icon="pencil"
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined">
        {formatDate(value)}
      </Button>

      {Platform.OS === 'ios' && (
        <CMSBottomSheet
          bottomSheetTitle={intl.formatMessage({defaultMessage: 'Select Date'})}
          bottomSheetIconColor="#0A2463"
          bottomSheetStyle={{
            backgroundColor: 'white',
          }}
          bottomSheetTitleStyle={{color: '#0A2463'}}
          setBottomSheetVisible={setOpen}
          bottomSheetVisible={open}>
          <View>
            <Divider />
            <DateTimePicker
              mode="date"
              display={'spinner'}
              value={value}
              onChange={(_e, d) => {
                const currentDate = d || new Date();
                setValue(currentDate);
                setOpen(false);
              }}
            />
            <Divider />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                alignItems: 'center',
                width: '50%',
              }}
              onPress={() => setOpen(!open)}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#ff3d33'}}>
                {intl.formatMessage({defaultMessage: 'Cancel'})}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                alignItems: 'center',
                width: '50%',
              }}
              onPress={() => setOpen(!open)}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#017aff'}}>
                {intl.formatMessage({defaultMessage: 'Confirm'})}
              </Text>
            </TouchableOpacity>
          </View>
        </CMSBottomSheet>
      )}

      {Platform.OS === 'android' && open && (
        <DateTimePicker
          mode="date"
          value={value}
          onChange={(_e, d) => {
            const currentDate = d || new Date();
            setValue(currentDate);
            setOpen(false);
          }}
        />
      )}
    </View>
  );
};

export default DatePicker;

export const DatePickerCMSInput = {
  _component: CoreComponentType.DatePicker,
  component: DatePicker,
};

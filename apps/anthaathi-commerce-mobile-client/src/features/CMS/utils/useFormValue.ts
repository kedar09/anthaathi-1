import {useCallback, useContext} from 'react';
import {useRecoilState} from 'recoil';
import {FormKeyContext, formValueAtom} from '../components/RenderForm';

export function useFormValue<T>(fieldId: string): [T, (_: T) => void] {
  const formKey = useContext(FormKeyContext);
  if (!formKey) {
    throw new Error('Requires form key');
  }
  const [formValue, setFormValue] = useRecoilState(formValueAtom);

  const processedFormValue = formValue[formKey]?.[fieldId] as never as T;

  const onChangeValue = useCallback(
    (newValue: T) => {
      setFormValue(prevValue => ({
        ...prevValue,
        [formKey]: {
          ...(prevValue[formKey] || {}),
          [fieldId]: newValue as never,
        },
      }));
    },
    [formKey, fieldId],
  );

  return [processedFormValue, onChangeValue];
}

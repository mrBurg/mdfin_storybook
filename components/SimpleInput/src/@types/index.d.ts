import {
  ReactElement,
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
} from 'react';

export type TSimpleInputProps = Record<'placeholder' | 'value', string> &
  Partial<
    Record<'id' | 'errorMessage' | 'className', string> &
      Record<'error' | 'required', boolean> &
      Record<'callBack', ChangeEventHandler<HTMLInputElement>> &
      Record<'onBlur', FocusEventHandler<HTMLInputElement>>
  > &
  InputHTMLAttributes<HTMLInputElement>;

export { SimpleInput } from '..';

declare module 'mdfin-simple-input' {
  export function SimpleInput(props: TSimpleInputProps): ReactElement;
}

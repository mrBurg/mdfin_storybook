import { ReactElement } from 'react';
import { TSimpleCheckboxProps } from 'mdfin-simple-checkbox';

export type TCheckboxWidgetProps = TSimpleCheckboxProps;

export { CheckboxWidget } from '..';

declare module 'mdfin-checkbox-widget' {
  export function CheckboxWidget(): ReactElement;
}

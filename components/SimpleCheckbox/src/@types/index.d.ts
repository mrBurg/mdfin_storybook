import { ReactElement } from 'react';

export type TSimpleCheckboxProps = Partial<
  Record<'invalid' | 'checked', boolean> &
    Record<'label' | 'name' | 'className' | 'id', string> &
    Record<'onChange', (data: boolean, element?: HTMLElement) => void>
>;

export { SimpleCheckbox } from '..';

declare module 'mdfin-simple-checkbox' {
  export function SimpleCheckbox(): ReactElement;
}

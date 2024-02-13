import {
  ReactElement,
  MouseEvent,
  ButtonHTMLAttributes,
  LegacyRef,
} from 'react';

import { BUTTON_TYPE } from '..';

export { SimpleButton, BUTTON_TYPE } from '..';

export type TSimpleButtonProps = Record<'children', string> &
  Record<'onClick', (event: MouseEvent<HTMLButtonElement>) => void> &
  Partial<
    Record<'ref', LegacyRef<HTMLButtonElement>> & Record<'type', BUTTON_TYPE>
  > &
  ButtonHTMLAttributes<HTMLButtonElement>;

declare module 'mdfin-simple-button' {
  export function SimpleButton(props: TSimpleButtonProps): ReactElement;
}

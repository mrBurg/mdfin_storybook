import { ReactElement } from 'react';

import { TSimpleButtonProps } from 'mdfin-simple-button';
import { BUTTON_LAYOUT } from '..';

export type TButtonWidgetProps = TSimpleButtonProps &
  Partial<Record<'layout', BUTTON_LAYOUT>>;

export { ButtonWidget, BUTTON_LAYOUT, BUTTON_TYPE } from '..';

declare module 'mdfin-button-widget' {
  export function ButtonWidget(): ReactElement;
}

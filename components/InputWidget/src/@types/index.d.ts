import { ReactElement } from 'react';

import { TSimpleInputProps } from 'mdfin-simple-input';
import { LAYOUT } from '..';

export type TInputWidgetProps = TSimpleInputProps &
  Partial<
    Record<'label' | 'inputClassName', string> &
      Record<'invalid' | 'placeholderEmbedded', boolean> &
      Record<'tabIndex', number> &
      Record<'layout', LAYOUT>
  >;

export type CurrentRef<T> = { current: T };

export { InputWidget, LAYOUT, INPUT_TYPE } from '..';

declare module 'mdfin-input-widget' {
  export function InputWidget(props: TInputWidgetProps): ReactElement;
}

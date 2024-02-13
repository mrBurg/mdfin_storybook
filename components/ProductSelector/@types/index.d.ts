import { ReactElement } from 'react';

import { TMarkStyle } from 'mdfin-slider-widget';

export type TProductSelectorProps = Record<
  'buttonText' | 'amountSign' | 'amountText' | 'termSign' | 'termText',
  string
> &
  Record<
    | 'amountStep'
    | 'amountMin'
    | 'amountMax'
    | 'termStep'
    | 'termMin'
    | 'termMax',
    number
  > &
  Record<'amountMarks' | 'termMarks', TMarkStyle> &
  Partial<Record<'className', string>> &
  Record<
    'onAmountChangeHandler' | 'onTermChangeHandler',
    (value: number) => void
  >;

export { ProductSelector } from '..';

declare module 'mdfin-product-selector' {
  export function ProductSelector(): ReactElement;
}

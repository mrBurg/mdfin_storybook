import { ReactElement, ReactNode } from 'react';
import { SliderProps } from 'rc-slider/lib/Slider';
import { MarkObj } from 'rc-slider/lib/Marks';

export type TMarkStyle = Record<string | number, ReactNode | MarkObj>;

export type TSimpleSlider = SliderProps &
  Partial<Record<'markStyle', TMarkStyle>>;

export { SimpleSlider } from '..';

declare module 'mdfin-simple-slider' {
  export function SimpleSlider(): ReactElement;
}

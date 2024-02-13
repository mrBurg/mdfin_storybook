import { ReactElement } from 'react';

import { TSimpleSlider } from 'mdfin-simple-slider';
export { TMarkStyle } from 'mdfin-simple-slider';

export type TSliderWidgetProps = TSimpleSlider &
  Partial<
    Record<'output', boolean | ReactElement> &
      Record<'outputText' | 'sign' | 'outputData', string>
  >;

export { SliderWidget } from '..';

declare module 'mdfin-slider-widget' {
  export function SliderWidget(): ReactElement;
}

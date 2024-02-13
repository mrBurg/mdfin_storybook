import { ReactElement } from 'react';

import { ContentBlock } from 'mdfin-content-block/@types';

export type TCarouselProps = Record<'content', ContentBlock[]> &
  Partial<
    Record<'className', string> &
      Record<'dots', boolean> &
      Record<'speed' | 'slidesToShow', number>
  >;

export { Carousel } from '..';

declare module 'mdfin-carousel' {
  export function Carousel(): ReactElement;
}

import { ReactElement } from 'react';

export type ContentBlockProps = Partial<
  Record<'title' | 'buttonText' | 'className', string> &
    Record<'action', () => void>
> &
  Record<'content', string | string[]>;

export { ContentBlock } from '..';

declare module 'mdfin-content-block' {
  export function ContentBlock(): ReactElement;
}

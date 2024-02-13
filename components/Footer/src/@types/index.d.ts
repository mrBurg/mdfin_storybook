import { ReactElement } from 'react';

/* export type TFooterProps = {
  text: string;
  title: string;
  tags?: Record<string | number, any>;
}; */

export type TValue = Record<'title' | 'text', string> &
  Partial<Record<'links' | 'tags', Record<string | number, unknown>>>;

export type TFooterProps = Record<'value', TValue | TValue[]>;

export { Footer } from '..';

declare module 'mdfin-footer' {
  export function Footer(props: TFooterProps): ReactElement;
}

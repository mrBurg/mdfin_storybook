import { ReactElement } from 'react';

type TItem = Record<'title' | 'description', string>;

export type TContentSwitcherProps = Record<'itemsList', TItem[]> &
  Record<'buttonText', string> &
  Partial<Record<'className', string>>;

export { ContentSwitcher } from '..';

declare module 'mdfin-content-switcher' {
  export function ContentSwitcher(): ReactElement;
}

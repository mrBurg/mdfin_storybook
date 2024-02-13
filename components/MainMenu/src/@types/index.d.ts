import { ReactElement } from 'react';

import { ALIGNMENT } from '..';

export type TMenuItem = Record<'href' | 'title', string> &
  Partial<Record<'index', number>>;

export type TMainMenuProps = Record<'items', TMenuItem[]> &
  Partial<
    Record<'alignment', ALIGNMENT> &
      Record<'isDevice', boolean> &
      Record<'className', string>
  >;

export { MainMenu, ALIGNMENT } from '..';

declare module 'mdfin-main-menu' {
  export function MainMenu(): ReactElement;
}

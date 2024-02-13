import { ReactElement } from 'react';

type TTabs = Record<'id' | 'name' | 'title' | 'image', string> & {
  text: string[];
};

export type TTabsBlockProps = Record<'buttonText', string> & {
  tabs: TTabs[];
};

export { TabsSwitcher } from '..';

declare module 'mdfin-tabs-switcher' {
  export function TabsSwitcher(): ReactElement;
}

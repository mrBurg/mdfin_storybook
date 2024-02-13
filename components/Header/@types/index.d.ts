import { ReactElement } from 'react';

export type HeaderProps = Record<'MainMenu', ReactElement> &
  Partial<Record<'Logo', ReactElement> & Record<'className', string>>;

export { Header } from '..';

declare module 'mdfin-header' {
  export function Header(props: HeaderProps): ReactElement;
}

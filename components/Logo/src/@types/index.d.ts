import { ReactElement } from 'react';

import { LogoType } from '..';

export { LogoType, Logo } from '..';

export type LogoProps = Partial<Record<'className' | 'href', string>> &
  Record<'value', string | ReactElement> &
  Partial<Record<'clickable', boolean> & Record<'type', LogoType>>;

declare module 'mdfin-logo' {
  export function Logo(props: LogoProps): ReactElement;
}

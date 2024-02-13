import { ReactElement } from 'react';

export type TCookiesProps = Record<'text' | 'buttonText', string> &
  Record<'buttonAction', () => void> &
  Partial<
    Record<'visibility', boolean> &
      Record<'className', string> &
      Record<'style', Record<string, unknown>>
  >;

export type TCookieData = Record<'path', string> & Record<'expires', number>;

export { Cookies, isBrowser, setCookie, getCookie, delCookie } from '..';

declare module 'mdfin-cookies' {
  export function Cookies(): ReactElement;
}

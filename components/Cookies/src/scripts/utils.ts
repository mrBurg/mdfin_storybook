import _ from 'lodash';
import { TCookieData } from '../@types';

export const isBrowser: boolean = typeof window != void 0;

export function setCookie(
  name: string,
  value: any,
  cookieData?: TCookieData | string | number
) {
  const date = new Date();
  const data = `${name}=${value}`;
  let cookiePath = 'path=/';
  let dateExpires = '';
  let cookie = {
    path: '',
    expires: 0,
  };

  if (cookieData) {
    switch (true) {
      case _.isString(cookieData):
        cookiePath = `path=${cookieData}`;

        break;
      case _.isNumber(cookieData):
        date.setTime(date.getTime() + +cookieData * 24 * 60 * 60 * 1000);

        dateExpires = `expires=${date.toUTCString()}`;
        break;
      case _.isPlainObject(cookieData):
        cookie = cookieData as TCookieData;

        if (cookie.path) {
          cookiePath = cookie.path;
        }

        if (cookie.expires) {
          date.setTime(date.getTime() + cookie.expires * 24 * 60 * 60 * 1000);

          dateExpires = `expires=${date.toUTCString()}`;
        }
        break;
    }
  }

  document.cookie = `${data};${cookiePath};${dateExpires};SameSite=None;Secure`;
}

export function getCookie(name: string) {
  const cookies = {} as Record<string, unknown>;

  if (isBrowser) {
    const cookiesData = decodeURIComponent(document.cookie).split('; ');

    _.each(cookiesData, (part: string): void => {
      const [name, data] = part.split('=');

      cookies[name] = data;
    });

    if (Object.hasOwnProperty.call(cookies, name)) {
      return cookies[name];
    }
  }

  return '';
}

export function delCookie(name: string) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export function clearCookie(): void {
  const cookies = document.cookie.split(';');

  _.each(cookies, (cookie) => {
    const [name] = cookie.split('=');

    delCookie(name);
  });
}

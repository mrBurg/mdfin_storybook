import { ReactElement } from 'react';

export { Authorization } from '..';

export type TAuthorizationProps = any /* {
  staticData: Record<
    'phoneNumber',
    Record<'id' | 'placeholder' | 'phoneMask', string>
  > &
    Record<'checkbox', Record<'id', string>> &
    Record<'agreeText' | 'buttonText', string>;
} */;

declare module 'mdfin-authorization' {
  export function Authorization(): ReactElement;
}

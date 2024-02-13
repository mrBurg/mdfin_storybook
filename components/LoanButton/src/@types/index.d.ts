import { ReactElement } from 'react';

import { COLOR_STYLE, LAOUT } from '..';

export type TLoanButtonProps = Record<
  'userStore',
  Record<
    'fetchWithAuth',
    (callback: () => void, tokenRequired?: boolean) => void
  >
> &
  Record<
    'loanStore',
    Record<'getLoan', (callback: () => void, location?: string) => void>
  > &
  Record<'children', string> &
  Partial<
    Record<'className' | 'id' | 'location', string> &
      Record<'colorStyle', COLOR_STYLE> &
      Record<'layout', LAOUT>
  >;

export { LoanButton, COLOR_STYLE, LAOUT } from '..';

declare module 'mdfin-loan-button' {
  export function LoanButton(): ReactElement;
}

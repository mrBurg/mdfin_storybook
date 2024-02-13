import { ReactElement } from 'react';

export type TLoanObtainingPanelProps = Record<
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
    Record<'className', string> & Record<'style', Record<string, unknown>>
  >;

export { LoanObtainingPanel, EVENT } from '..';

declare module 'mdfin-cookies' {
  export function LoanObtainingPanel(): ReactElement;
}

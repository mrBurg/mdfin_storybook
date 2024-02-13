import { ReactElement } from 'react';

export type CounterProps = Record<'title' | 'subTitle', string> &
  Record<'countValue', number> &
  Partial<Record<'className', string>>;

export { Counter } from '..';

declare module 'mdfin-counter' {
  export function Counter(props: CounterProps): ReactElement;
}

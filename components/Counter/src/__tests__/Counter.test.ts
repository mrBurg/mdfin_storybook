import { CounterProps } from '../@types';
import { Counter } from '../index';

test('Counter', () => {
  expect(Counter({} as CounterProps)).toBe('Counter Label');
});

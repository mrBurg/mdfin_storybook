import { LogoProps } from '../@types';
import { Logo } from '../index';

test('Logo', () => {
  expect(Logo({} as LogoProps)).toBe('Logo Label');
});

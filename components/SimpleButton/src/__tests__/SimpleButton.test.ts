import { TSimpleButtonProps } from '../@types';
import { SimpleButton } from '../index';

test('SimpleButton', () => {
  expect(SimpleButton({} as TSimpleButtonProps)).toBe('SimpleButton Label');
});

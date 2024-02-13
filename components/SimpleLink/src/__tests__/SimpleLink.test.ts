import { TSimpleLinkProps } from '../@types';
import { SimpleLink } from '../index';

test('SimpleLink', () => {
  expect(SimpleLink({} as TSimpleLinkProps)).toBe('SimpleLink Label');
});

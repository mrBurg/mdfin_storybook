import { ApplicationInfoProps } from '../@types';
import { ApplicationInfo } from '../index';

test('ApplicationInfo', () => {
  expect(ApplicationInfo({} as ApplicationInfoProps)).toBe(
    'ApplicationInfo Label'
  );
});

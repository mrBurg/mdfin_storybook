import { TInputWidgetProps } from '../@types';
import { InputWidget } from '../index';

test('InputWidget', () => {
  expect(InputWidget({} as TInputWidgetProps)).toBe('InputWidget Label');
});

import { ReactElement } from 'react';

export { QuestionForm } from '..';

type propKeys =
  | 'title'
  | 'subtitle'
  | 'policyCheckboxText'
  | 'validFormMessage'
  | 'validFormDescription'
  | 'validButtonText'
  | 'invalidWorkEmailMessage'
  | 'invalidPolicyCheckboxMessage'
  | 'invalidFormMessage'
  | 'invalidFormDescription'
  | 'invalidButtonText';

export type TQuestionFormProps = Partial<
  Record<
    Exclude<propKeys, 'firstName' | 'workEmail' | 'lastName' | 'companyName'>,
    string
  > &
    Record<
      Extract<propKeys, 'firstName' | 'workEmail' | 'lastName' | 'companyName'>,
      | Record<'placeholder' | 'id', string>
      | Record<'placeholder' | 'id' | 'size', string>
    >
>;

declare module 'mdfin-question-form' {
  export function QuestionForm(props: TQuestionFormProps): ReactElement;
}

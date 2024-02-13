import { ReactElement } from 'react';
import { LAYOUT } from '..';

type DataRow = Partial<Record<'text' | 'link' | 'type', string>> & {
  value?: string | number | boolean;
};

export type ApplicationInfoProps = {
  params: DataRow[];
  title: string;
  className?: string;
  layout?: LAYOUT;
};

export { LAYOUT, ApplicationInfo } from '..';

declare module 'mdfin-application-info' {
  export function ApplicationInfo(props: ApplicationInfoProps): ReactElement;
}

import { ReactElement } from 'react';

import { TSimpleLinkProps } from 'mdfin-simple-link';

export type TLinkWidgetProps = TSimpleLinkProps &
  Partial<Record<'track', boolean>>;

export { LinkWidget, SimpleLinkTypes, TARGET, REL } from '..';

declare module 'mdfin-link-widget' {
  export function LinkWidget(): ReactElement;
}

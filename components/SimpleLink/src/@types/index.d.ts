import { ReactElement, MouseEvent, LegacyRef } from 'react';

import { SimpleLinkTypes, TARGET } from '..';

export type TSimpleLinkProps = Partial<
  Record<'href' | 'id' | 'className', string> &
    Record<'onClick', (event: MouseEvent<HTMLAnchorElement>) => void> &
    Record<'type', SimpleLinkTypes> &
    Record<'target', TARGET> &
    Record<'role', string> &
    Record<'ref', LegacyRef<HTMLAnchorElement>>
> &
  Record<'children', string | ReactElement<HTMLSpanElement | HTMLImageElement>>;

export { SimpleLink, SimpleLinkTypes, TARGET, REL } from '..';

declare module 'mdfin-simple-link' {
  export function SimpleLink(props: TSimpleLinkProps): ReactElement;
}

import { ReactElement } from 'react';

export { SocialLinks, socialLinkList, socialLinkDataList } from '..';

export type TSocialLinkDataList = Record<'name' | 'href', string> & {
  icon?: ReactElement;
};

export type TSocialLinksProps = Partial<
  Record<'className' | 'FB' | 'TW' | 'LI' | 'IG' | 'YT', string>
> & {
  socialLinks: string[];
};

declare module 'mdfin-social-links' {
  export function SocialLinks(props: TSocialLinksProps): ReactElement;
}

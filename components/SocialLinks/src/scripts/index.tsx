import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import scss from './../scss/SocialLinks.scss';

import FacebookIcon from './../../assets/icons/fb.svg';
import Linkedin from './../../assets/icons/linkedin.svg';
import Twitter from './../../assets/icons/twitter.svg';

import { LinkWidget, TARGET, REL } from 'mdfin-link-widget';

import { TSocialLinkDataList, TSocialLinksProps } from '../@types';

export enum socialLinkList {
  FB = 'Facebook',
  TW = 'Twitter',
  LI = 'Linkedin',
  IG = 'Instagram',
  YT = 'Youtube',
}

export const socialLinkDataList = {
  [socialLinkList.FB]: {
    name: socialLinkList.FB,
    href: 'https://www.facebook.com',
    icon: <FacebookIcon />,
  },
  [socialLinkList.TW]: {
    name: socialLinkList.TW,
    href: 'https://twitter.com',
    icon: <Twitter />,
  },
  [socialLinkList.LI]: {
    name: socialLinkList.LI,
    href: 'https://www.linkedin.com',
    icon: <Linkedin />,
  },
  [socialLinkList.IG]: {
    name: socialLinkList.IG,
    href: 'https://www.instagram.com',
  },
  [socialLinkList.YT]: {
    name: socialLinkList.YT,
    href: 'https://www.youtube.com',
  },
};

function SocialLinks(props: TSocialLinksProps) {
  const { socialLinks, className } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(classNames(scss.socialLinks, className));
  }, [className]);

  return (
    <div className={styleClass}>
      {_.map(socialLinks, (item) => {
        const linkData = socialLinkDataList[
          socialLinkList[item as keyof typeof socialLinkList]
        ] as TSocialLinkDataList;

        let href = linkData.href;

        if (props[item as keyof TSocialLinksProps]) {
          href = String(props[item as keyof TSocialLinksProps]);
        }

        return (
          <LinkWidget
            key={item}
            rel={REL.NOREFERRER}
            target={TARGET.BLANK}
            href={href}
          >
            {linkData.icon || linkData.name}
          </LinkWidget>
        );
      })}
    </div>
  );
}

export { SocialLinks };

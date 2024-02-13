import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import scss from './../scss/SimpleLink.scss';

import { constants } from 'mdfin-theme';
import { TSimpleLinkProps } from '../@types';

const {
  roles: { WidgetRoles },
} = constants;

export enum TARGET {
  BLANK = '_blank',
  SELF = '_self',
  TOP = '_top',
  PARENT = '_parent',
}

export enum REL {
  NOREFERRER = 'noreferrer',
  NOOPENER = 'noopener',
}

export enum SimpleLinkTypes {
  INLINE_BLOCK = 'inlineBlock',
  INLINE = 'inline',
}

function SimpleLink(props: TSimpleLinkProps) {
  const {
    type = SimpleLinkTypes.INLINE,
    role = WidgetRoles.link,
    className,
    children,
    ...restProps
  } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(
      classNames('simple-link', scss.simpleLink, scss[type], className)
    );
  }, [className]);

  return (
    <a {...restProps} role={role} className={styleClass}>
      {children}
    </a>
  );
}

export { SimpleLink };

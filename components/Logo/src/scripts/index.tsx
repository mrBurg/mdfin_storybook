import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import scss from './../scss/Logo.scss';

import { LogoProps } from '../@types';

export enum LogoType {
  IMAGE = 'image',
  TEXT = 'text',
}

function Logo(props: LogoProps) {
  const {
    value,
    className,
    clickable = true,
    type = LogoType.IMAGE,
    ...restProps
  } = props;

  const children = (() => {
    switch (type) {
      case LogoType.IMAGE:
        return <img src={String(value)} alt="Logo" className={scss.img} />;
      case LogoType.TEXT:
        return value;
      default:
        return value;
    }
  })();

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(
      classNames(
        { [scss.disable]: !clickable },
        { [scss.logoText]: type == LogoType.TEXT },
        className
      )
    );
  }, [className]);

  return (
    <a {...restProps} className={styleClass}>
      {children}
    </a>
  );
}

export { Logo };

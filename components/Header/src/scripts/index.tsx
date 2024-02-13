import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import scss from './../scss/Header.scss';

import { HeaderProps } from '../@types';

function Header(props: HeaderProps) {
  const { Logo, MainMenu, className } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(classNames('header', className, scss.header));
  }, [className]);

  return (
    <div className={styleClass}>
      {Logo}
      {MainMenu}
    </div>
  );
}

export { Header };

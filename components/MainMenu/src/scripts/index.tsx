import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';

import scss from './../scss/MainMenu.scss';

import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';
import { LinkWidget } from 'mdfin-link-widget';

import Hamburger from './../../assets/icons/hamburger.svg';

import { thisIsDevice } from './utils';
import { TMainMenuProps, TMenuItem } from '../@types';

export enum ALIGNMENT {
  LEFT = 'left',
  RIGHT = 'right',
}

function MainMenu(props: TMainMenuProps) {
  const { alignment = ALIGNMENT.LEFT, items, className } = props;

  const [isDevice /* setIsDevice */] = useState(props.isDevice || thisIsDevice);
  const [showMenu, setShowMenu] = useState(true);
  const [styleClass, setStyleClass] = useState('');
  const [hamburger, setHamburger] = useState(null as any);
  const [menu, setMenu] = useState(null as any);

  const isDeviceClass = useMemo(
    () => ({ [scss.navDevice]: isDevice }),
    [isDevice]
  );

  const alignmentPosition = useCallback(
    (data: boolean) => data && scss[`buttonHolder${alignment}`],
    [alignment]
  );

  const onClickHandler = useCallback(() => {
    if (isDevice) {
      setShowMenu(!showMenu);
    }
  }, [isDevice, showMenu]);

  const renderMenu = useCallback(() => {
    if (showMenu) {
      return (
        <nav
          className={classNames(
            scss.nav,
            alignmentPosition(!isDevice),
            isDeviceClass
          )}
        >
          {_.sortBy(items, (item: TMenuItem) => item.index).map(
            (item: TMenuItem, key: number) => (
              <LinkWidget key={key} href={item.href} className={scss.link}>
                {item.title}
              </LinkWidget>
            )
          )}
        </nav>
      );
    }
  }, [showMenu, alignmentPosition, isDevice, isDeviceClass, items]);

  const renderHamburger = useCallback(() => {
    return (
      <div
        className={classNames(
          scss.buttonHolder,
          alignmentPosition(Boolean(isDevice))
        )}
      >
        <ButtonWidget
          type={BUTTON_TYPE.BUTTON_TYPE}
          className={scss.button}
          onClick={() => onClickHandler()}
        >
          <Hamburger />
        </ButtonWidget>
      </div>
    );
  }, [isDevice, alignmentPosition]);

  useEffect(() => {
    if (!menu) {
      setMenu(renderMenu());
    }

    if (isDevice && !hamburger) {
      setHamburger(renderHamburger());
    }
  }, [showMenu, menu, renderMenu, isDevice, renderHamburger]);

  /* useEffect(() => {
    if (isDevice) {
      setShowMenu(!showMenu);
    }
  }, [isDevice, showMenu]); */

  useEffect(() => {
    setStyleClass(classNames('main-menu', className, scss.mainMenu));
  }, [className]);

  console.log('Work!!!');

  return (
    <div className={styleClass}>
      {menu}
      {hamburger}
    </div>
  );
}

export { MainMenu };

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import scss from './../scss/SimpleButton.scss';

import { constants } from 'mdfin-theme';
import { TSimpleButtonProps } from '../@types';

const {
  roles: { WidgetRoles },
} = constants;

export enum BUTTON_TYPE {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

function SimpleButton(props: TSimpleButtonProps) {
  const {
    role = WidgetRoles.button,
    type = BUTTON_TYPE.SUBMIT,
    children,
    className,
    ...restProps
  } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(
      classNames('simple-button', scss.simpleButton, scss[type], className)
    );
  }, [className]);

  return (
    <button {...restProps} className={styleClass} type={type} role={role}>
      {children}
    </button>
  );
}

export { SimpleButton };

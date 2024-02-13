import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

import scss from './../scss/LoanButton.scss';

import { ButtonWidget } from 'mdfin-button-widget';
import { TLoanButtonProps } from '../@types';

export enum COLOR_STYLE {
  FULLCOLOR = 'fullcolor',
  MONOCHROME = 'monochrome',
}

export enum LAOUT {
  SQUARE = 'square',
  ROUNDED = 'rounded',
  OVAL = 'oval',
}

function LoanButton(props: TLoanButtonProps) {
  const {
    className,
    location,
    children,
    loanStore,
    userStore,
    colorStyle = COLOR_STYLE.FULLCOLOR,
    layout = LAOUT.ROUNDED,
    ...restProps
  } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  const currentColorStyle = useMemo(
    () => scss[`loanButton_${colorStyle}`],
    [colorStyle]
  );

  const currentLayout = useMemo(() => scss[`loanButton_${layout}`], [layout]);

  return (
    <ButtonWidget
      {...restProps}
      className={classNames(
        scss.loanButton,
        currentColorStyle,
        currentLayout,
        className
      )}
      onClick={() => {
        setIsDisabled(true);

        userStore.fetchWithAuth(() =>
          loanStore.getLoan(() => setIsDisabled(false), location)
        );
      }}
      disabled={isDisabled}
    >
      {children}
    </ButtonWidget>
  );
}

export { LoanButton };

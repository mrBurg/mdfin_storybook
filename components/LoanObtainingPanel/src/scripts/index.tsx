import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import scss from './../scss/LoanObtainingPanel.scss';

import { TLoanObtainingPanelProps } from '../@types';
import { LoanButton } from 'mdfin-loan-button';
import { constants } from 'mdfin-theme';

const {
  roles: { WidgetRoles },
} = constants;

export enum EVENT {
  SCROLL = 'scroll',
}

function LoanObtainingPanel(props: TLoanObtainingPanelProps) {
  const { children, className, style, ...restProps } = props;

  const container = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    const onScroll = () => setShow(Boolean(window.scrollY));

    window.addEventListener(EVENT.SCROLL, onScroll);

    return () => window.removeEventListener(EVENT.SCROLL, onScroll);
  }, []);

  useEffect(() => {
    setStyleClass(
      classNames('loan-obtaining-panel', scss.loanObtaining, className, {
        [scss.show]: show,
      })
    );
  }, [className]);

  useEffect(() => {
    if (container.current) {
      if (show) {
        container.current.classList.toggle('slideUp');

        return;
      }

      container.current.classList.remove('slideUp');
    }
  }, [container, show]);

  return (
    <div className={styleClass} ref={container} style={style}>
      <div className={scss.loanObtainingHolder}>
        <LoanButton
          {...restProps}
          className={scss.loanObtainingButton}
          children={children}
          id={`Loan-${WidgetRoles.button}-popup`}
        />
      </div>
    </div>
  );
}

export { LoanObtainingPanel };

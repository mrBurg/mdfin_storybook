import React, { useCallback, useEffect, useState } from 'react';
import { TCookiesProps } from '../@types';

import scss from './../scss/Cookies.scss';

import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';
import { setCookie } from './utils';
import classNames from 'classnames';

export enum COOKIE {
  COOKIES_ACCESS = 'Cookies_Access',
}

function Cookies(props: TCookiesProps) {
  const {
    visibility = true,
    text,
    buttonText,
    className,
    buttonAction,
    style,
  } = props;

  const [display, setDisplay] = useState(visibility);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const closePopup = useCallback(() => {
    setCookie(COOKIE.COOKIES_ACCESS, 1, 365);
    setDisplay(false);
    buttonAction();
  }, []);

  useEffect(() => {
    setStyleClass(classNames(className, scss.cookies));
  }, [className]);

  if (display) {
    return (
      <div style={style} className={styleClass}>
        {/* <WithTag
          tags={_.reduce(
            cookiesPrivacy.tags,
            (accum, item, index) => {
              const { type, label } = item;

              accum[index] = (
                <GetAttachment
                  attachmentType={type}
                  label={label}
                  className={scss.link}
                  key={index}
                />
              );
              return accum;
            },
            {} as TJSON
          )}
        > */}
        <p>{text}</p>
        {/* </WithTag> */}
        <ButtonWidget
          className={scss.button}
          onClick={closePopup}
          type={BUTTON_TYPE.BUTTON}
        >
          {buttonText}
        </ButtonWidget>
      </div>
    );
  }

  return null;
}

export { Cookies };

import classNames from 'classnames';
import React, { forwardRef, LegacyRef, Ref, useMemo } from 'react';

import scss from './../scss/ButtonWidget.scss';

import { SimpleButton } from 'mdfin-simple-button';
import { TButtonWidgetProps } from '../@types';

export { BUTTON_TYPE } from 'mdfin-simple-button';

export enum BUTTON_LAYOUT {
  BUTTON = 'button',
  INLINE = 'inline',
}

function ButtonWidgetComponent(
  props: TButtonWidgetProps,
  ref: LegacyRef<HTMLButtonElement>
) {
  const { layout = BUTTON_LAYOUT.BUTTON, className, ...restProps } = props;

  const button = useMemo(() => {
    let buttonClass = (() => {
      switch (layout) {
        case BUTTON_LAYOUT.BUTTON:
          return scss.buttonWidget;

        case BUTTON_LAYOUT.INLINE:
          return scss.buttonWidgetInline;

        default:
          console.log('Button layout not specified');

          return scss.buttonWidget;
      }
    })();

    return (
      <SimpleButton
        {...restProps}
        className={classNames('button-widget', buttonClass, className)}
        ref={ref}
      />
    );
  }, [props]);

  return (
    // <WithTracking id={id} events={[EMouseEvents.CLICK]}>
    button
    // </WithTracking>
  );
}

export const ButtonWidget = forwardRef(ButtonWidgetComponent);

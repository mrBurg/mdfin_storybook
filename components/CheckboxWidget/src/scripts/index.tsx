import React, { useState, useEffect } from 'react';
import { SimpleCheckbox } from 'mdfin-simple-checkbox';
import classNames from 'classnames';

import scss from './../scss/CheckboxWidget.scss';

import { TCheckboxWidgetProps } from '../@types';

function CheckboxWidget(props: TCheckboxWidgetProps) {
  const { className, ...restProps } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(
      classNames('checkbox-widget', scss.CheckboxWidget, className)
    );
  }, [className]);

  return (
    <div className={styleClass}>
      {/* <WithTracking
        id={`CheckboxWidget-${WidgetRoles.checkbox}`}
        events={[EFormEvents.CHANGE]}
      > */}
      <SimpleCheckbox
        {...restProps}
        // className={classNames(scss.CheckboxWidget, className)}
      />
      {/* </WithTracking> */}
    </div>
  );
}

export { CheckboxWidget };

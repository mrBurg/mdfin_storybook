import React, { useCallback, useState, useEffect } from 'react';
import { getSuffix } from 'mdfin-utils';
import classNames from 'classnames';

import scss from './../scss/SimpleCheckbox.scss';

import { constants } from 'mdfin-theme';
import { TSimpleCheckboxProps } from '../@types';

const {
  roles: { WidgetRoles },
} = constants;

function SimpleCheckbox(props: TSimpleCheckboxProps) {
  const {
    className,
    label,
    name,
    invalid,
    checked,
    onChange,
    id,
    ...restProps
  } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [inputId, setInputId] = useState(null as unknown as string);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const renderLabel = useCallback(() => {
    if (label) {
      return (
        <label
          className={classNames(scss.label, { [scss.invalid]: invalid })}
          htmlFor={inputId}
        >
          {label}
        </label>
      );
    }
  }, [invalid, inputId, label]);

  const changeHandler = useCallback((data: EventTarget & HTMLInputElement) => {
    if (onChange) {
      onChange(data.checked, data);
    }

    setIsChecked(data.checked);
  }, []);

  /* const inputId = useMemo(() => id || `checkbox_${getSuffix()}`, [id]); */

  useEffect(() => {
    setInputId(id || `checkbox_${getSuffix()}`);
  }, [id]);

  useEffect(() => {
    setStyleClass(classNames('simple-checkbox', scss.checkbox, className));
  }, [className]);

  return (
    <div className={styleClass}>
      <input
        {...restProps}
        type={WidgetRoles.checkbox}
        name={name}
        role={WidgetRoles.checkbox}
        checked={isChecked}
        id={inputId}
        onChange={(event) => changeHandler(event.target)}
      />
      {renderLabel()}
    </div>
  );
}

export { SimpleCheckbox };

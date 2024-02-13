import React from 'react';
import classNames from 'classnames';

import scss from './../scss/SimpleInput.scss';

import { TSimpleInputProps } from '../@types';

function SimpleInput(props: TSimpleInputProps) {
  const {
    error,
    errorMessage,
    className,
    required = false,
    callBack = () => void 0,
    onBlur = () => void 0,
    ...restProps
  } = props;

  return (
    <div className={classNames('simple-input', scss.inputWrap, className)}>
      <input
        {...restProps}
        className={classNames(scss.input, {
          [scss.errorInput]: error,
        })}
        onChange={(event) => callBack(event)}
        required={required}
        onBlur={(event) => onBlur(event)}
      />
      {error && (
        <span className={scss.errorMessage}>
          {errorMessage ? errorMessage : 'This field cannot be empty'}
        </span>
      )}
    </div>
  );
}

export { SimpleInput };

import React, {
  ChangeEvent,
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  FocusEvent,
  useState,
} from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import scss from './../scss/InputWidget.scss';

import { CurrentRef, TInputWidgetProps } from '../@types';

export enum LAYOUT {
  DEFAULT = 'default',
  SOFT = 'soft',
}

export enum INPUT_TYPE {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  TEL = 'tel',
  // FILE = 'file',
  CHECKBOX = 'checkbox',
  HIDDEN = 'hidden',
  CURRENCY = 'currency',
}

function InputWidgetComponent(
  props: TInputWidgetProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    placeholderEmbedded = false,
    layout = LAYOUT.DEFAULT,
    style: inlineStyle,
    className,
    inputClassName,
    label,
    invalid,
    placeholder,
    value,
    type,
    onChange,
    onFocus,
    ...restProps
  } = props;

  const innerRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(value);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const currency = useMemo(() => ` \${gt.gettext('Currency')}`, []);

  const inputProps = useMemo(() => {
    switch (type) {
      case INPUT_TYPE.NUMBER:
        return {
          type: INPUT_TYPE.NUMBER,
          value: String(inputValue).replace(/[^\d/./,]/g, ''),
        };
      case INPUT_TYPE.CURRENCY:
        return {
          type: INPUT_TYPE.TEL,
          value: inputValue, // + currency,
        };
      default:
        return { type, inputValue };
    }
  }, [type, inputValue]);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // updateSelectionPosition(event);

      let currentValue = event.currentTarget.value;

      switch (inputProps.type) {
        case INPUT_TYPE.NUMBER:
          if (!currentValue) {
            currentValue = inputProps.inputValue as string;
          }

          break;
      }

      event.currentTarget.value = currentValue;

      if (onChange) {
        onChange(event);
      }

      setInputValue(event.currentTarget.value);
    },
    [inputProps.type, inputProps.inputValue, onChange]
  );

  const onFocusHandler = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>) => {
      // updateSelectionPosition(event);

      const currentValue = event.currentTarget.value;

      switch (type) {
        case INPUT_TYPE.CURRENCY:
          event.currentTarget.value = currentValue.replace(currency, '');
      }

      if (onFocus) {
        onFocus(event);
      }
    },
    [currency, onFocus, type]
  );

  useEffect(() => {
    const target = innerRef.current;

    if (target) {
      if (ref) {
        if (_.isFunction(ref)) {
          ref(target);
        } else {
          (ref as CurrentRef<HTMLInputElement>).current = target;
        }
      }

      /* switch (type) {
        case INPUT_TYPE.CURRENCY:
          target.selectionStart = selection.start;
          target.selectionEnd = selection.end;
      } */
    }
  }, [ref, type]);

  useEffect(() => {
    setStyleClass(
      classNames('input-widget', scss.inputWidget, scss[layout], className, {
        [scss.placeholder]: placeholder && !placeholderEmbedded,
      })
    );
  }, [className]);

  return (
    <div className={styleClass} style={inlineStyle}>
      <input
        {...restProps}
        className={classNames(
          'input-widget__input',
          scss.input,
          inputClassName,
          { [scss.error]: invalid }
        )}
        // role={AbstractRoles.input}
        value={inputProps.inputValue}
        placeholder={placeholder && placeholderEmbedded ? placeholder : void 0}
        onChange={(event) => onChangeHandler(event)}
        onFocus={(event) => onFocusHandler(event)}
        ref={innerRef}
        type={inputProps.type}
      />
      {type == INPUT_TYPE.CURRENCY && (
        <div className={classNames('currency', scss.currency)}>{currency}</div>
      )}
      {placeholder && !placeholderEmbedded && (
        <label
          className={classNames('input-widget__label', scss.label, {
            [scss.error]: invalid,
            [scss.notEmpty]: inputProps.inputValue,
          })}
          htmlFor={props.id || void 0}
        >
          {label || placeholder}
        </label>
      )}
      {layout == LAYOUT.SOFT && (
        <hr className={classNames('input-widget__hr', scss.hr)} />
      )}
    </div>
  );
}

const InputWidget = forwardRef(InputWidgetComponent);

export { InputWidget };

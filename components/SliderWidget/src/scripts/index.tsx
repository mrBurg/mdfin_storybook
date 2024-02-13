import classNames from 'classnames';
import _ from 'lodash';
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useState,
  useEffect,
} from 'react';
import htmlParser from 'html-react-parser';

import scss from './../scss/SliderWidget.scss';

import { SimpleSlider } from 'mdfin-simple-slider';
import { TSliderWidgetProps } from '../@types';
import { divideDigits } from './utils';

function SliderWidget(props: TSliderWidgetProps) {
  const {
    className,
    output = false,
    defaultValue = 0,
    outputText,
    outputData,
    sign,
    onChange,
    onAfterChange,
    ...restProps
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const renderOutputValue = useCallback(() => {
    if (outputData) {
      if (_.isString(outputData)) {
        return htmlParser(outputData);
      }

      return outputData;
    }

    return (
      <>
        <span>{divideDigits(Number(value))}</span>
        <span className={scss.outputResultSign}>{sign}</span>
      </>
    );
  }, [value, props]);

  const renderOutput = useCallback(() => {
    if (output) {
      switch (true) {
        case _.isBoolean(output):
          return (
            <div className={scss.output}>
              <div className={scss.outputText}>{outputText}</div>
              <div className={scss.outputResult}>{renderOutputValue()}</div>
            </div>
          );
        case isValidElement(output):
          return cloneElement(output as ReactElement, {
            ...(output as ReactElement).props,
            children: String(value) || (output as ReactElement).props.children,
          });
      }
    }
  }, [value, props]);

  const onChangeHandler = useCallback((value: number) => {
    setValue(value);

    if (onChange) {
      onChange(value);
    }
  }, []);

  const onAfterChangeHandler = useCallback((value: number) => {
    setValue(value);

    if (onAfterChange) {
      onAfterChange(value);
    }
  }, []);

  useEffect(() => {
    setStyleClass(classNames(scss.sliderWidget, className));
  }, [className]);

  return (
    <div className={styleClass}>
      {renderOutput()}
      <div className={scss.sliderWidgetPanel}>
        {/* <WithTracking
          id={`SliderWidget-${WidgetRoles.slider}`}
          events={[EWidgetEvent.AFTER_CHANGE]}
        > */}
        <SimpleSlider
          {...restProps}
          defaultValue={value}
          value={value}
          onChange={(value: number) => onChangeHandler(value)}
          onAfterChange={(value: number) => onAfterChangeHandler(value)}
        />
        {/* </WithTracking> */}
      </div>
    </div>
  );
}

export { SliderWidget };

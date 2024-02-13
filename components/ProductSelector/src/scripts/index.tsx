import _ from 'lodash';
import classNames from 'classnames';
import React, { useCallback, useState, useEffect } from 'react';

import scss from './../scss/ProductSelector.scss';

import { SliderWidget } from 'mdfin-slider-widget';
import { LinkWidget, SimpleLinkTypes } from 'mdfin-link-widget';
import { TProductSelectorProps } from '../@types';

function ProductSelector(props: TProductSelectorProps) {
  const {
    className,
    amountSign,
    amountText,
    amountStep,
    amountMin,
    amountMax,
    amountMarks,
    onAmountChangeHandler,
    termSign,
    termText,
    termStep,
    termMin,
    termMax,
    termMarks,
    onTermChangeHandler,
    buttonText,
  } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const getValue = useCallback(
    (marks: Record<string, unknown>, currentValue: number) => {
      if (_.size(marks) && marks[currentValue]) {
        return (marks[currentValue] as Record<string, unknown>).label;
      }

      return '';
    },
    []
  );

  const [amounOutputData, setAmounOutputData] = useState(
    getValue(amountMarks, amountMin)
  );

  const [termOutputData, setTermOutputData] = useState(
    getValue(termMarks, termMin)
  );

  const onAmountOnChangeHandler = useCallback((value: number) => {
    setAmounOutputData(getValue(amountMarks, value));
    if (onAmountChangeHandler) {
      onAmountChangeHandler(value);
    }
  }, []);

  const onTermOnChangeHandler = useCallback((value: number) => {
    setTermOutputData(getValue(termMarks, value));
    if (onTermChangeHandler) {
      onTermChangeHandler(value);
    }
  }, []);

  useEffect(() => {
    setStyleClass(classNames(scss.productSelector, className));
  }, [className]);

  return (
    <div className={styleClass}>
      <div className={scss.slider}>
        <SliderWidget
          output
          outputData={amounOutputData}
          sign={amountSign}
          outputText={amountText}
          className={scss.sliderItem}
          marks={amountMarks}
          step={amountStep}
          min={amountMin}
          max={amountMax}
          defaultValue={amountMin}
          onChange={(data: number) => onAmountOnChangeHandler(data)}
        />
        <SliderWidget
          output
          outputData={termOutputData}
          sign={termSign}
          outputText={termText}
          className={scss.sliderItem}
          marks={termMarks}
          step={termStep}
          min={termMin}
          max={termMax}
          defaultValue={termMin}
          onChange={(data: number) => onTermOnChangeHandler(data)}
        />
      </div>
      <div className={scss.buttonHolder}>
        <LinkWidget type={SimpleLinkTypes.INLINE_BLOCK} className={scss.button}>
          {buttonText}
        </LinkWidget>
      </div>
    </div>
  );
}

export { ProductSelector };

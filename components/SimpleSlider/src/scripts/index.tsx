import _ from 'lodash';
import classNames from 'classnames';
import React, { useMemo, useState, useEffect } from 'react';
import htmlParser from 'html-react-parser';

// import 'rc-slider/assets/index.css';
import scss from './../scss/SimpleSlider.scss';

import Slider from 'rc-slider';
import { constants } from 'mdfin-theme';

import styleData from './style.json';
import { TMarkStyle, TSimpleSlider } from '../@types';
import { MarkObj } from 'rc-slider/lib/Marks';

const {
  roles: { AbstractRoles },
} = constants;

function SimpleSlider(props: TSimpleSlider) {
  const {
    dots = false,
    dotStyle,
    handleStyle,
    trackStyle,
    markStyle,
    marks,
    className,
    ...restProps
  } = props;

  const markaData = useMemo(() => {
    if (markStyle) {
      _.each(
        marks,
        (item) =>
          ((item as MarkObj).style = Object.assign(
            {},
            (item as MarkObj).style,
            markStyle
          ))
      );
    }

    _.each(marks, (item) => {
      if (_.isString((item as MarkObj).label)) {
        (item as MarkObj).label = htmlParser(String((item as MarkObj).label));
      }
    });

    return marks;
  }, [markStyle]);

  const [styleClass, setStyleClass] = useState(null as unknown as string);
  const [slider, setSlider] = useState(null as unknown as any);

  useEffect(() => {
    setStyleClass(
      classNames(scss.simpleSlider, className, {
        [scss.simpleSlider_marks]: markaData,
      })
    );
  }, [className]);

  useEffect(() => {
    setSlider(
      <Slider
        {...restProps}
        role={AbstractRoles.range}
        dots={dots}
        dotStyle={Object.assign({}, styleData.styleDot, dotStyle)}
        handleStyle={Object.assign({}, styleData.styleHandle, handleStyle)}
        trackStyle={Object.assign({}, styleData.styleTrack, trackStyle)}
        marks={markaData as TMarkStyle}
      />
    );
  }, [className]);

  return <div className={styleClass}>{slider}</div>;
}

export { SimpleSlider };

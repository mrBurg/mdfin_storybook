import classNames from 'classnames';
import React, { useState, useEffect, ReactElement } from 'react';

import scss from './../scss/Carousel.scss';

import Slider from 'react-slick';

import { TCarouselProps } from '../@types';

function Carousel(props: TCarouselProps) {
  const { className, content, dots, speed, slidesToShow } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);
  const [slider, setSlider] = useState(null as unknown as ReactElement);

  useEffect(() => {
    setSlider(
      <Slider
        infinite={true}
        centerMode={true}
        slidesToScroll={1}
        dots={typeof dots == 'boolean' ? dots : true}
        speed={speed || 500}
        slidesToShow={slidesToShow || 3}
      >
        {content}
      </Slider>
    );
  }, []);

  useEffect(() => {
    setStyleClass(classNames(scss.carousel, className));
  }, [className]);

  return <div className={styleClass}>{slider}</div>;
}

export { Carousel };

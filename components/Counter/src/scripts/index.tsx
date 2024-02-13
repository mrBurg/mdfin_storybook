import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CounterProps } from '../@types';
import scss from './../scss/Counter.scss';

function Counter(props: CounterProps) {
  const { title, subTitle, countValue, className } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(classNames(scss.container, className));
  }, [className]);

  return (
    <div className={styleClass}>
      <div className={scss.wrap}>
        <div className={scss.title}>{title}</div>
        <div className={scss.subTitle}>{subTitle}</div>
      </div>
      <div className={scss.value}>{countValue}</div>
    </div>
  );
}

export { Counter };

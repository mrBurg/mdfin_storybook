import React, { useCallback } from 'react';
import _ from 'lodash';

import scss from './../scss/Footer.scss';

import { TFooterProps, TValue } from '../@types';

function Footer(props: TFooterProps) {
  const { value } = props;

  const renderItem = useCallback(
    (item: TValue, index = null) => (
      <div key={index} className={scss.item}>
        {item.title && <p className={scss.itemTitle}>{item.title}</p>}
        <p className={scss.itemText}>{item.text}</p>
      </div>
    ),
    []
  );

  const renderValue = useCallback(() => {
    switch (true) {
      case _.isArray(value):
        return _.map(value, renderItem);

      default:
        return renderItem(value as TValue);
    }
  }, [value]);

  return <footer className={scss.wrap}>{renderValue()}</footer>;
}

export { Footer };

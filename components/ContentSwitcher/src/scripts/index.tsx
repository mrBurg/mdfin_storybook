import React, { useCallback, useState, useEffect } from 'react';
import htmlParser from 'html-react-parser';
import _ from 'lodash';
import classNames from 'classnames';

import scss from './../scss/ContentSwitcher.scss';

import { SimpleLink, SimpleLinkTypes } from 'mdfin-simple-link';
import Arrows from './../../assets/arrows.svg';

import { TContentSwitcherProps } from '../@types';

function ContentSwitcher(props: TContentSwitcherProps) {
  const { itemsList, buttonText, className } = props;

  const [choosedItem, setChoosedItem] = useState(itemsList[0].title);
  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const getCurrentItem = useCallback(
    (title: string) => setChoosedItem(title),
    []
  );

  useEffect(() => {
    setStyleClass(classNames(scss.accordionList, className));
  }, [className]);

  return (
    <ul className={styleClass}>
      {_.map(itemsList, (item, index) => {
        const isChoosedItem = choosedItem.includes(item.title);

        return (
          <li
            key={index}
            className={classNames(scss.accordionItem, {
              [scss.choosedItem]: isChoosedItem,
            })}
          >
            <span
              style={{
                backgroundImage: isChoosedItem ? `url(${Arrows})` : 'none',
              }}
              className={classNames(scss.itemTitle, {
                [scss.activeTitle]: isChoosedItem,
              })}
              onClick={() => getCurrentItem(item.title)}
            >
              {item.title}
            </span>
            <div className={scss.descriptionBlockWrap}>
              <div className={scss.descriptionBlock}>
                <span>{htmlParser(item.description)}</span>
                <SimpleLink
                  className={scss.buttonComponent}
                  onClick={() => {}}
                  type={SimpleLinkTypes.INLINE_BLOCK}
                >
                  {buttonText}
                </SimpleLink>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { ContentSwitcher };

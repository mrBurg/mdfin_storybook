import React, { ReactElement } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import scss from './Theme.module.scss';

import { scssConstants /* constants */ } from 'mdfin-theme';
import { copy2Clipboard } from 'mdfin-utils';

/* const {
  roles: { WidgetRoles },
} = constants; */

const sizeKeys = [
  'xxl',
  'xxs',
  'small',
  'xs',
  'mob',
  'sm',
  'md',
  'tab',
  'lg',
  'medium',
  'xl',
];

const colorKeys = [
  ['black', 'white'],
  ['border'],
  ['yellow-dark', 'yellow', 'yellow-misty'],
  ['orange-dark', 'orange', 'orange-light', 'orange-misty'],
  ['red-dark', 'red', 'red-light', 'red-misty'],
  ['pink'],
  ['green-dark', 'green', 'green-light', 'green-misty'],
  ['blue-dark', 'blue', 'blue-light', 'blue-misty'],
  ['indigo'],
  ['rose-dark', 'rose', 'rose-light', 'rose-misty'],
  ['violet-dark', 'violet', 'violet-light', 'violet-misty'],
  ['gray-dark', 'gray', 'gray-light', 'gray-misty'],
  ['graphite-dark', 'graphite'],
];

export function Sizes() {
  const data = _.pick(scssConstants, sizeKeys);
  const sortedData = _.sortBy(_.toPairs(data), (item) =>
    parseInt(_.last(item))
  );
  const allSizes = _.map(sortedData, (item) => parseInt(_.last(item)));
  const maxSize = Math.max.apply(null, allSizes);

  return (
    <tbody>
      {_.map(sortedData, (item, key) => {
        const width = `${(100 / maxSize) * parseInt(_.last(item))}%`;

        return (
          <tr
            key={key}
            className={scss.sizeRow}
            onClick={(event) => {
              if (event.ctrlKey) {
                return copy2Clipboard(_.last(item));
              }

              copy2Clipboard(`$${_.head(item)}`);
            }}
          >
            <td>${_.head(item)}</td>
            <td>
              <div
                style={{ width }}
                className={classNames(scss.size, _.head(item))}
              >
                {_.last(item)}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export function Colors() {
  const sortedData = _.sortBy(colorKeys, (item) => _.head(item));

  return (
    <div className={scss.colors}>
      {_.map(sortedData, (item: string[], index) => {
        const sortedColors = _.sortBy(item, (item) => item);

        return (
          <div key={index}>
            {_.map(sortedColors, (item, index) => {
              const [colorName, colorValue] = _.head(
                _.toPairs(_.pick(scssConstants, item))
              ) as string[];

              return (
                <button
                  key={index}
                  className={classNames(scss.tile, {
                    [scss.tileFirst]: !index,
                  })}
                  style={{ backgroundColor: colorValue }}
                  onClick={(event) => {
                    if (event.ctrlKey) {
                      return copy2Clipboard(colorValue);
                    }

                    copy2Clipboard(`$${colorName}`);
                  }}
                  // onKeyPress={() => copy2Clipboard(colorValue)}
                  // tabIndex={0}
                  // role={WidgetRoles.button}
                >
                  <div
                    className={scss.tileContent}
                    style={{ color: colorValue }}
                  >
                    <span>${colorName}</span>
                    <br />
                    <span>{colorValue}</span>
                  </div>
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

type TFontData = Record<
  'fileName' | 'font-family' | 'font-weight' | 'font-style' | 'font-display',
  string
> & {
  src: [string, string?][];
};

export function rowData(data: TFontData[]) {
  const headerData = _.reduce(
    _.head(data),
    (accum, _item, index) => {
      accum.push(
        <td key={index}>
          {index} {index == 'src' && 'url([ path ]) format([ format ])'}
        </td>
      );

      return accum;
    },
    [] as ReactElement[]
  );

  const bodyData = _.reduce(
    data,
    (acum, item, index) => {
      const rowStyle = {
        fontFamily: item['font-family'],
        fontWeight: item['font-weight'],
        fontStyle: item['font-style'],
      };

      acum.push(
        <tr
          key={index}
          style={rowStyle}
          onClick={() => {
            copy2Clipboard(
              `@font-face ${JSON.stringify(
                {
                  'font-family': /\s/g.test(item['font-family'])
                    ? `&1${item['font-family']}&1`
                    : item['font-family'],
                  'font-weight': item['font-weight'],
                  'font-style': item['font-style'],
                  'font-display': item['font-display'],
                  src: `url(&1${_.head(item.src)}&1)`,
                  'src*': `${_.map(
                    _.last(item.src),
                    (item: string[]) =>
                      `url(&1${_.head(item)}&1) format(&1${_.last(item)}&1)`
                  ).join('&2')};`,
                },
                null,
                2
              )}`
                .replace(/(src)\*/g, '$1')
                .replace(/"/g, '')
                .replace(/,/g, ';')
                .replace(/&1/g, '"') // quotes
                .replace(/&2/g, ', ') // comma
            );
          }}
        >
          {_.reduce(
            item,
            (accum, item, index) => {
              if (index == 'src') {
                accum.push(
                  <td key={index}>
                    <ul className={scss.srcList}>
                      {_.map(item as TFontData['src'], (item, index) => (
                        <li key={index}>
                          {_.head(item)} {_.last(item) && `[ ${_.last(item)} ]`}
                        </li>
                      ))}
                    </ul>
                  </td>
                );
              } else {
                accum.push(<td key={index}>{item}</td>);
              }

              return accum;
            },
            [] as ReactElement[]
          )}
        </tr>
      );

      return acum;
    },
    [] as ReactElement[]
  );

  return (
    <>
      <thead className={scss.thead}>
        <tr>{headerData}</tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </>
  );
}

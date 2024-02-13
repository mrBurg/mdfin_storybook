import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import scss from './../scss/ApplicationInfo.scss';

import { ApplicationInfoProps } from '../@types';

export enum LAYOUT {
  DEFAULT = 'default',
  SHADED = 'shaded',
  CENTERED = 'centered',
}

function ApplicationInfo(props: ApplicationInfoProps) {
  const { className, title, params, layout = LAYOUT.DEFAULT } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(classNames(scss[layout], scss.applicationInfo, className));
  }, [className]);

  return (
    <div className={styleClass}>
      {title && <div className={scss.title}>{title}</div>}
      <table className={scss.datatable}>
        <tbody>
          {_.map(params, (item, key) => {
            if (!item.value) {
              return;
            }

            return (
              <Fragment key={key}>
                <tr>
                  <td>{item.text}</td>
                  <td>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={scss.link}
                        target={'_blank'}
                        rel={'noreferrer'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { ApplicationInfo };

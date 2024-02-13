import React, { useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import scss from './../scss/TabsSwitcher.scss';

import { LinkWidget, SimpleLinkTypes, TARGET } from 'mdfin-link-widget';
import { ButtonWidget, BUTTON_LAYOUT, BUTTON_TYPE } from 'mdfin-button-widget';
import { TTabsBlockProps } from '../@types';

function TabsSwitcher(props: TTabsBlockProps) {
  const { tabs, buttonText } = props;

  const [activeTab, setActiveItem] = useState('business');

  const activeTabItem = _.filter(tabs, (tab) => tab.id == activeTab)[0];

  return (
    <div className={scss.content}>
      <div className={scss.tabsWrap}>
        {_.map(tabs, (tab, index) => (
          <ButtonWidget
            key={index}
            className={classNames(scss.tab, {
              ['active']: activeTab.includes(tab.id),
              [scss.active]: activeTab.includes(tab.id),
            })}
            onClick={() => setActiveItem(tab.id)}
            type={BUTTON_TYPE.BUTTON}
            layout={BUTTON_LAYOUT.BUTTON}
          >
            {tab.name}
          </ButtonWidget>
        ))}
      </div>

      <div className={scss.description}>
        <div className={scss.listWrap}>
          <span className={scss.tabTitle}>{activeTabItem.title}</span>
          <ul className={scss.list}>
            {_.map(activeTabItem.text, (item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>

          <LinkWidget
            className={scss.buttonComponent}
            onClick={() => {}}
            type={SimpleLinkTypes.INLINE_BLOCK}
            target={TARGET.SELF}
          >
            {buttonText}
          </LinkWidget>
        </div>

        <div
          className={scss.image}
          style={{
            backgroundImage: `url('${activeTabItem.image}')`,
          }}
        />
      </div>
    </div>
  );
}

export { TabsSwitcher };

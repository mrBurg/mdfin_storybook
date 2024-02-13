import React, { useCallback, useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import scss from './../scss/ContentBlock.scss';

import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';
import { ContentBlockProps } from '../@types';

function ContentBlock(props: ContentBlockProps) {
  const { title, content, buttonText, action, className } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  const renderTitle = useCallback(() => {
    if (title) {
      return <h3 className={classNames(scss.title)}>{title}</h3>;
    }
  }, [title]);

  const renderDefault = useCallback(
    () => <div className={classNames(scss.content)}>{content}</div>,
    [content]
  );

  const renderList = useCallback(
    () => (
      <ul className={classNames(scss.content)}>
        {_.map(content, (item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ),
    [content]
  );

  const renderContent = useCallback(() => {
    switch (true) {
      case _.isArray(content):
        return renderList();
      default:
        return renderDefault();
    }
  }, [content]);

  const renderButton = useCallback(() => {
    if (_.isFunction(action)) {
      return (
        <ButtonWidget
          className={classNames(scss.button)}
          type={BUTTON_TYPE.BUTTON}
          onClick={() => action()}
        >
          {buttonText}
        </ButtonWidget>
      );
    }
  }, [action, buttonText]);

  useEffect(() => {
    setStyleClass(classNames('content-block', scss.contentBlock, className));
  }, [className]);

  return (
    <div className={styleClass}>
      {renderTitle()}
      {renderContent()}
      {renderButton()}
    </div>
  );
}

export { ContentBlock };

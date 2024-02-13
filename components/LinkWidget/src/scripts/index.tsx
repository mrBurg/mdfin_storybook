import React, { forwardRef, Ref, useMemo } from 'react';

import scss from './../scss/LinkWidget.scss';

import { SimpleLink } from 'mdfin-simple-link';
import { TLinkWidgetProps } from '../@types';
import classNames from 'classnames';

export { SimpleLinkTypes, TARGET, REL } from 'mdfin-simple-link';

function LinkWidgetComponent(
  props: TLinkWidgetProps,
  ref: Ref<HTMLButtonElement>
) {
  const { track = true, className, children, ...restProps } = props;

  const link = useMemo(
    () => (
      <SimpleLink
        {...restProps}
        className={classNames(scss.linkWidget, className)}
        ref={ref}
      >
        {children}
      </SimpleLink>
    ),
    [props]
  );

  if (track) {
    return (
      // <WithTracking id={id} events={[EMouseEvents.CLICK]}>
      link
      // </WithTracking>
    );
  }

  return link;
}

export const LinkWidget = forwardRef(LinkWidgetComponent);

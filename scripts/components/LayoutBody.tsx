// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ComponentChildren, Fragment } from 'preact';

/**
 * The props for the layout's body.
 */
export interface LayoutBodyProps {
  /**
   * The children of the layout's body.
   */
  children?: ComponentChildren;
}

/**
 * The body of the app's layout.
 */
export const LayoutBody = (props: LayoutBodyProps) => {
  const {children} = props;
  return (
    <Fragment>{children}</Fragment>
  );
};

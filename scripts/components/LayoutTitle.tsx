// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ComponentChildren, Fragment } from 'preact';
import { useEffect } from 'preact/hooks';
import {withProvidedProps} from "js/components/withProvidedProps";

/**
 * The props for the layout's title.
 */
export interface LayoutTitleProps {
  /**
   * The element(s) to use as the layout's title.
   */
  children?: ComponentChildren;

  /**
   * The title of the document to set (i.e. sets <title></title>).
   */
  documentTitle?: string;
}

/**
 * The title of the layout.
 * This sets the state of the layout's title to the given children.
 */
export const LayoutTitle = withProvidedProps((props: LayoutTitleProps) => {
  const {children, documentTitle} = props;
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  return (<Fragment>{children}</Fragment>);
});

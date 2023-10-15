// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ComponentChildren, Fragment, VNode, toChildArray } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { LayoutTitleStateContext } from 'js/contexts/LayoutTitleStateContext';

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
 * The layout's title component.
 * This sets the state of the layout's title to the given children.
 */
const LayoutTitleComponent = (props: LayoutTitleProps) => {
  const {children, documentTitle} = props;
  const [_layoutTitle, setLayoutTitle] = useContext(LayoutTitleStateContext);
  setLayoutTitle(children);
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  return (<Fragment></Fragment>);
};

/**
 * The consumer of the title of the layout.
 * This displays the layout's title.
 */
const Consumer = () => {
  const layoutTitleState = useContext(LayoutTitleStateContext);
  const [layoutTitle, _setLayoutTitle] = layoutTitleState;
  return (<Fragment>{layoutTitle}</Fragment>);
};

type LayoutTitleComponentInteraface = typeof LayoutTitleComponent;

/**
 * The interface for the Layout.Title component.
 */
export interface LayoutTitleInterface extends LayoutTitleComponentInteraface {
  /**
   * The consumer of the title of the layout.
   * This displays the layout's title.
   */
  Consumer: typeof Consumer;
}

/**
 * The title of the layout.
 * This sets the state of the layout's title to the given children.
 */
export const LayoutTitle: LayoutTitleInterface = Object.assign(LayoutTitleComponent, {
  Consumer,
});

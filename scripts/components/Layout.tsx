// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { ComponentChildren } from 'preact';
import { LayoutBody } from 'js/components/LayoutBody';
import { LayoutHeader } from 'js/components/LayoutHeader';
import { LayoutTitle } from 'js/components/LayoutTitle';
import { LayoutTitleStateContext } from 'js/contexts/LayoutTitleStateContext';
import { useLayoutTitleState } from 'js/hooks/useLayoutTitleState';

/**
 * The props for the app's layout.
 */
export interface LayoutProps {
  /**
   * The children of the layout.
   * This should probably just be Layout.* components.
   */
  children?: ComponentChildren;
}

/**
 * The app's layout component.
 */
const LayoutComponent = (props: LayoutProps) => {
  const { children } = props;
  const layoutTitleState = useLayoutTitleState();

  return (
    <div class="container">
      <LayoutTitleStateContext.Provider value={layoutTitleState}>
        <LayoutHeader />
        <LayoutBody>
          { children }
        </LayoutBody>
      </LayoutTitleStateContext.Provider>
    </div>
  );
};

type LayoutComponentInterface = typeof LayoutComponent;

/**
 * The interface for the Layout component.
 */
export interface LayoutInterface extends LayoutComponentInterface {
  /**
   * The body of the layout.
   */
  Body: typeof LayoutBody;

  /**
   * The header of the layout.
   */
  Header: typeof LayoutHeader;

  /**
   * Thet title of the layout
   */
  Title: typeof LayoutTitle;
}

/**
 * The app's layout.
 */
export const Layout: LayoutInterface = Object.assign(LayoutComponent, {
  Body: LayoutBody,
  Header: LayoutHeader,
  Title: LayoutTitle,
});

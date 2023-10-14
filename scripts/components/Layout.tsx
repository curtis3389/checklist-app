import { ComponentChildren } from 'preact';
import { useContext } from 'preact/hooks';
import { LayoutBody } from 'js/components/LayoutBody';
import { LayoutHeader } from 'js/components/LayoutHeader';
import { LayoutTitle } from 'js/components/LayoutTitle';
import { LayoutTitleStateContext } from 'js/contexts/LayoutTitleStateContext';
import { useLayoutTitleState } from 'js/hooks/useLayoutTitleState';

export interface LayoutProps {
  children?: ComponentChildren;
}

const LayoutComponent = (props: LayoutProps) => {
  const { children } = props;
  const layoutTitleState = useLayoutTitleState();

  return (
    <div>
      <LayoutTitleStateContext.Provider value={layoutTitleState}>
        <LayoutHeader />
        <LayoutBody>
          { children }
        </LayoutBody>
      </LayoutTitleStateContext.Provider>
    </div>
  );
};

export const Layout = Object.assign(LayoutComponent, {
  Body: LayoutBody,
  Header: LayoutHeader,
  Title: LayoutTitle,
});

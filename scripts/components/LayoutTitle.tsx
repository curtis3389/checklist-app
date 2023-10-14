import { ComponentChildren, Fragment } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { LayoutTitleStateContext } from 'js/contexts/LayoutTitleStateContext';

export interface LayoutTitleProps {
  children?: ComponentChildren;
}

const LayoutTitleComponent = (props: LayoutTitleProps) => {
  const {children} = props;
  const [_layoutTitle, setLayoutTitle] = useContext(LayoutTitleStateContext);
  setLayoutTitle(children);
  return (<Fragment></Fragment>);
};

const Consumer = () => {
  const layoutTitleState = useContext(LayoutTitleStateContext);
  const [layoutTitle, _setLayoutTitle] = layoutTitleState;
  return (<div>{layoutTitle}</div>);
};

export const LayoutTitle = Object.assign(LayoutTitleComponent, {
  Consumer,
});

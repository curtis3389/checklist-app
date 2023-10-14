import { ComponentChildren } from 'preact';

export interface LayoutBodyProps {
  children?: ComponentChildren;
}

export const LayoutBody = (props: LayoutBodyProps) => {
  const {children} = props;
  return (
    <div>{children}</div>
  );
};

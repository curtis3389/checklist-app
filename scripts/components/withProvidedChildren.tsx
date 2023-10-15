// Copyright (c) Curtis Hollibaugh. All rights reserved.

import { createContext, JSX, ComponentType, ComponentChildren, Fragment, Attributes, Ref } from 'preact';
import { StateUpdater, useContext, useState } from 'preact/hooks';

type ComponentWithChildrenProps = JSX.IntrinsicAttributes & Readonly<Attributes & {
  children?: ComponentChildren;
  ref?: Ref<any>;
}>;

export function withProvidedChildren<PropsType extends ComponentWithChildrenProps>(WrappedComponent: ComponentType<PropsType>) {
  const Context = createContext<[ComponentChildren, StateUpdater<ComponentChildren>] | undefined>(undefined);
  const ContextProvider = (props: ComponentWithChildrenProps) => {
    const { children } = props;
    const state = useState<ComponentChildren | undefined>(undefined);
    return (
      <Context.Provider value={state}>
        { children }
      </Context.Provider>
    );
  };
  const Provider = (props: ComponentWithChildrenProps) => {
    const { children } = props;
    const [_, setChildren] = useContext(Context);
    setChildren(children);
    return (<Fragment></Fragment>);
  };
  const Consumer = (props: PropsType) => {
    //const { children: ignored, ...rest } = props;
    const [children, _] = useContext(Context);
    return (
      <WrappedComponent>
        { children }
      </WrappedComponent>
    );
  };
  return Object.assign(Provider, {
    Consumer,
    Context,
  });
};

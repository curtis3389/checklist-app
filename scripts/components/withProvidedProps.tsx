// Copyright (c) Curtis Hollibaugh. All rights reserved.

import {
  createContext,
  ComponentType,
  Fragment,
  RenderableProps,
} from 'preact';
import { StateUpdater, useContext, useState } from 'preact/hooks';

/**
 * Makes the given component receive its props separate from where it's rendered.
 * @param WrappedComponent The component to enhance.
 */
export function withProvidedProps<P extends RenderableProps<{}>>(WrappedComponent: ComponentType<P>) {
  const Context = createContext<[P, StateUpdater<P>] | undefined>(undefined);
  const ContextProvider = (props: RenderableProps<{}>) => {
    const { children } = props;
    const state = useState<P | undefined>(undefined);
    return (
      <Context.Provider value={state}>
        { children }
      </Context.Provider>
    );
  };
  const Provider = (props: P) => {
    const [_props, setProps] = useContext(Context);
    setProps(props);
    return (<Fragment></Fragment>);
  };
  const Consumer = () => {
    const [props, _setProps] = useContext(Context);
    return (
      <WrappedComponent {...props}>
      </WrappedComponent>
    );
  };

  return Object.assign(Provider, {
    Consumer,
    Context,
    Provider: ContextProvider,
  });
}

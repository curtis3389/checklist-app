import { RoutableProps } from 'preact-router';
import { HelloWorld } from 'js/HelloWorld';

export const Home = (_: RoutableProps) => {
  return (
    <HelloWorld />
  );
};

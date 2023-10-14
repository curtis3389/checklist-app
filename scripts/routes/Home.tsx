import { RoutableProps } from 'preact-router';
import { Counter } from 'js/components/Counter';
import { HelloWorld } from 'js/components/HelloWorld';

export const Home = (_: RoutableProps) => {
  return (
    <div>
      <HelloWorld />
      <Counter />
    </div>
  );
};

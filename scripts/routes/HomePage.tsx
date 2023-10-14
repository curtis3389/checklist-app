import { RoutableProps } from 'preact-router';
import { Counter } from 'js/components/Counter';
import { HelloWorld } from 'js/components/HelloWorld';
import { Layout } from 'js/components/Layout';

export const HomePage = (_: RoutableProps) => {
  return (
    <div>
      <Layout.Title>Home Page Title</Layout.Title>
      <HelloWorld />
      <Counter />
      <a href="/checklists">My Checklists</a>
    </div>
  );
};

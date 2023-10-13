import { Router } from 'preact-router';
import { Home } from 'js/Home';
import { Error } from 'js/Error';

export const App = () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Error default />
      </Router>
    </div>
  );
};

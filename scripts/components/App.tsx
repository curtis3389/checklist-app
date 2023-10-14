import { Router } from 'preact-router';
import { Home } from 'js/routes/Home';
import { Error } from 'js/routes/Error';

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

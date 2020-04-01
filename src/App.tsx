import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';

const defaultHistory = createBrowserHistory();

const App = ({ history }: { history?: History }) => {
  return (
    <Router history={history || defaultHistory}>
      <div>Intro for the awesome store</div>
    </Router>
  );
};

export default App;

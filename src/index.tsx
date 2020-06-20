import React from 'react';
import ReactDOM from 'react-dom';
import { History } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';

type FrontEnd = {
  register: (container: string, history: History) => void;
  unregister: (container: string) => void;
};

declare global {
  interface Window {
    frontends: Record<string, FrontEnd>;
  }
}

if (window.frontends) {
  window.frontends.intro = {
    register: (containerId, history) => {
      ReactDOM.render(<App history={history} />, document.getElementById(containerId));
      serviceWorker.unregister();
    },
    unregister: (containerId) => {
      ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as HTMLElement);
    },
  };
}

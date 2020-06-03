import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App, { reducer } from './App';

const rootElement = document.getElementById('root');

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

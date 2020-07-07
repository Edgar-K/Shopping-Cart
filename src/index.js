import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'
import middleware from './middleware'
import './index.css';
import App from './components/App';
import App2 from './App2';

let store = createStore(reducer, middleware);

render(
    <Provider store={store}>
      <App />
      {/* <App2/> */}
    </Provider>,
  document.getElementById('root')
);

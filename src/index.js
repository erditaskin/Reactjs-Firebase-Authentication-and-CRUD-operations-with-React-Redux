import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store from 'store';
import App from 'App';
import Loader from 'utils/loader';
import {persistor} from 'store';
import "bootstrap/dist/css/bootstrap.min.css"
import "css/index.css"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

import { ThemeProvider } from 'styled-components';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import store from 'store';

let persistor = persistStore(store);

ReactDOM.render(
  <ThemeProvider theme={{fontFamily: 'Helvetica Neue'}}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);


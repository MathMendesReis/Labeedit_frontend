import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';
import router from './routers/router';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
      ,
    </Theme>
  </React.StrictMode>,
);

reportWebVitals();

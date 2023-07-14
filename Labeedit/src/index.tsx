import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/global';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { router } from './routers/router';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
);

reportWebVitals();

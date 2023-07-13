import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/error/Error';
import React from 'react';
import OutletPostView from '../pages/OutletPostView';
import PostView from '../pages/OutletPostView/PostView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <OutletPostView />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'postView',
        element: <PostView />,
      },
    ],
  },
]);

const RouterComponent = () => {
  return router;
};

export { router, RouterComponent };

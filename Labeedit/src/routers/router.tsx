import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/error/Error';
import React from 'react';
import OutletPostView from '../pages/OutletPostView';
import PostView from '../pages/OutletPostView/PostView';
import ComentsView from '../pages/OutletPostView/comentsView';

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
      {
        path: 'comentView/:id',
        element: <ComentsView />,
      },
    ],
  },
]);

const RouterComponent = () => {
  return router;
};

export { router, RouterComponent };

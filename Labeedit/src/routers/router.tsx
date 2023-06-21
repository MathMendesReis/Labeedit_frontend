import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/error/Error';
import MainSencudary from '../pages/MainSecundary';
import PostPages from '../pages/Posts';
import CreatedAccountPage from '../pages/CreateAccount';
import ComentsPages from '../pages/ComentsPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <MainSencudary />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'createaccount',
        element: <CreatedAccountPage />,
      },
      {
        path: 'posts',
        element: <PostPages />,
      },
      {
        path: 'coments',
        element: <ComentsPages />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

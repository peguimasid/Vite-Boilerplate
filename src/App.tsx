import { FunctionComponent } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>
  },
  {
    path: '/about',
    element: <h1>about</h1>
  }
]);

const App: FunctionComponent = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import AvoidDevil from './games/avoid-devil/pages/AvoidDevil.tsx';
import SelectDifficulty from './games/avoid-devil/pages/SelectDifficulty.tsx';
import LeftRightGame from './games/left-right/LeftRightGame.tsx';
import GlobalStyles from './styles/GlobalStyles.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found...!</div>,
  },
  {
    path: '/left-right',
    element: <LeftRightGame />,
  },
  {
    path: '/games/avoid-devil',
    element: <SelectDifficulty />,
  },
  {
    path: '/games/avoid-devil/:difficulty',
    element: <AvoidDevil />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);

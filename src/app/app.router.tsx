import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from './pages/ErrorPage';
import { IndexPage } from './pages/IndexPage';
import { Layout } from './pages/Layout/Layout';
import { layoutAction } from './pages/Layout/layout.action';
import { layoutLoader } from './pages/Layout/layout.loader';
import { pageRoutes } from './pages/page.routes';

export const appRoutes: Array<RouteObject> = [
  {
    path: '/',
    // render app layout here, use outlet for child content
    element: <Layout />,
    errorElement: <ErrorPage />,
    // can use a loader to load content for the route here
    loader: layoutLoader,
    action: layoutAction,
    children: [
      { index: true, element: <IndexPage /> },
      {
        errorElement: <ErrorPage />,
        children: [...pageRoutes],
      },
    ],
  },
];

export const appRouter = createBrowserRouter(appRoutes);

import { RouterProvider } from 'react-router-dom';

import { appRouter } from './app.router';

export function App() {
  return <RouterProvider router={appRouter} />;
}

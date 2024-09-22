import { createBrowserRouter } from 'react-router-dom';
import { lazyImport } from 'helpers';

export const allRoutes = createBrowserRouter([
  {
    path: '/',
    lazy: lazyImport('pages/MasonryGrid'),
  },
  {
    path: '/photos/:id',
    lazy: lazyImport('pages/PhotoDetails'),
  },
  {
    path: '*',
    lazy: lazyImport('components/ErrorBoundary'),
  },
]);

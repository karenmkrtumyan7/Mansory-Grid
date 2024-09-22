import { createBrowserRouter } from 'react-router-dom';

export const allRoutes = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const Component = await import('pages/MasonryGrid');
      return { Component: Component.default };
    },
  },
  {
    path: '/photos/:id',
    async lazy() {
      const Component = await import('pages/PhotoDetails');
      return { Component: Component.default };
    },
  },
  {
    path: '*',
    async lazy() {
      const Component = await import('pages/NotFound');
      return { Component: Component.default };
    },
  },
]);

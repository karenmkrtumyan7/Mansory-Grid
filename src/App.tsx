import { GlobalStyle } from 'styles/Global';
import { RouterProvider } from 'react-router-dom';
import { allRoutes } from 'routes';
import ErrorBoundary from 'components/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <RouterProvider router={allRoutes} />
        <GlobalStyle />
      </ErrorBoundary>
    </>
  );
}

export default App;

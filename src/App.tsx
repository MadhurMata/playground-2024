import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './routes/AppRoutes';
import NotFound from './pages/notFound/NotFound';

import './assets/styles/sass/styles.sass';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={NotFound}>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;

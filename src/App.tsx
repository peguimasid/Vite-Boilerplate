import './styles/index.css';

import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';

import { Router } from './router';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

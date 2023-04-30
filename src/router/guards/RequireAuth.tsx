import { FunctionComponent, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext';

interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: FunctionComponent<RequireAuthProps> = ({ children }) => {
  const auth = useAuthContext();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

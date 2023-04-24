import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/contexts/Auth';

export const Private: FunctionComponent = () => {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate('/');
  }, [navigate, signOut]);

  return (
    <main>
      <button onClick={handleSignOut} className="bg-red-400">
        SignOut
      </button>
      <h3>Protected</h3>
    </main>
  );
};

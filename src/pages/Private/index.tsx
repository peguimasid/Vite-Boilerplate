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
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <button onClick={handleSignOut} className="rounded-md bg-blue-400 p-3">
        SignOut
      </button>
      <h3>Protected page</h3>
    </main>
  );
};

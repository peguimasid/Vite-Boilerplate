import { FunctionComponent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext';

import { Button, Icon, Typography } from '@mui/material';

export const Private: FunctionComponent = () => {
  const { user, signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    signOut();
    navigate('/');
  }, [navigate, signOut]);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <Button onClick={handleSignOut} startIcon={<Icon>logout</Icon>} color="error" variant="contained">
        SignOut
      </Button>
      <Typography variant="h5">Hello, {user?.name}</Typography>
      <Button component={Link} variant="contained" to="/" startIcon={<Icon>chevron_left</Icon>}>
        Go to public page
      </Button>
    </main>
  );
};

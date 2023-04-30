import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/contexts/AuthContext';
import { Button, TextField, Typography } from '@mui/material';

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();

  const from = location.state?.from?.pathname || '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    if (!username) return;

    auth.signIn(username);
    navigate(from, { replace: true });
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <Typography variant="h6">You must log in to view the page at {from}</Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextField id="username" name="username" type="text" label="Username" variant="outlined" />
        <Button type="submit" variant="contained" className="rounded-lg">
          Login
        </Button>
      </form>
    </main>
  );
};

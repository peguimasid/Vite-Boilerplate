import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/contexts/Auth';

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthContext();

  const from = location.state?.from?.pathname || '/';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    auth.signIn(username);
    navigate(from, { replace: true });
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
        />
        <button type="submit" className="rounded-md bg-blue-400 p-3">
          Login
        </button>
      </form>
    </main>
  );
};

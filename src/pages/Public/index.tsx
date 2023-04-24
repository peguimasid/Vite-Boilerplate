import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Public: FunctionComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <h3>Public</h3>
      <Link to="/protected" className="rounded-md bg-blue-400 p-3">
        Go to private page
      </Link>
    </main>
  );
};

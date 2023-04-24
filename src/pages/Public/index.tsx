import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

export const Public: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <main>
      <h3>Public</h3>
      <button onClick={() => navigate('/protected')}>go to protected</button>
    </main>
  );
};

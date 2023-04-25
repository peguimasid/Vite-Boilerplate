import { Button, Icon } from '@mui/material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Public: FunctionComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <h3>Public</h3>
      <Button
        component={Link}
        variant="contained"
        color="secondary"
        to="/protected"
        endIcon={<Icon>chevron_right</Icon>}
      >
        Go to private page
      </Button>
    </main>
  );
};

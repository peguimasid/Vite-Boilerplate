import { Button, Icon, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Public: FunctionComponent = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center space-y-3 bg-slate-900 text-white">
      <Typography variant="h5">Public page</Typography>
      <Button component={Link} variant="contained" to="/protected" endIcon={<Icon>chevron_right</Icon>}>
        Go to private page
      </Button>
    </main>
  );
};

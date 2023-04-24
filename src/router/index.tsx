import { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './guards/RequireAuth';

import { Login, Public, Private } from '@/pages';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Public />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

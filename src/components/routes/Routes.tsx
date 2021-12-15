import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Auth } from '../pages/auth/Auth';
import { useAuth } from '../providers/useAuth';
import { routes } from './list';

interface Props {}

export const RoutesComponent = (props: Props) => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              element={<Layout>{route.auth && !user ? <Auth /> : <route.component />}</Layout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

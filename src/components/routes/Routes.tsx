import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { routes } from './list';

interface Props {}

export const RoutesComponent = (props: Props) => {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return null;
          }

          return (
            <Route
              path={route.path}
              key={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

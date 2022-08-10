import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publickRoutes } from '../routes';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {publickRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

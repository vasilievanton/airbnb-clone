import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuAppBar from '../components/MenuAppBar';

const Layout = () => {
  return (
    <>
      <MenuAppBar />
      <Outlet />
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Footer" />
      </BottomNavigation>
    </>
  );
};

export default Layout;

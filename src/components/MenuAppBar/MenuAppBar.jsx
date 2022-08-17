import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserBlock from './UserBlock';
import AppBarLink from '../UI/AppBarLink/AppBarLink';
import MyDrawer from '../MyDrawer/MyDrawer';
import { useAuth } from '../../hooks/useAuth';
import { ABOUT_ROUTE, ADD_HOUSE_ROUTE, FIREBASE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WISHLIST_ROUTE } from '../../utils/consts';

export default function MenuAppBar() {
  const [isOpenLeftMenu, setOpenLeftMenu] = useState(false);
  const { isAuth, displayName } = useAuth();

  console.log(isAuth);

  const openLeftMenu = () => {
    setOpenLeftMenu(true);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={openLeftMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              Clone airbnb
            </Link>
          </Typography>
          <AppBarLink title="About" to={ABOUT_ROUTE} />
          <AppBarLink title="Add House" to={ADD_HOUSE_ROUTE} />
          <AppBarLink title="Firebase" to={FIREBASE_ROUTE} />
          <AppBarLink title="Wishlist" to={WISHLIST_ROUTE} />
          {isAuth ? (
            <>
              <AppBarLink title={displayName} to={HOME_ROUTE} />
              <UserBlock />
            </>
          ) : (
            <>
              <AppBarLink title="Log In" to={LOGIN_ROUTE} />
              <AppBarLink title="Sign Up" to={REGISTRATION_ROUTE} />
            </>
          )}
        </Toolbar>
      </AppBar>
      <MyDrawer isOpen={isOpenLeftMenu} setOpen={setOpenLeftMenu} />
    </>
  );
}

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, IconButton, Typography, MenuItem, Menu } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarLink from './UI/AppBarLink/AppBarLink';
import { setOpenDrawerAction } from '../store/actions';
import { SEARCH_IMAGES_ROUTE } from '../utils/consts';
import { Link } from 'react-router-dom';

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openLeftMenu = () => {
    dispatch(setOpenDrawerAction());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={openLeftMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clone airbnb
        </Typography>
        <AppBarLink title="Home" to="/" />
        <AppBarLink title="About" to="/about" />
        <AppBarLink title="Wishlist" to="/wishlist" />
        <AppBarLink title="Registration" to="/registration" />
        <AppBarLink title="Login" to="/login" />

        {true && (
          <div>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color: 'inherit'}} to={SEARCH_IMAGES_ROUTE}>Search Images</Link></MenuItem>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { SEARCH_IMAGES_ROUTE } from '../../utils/consts';
import { useDispatch } from 'react-redux';
import { removeUserAction } from '../../store/actions';

const UserMenu = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(null);
  };
  const logOut = () => {
    dispatch(removeUserAction());
    setOpen(null);
  };

  return (
    <Menu
      id="menu-appbar"
      anchorEl={isOpen}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(isOpen)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={SEARCH_IMAGES_ROUTE}>
          Search Images
        </Link>
      </MenuItem>
      <MenuItem onClick={logOut}>Log out</MenuItem>
    </Menu>
  );
};

export default UserMenu;

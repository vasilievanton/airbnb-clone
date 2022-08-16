import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import UserMenu from './UserMenu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserBlock = () => {
  const [isUserMenu, setUserMenu] = useState(null);
  const handleMenu = (event) => {
    setUserMenu(event.currentTarget);
  };

  return (
    <>
      <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <UserMenu isOpen={isUserMenu} setOpen={setUserMenu} />
    </>
  );
};

export default UserBlock;

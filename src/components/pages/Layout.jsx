import { AppBar, BottomNavigation, BottomNavigationAction, Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { setOpenDrawerAction } from '../../store/actions';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

// const setActiveLink = ({ isActive }) => (isActive ? 'active-link' : '');

const Layout = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => dispatch(setOpenDrawerAction())}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clone airbnb
          </Typography>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/about">About</Link>
          </Button>
          <Button>
            <Link to="/wishlist">Wishlist</Link>
          </Button>
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
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* <header><NavLink to="/posts" className={setActiveLink}>Blog</NavLink></header> */}
      <Outlet />
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Footer" />
      </BottomNavigation>
    </>
  );
};

export default Layout;

// return (
//   <>

//     <header>
//       <CustomLink to="/">Home</CustomLink>
//       <CustomLink to="/posts">Blog</CustomLink>
//       <CustomLink to="/shop">Shop</CustomLink>
//       <CustomLink to="/about">About</CustomLink>
//       <div>
//         <div className="user">
//           {isAuth ? (
//             <button onClick={logOut}>
//               <span>Log out</span>
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 navigate('/login');
//               }}
//             >
//               <span>Log in</span>
//             </button>
//           )}
//         </div>
//         <div className="user_email">{email}</div>
//       </div>
//       {/* <NavLink to="/posts" className={setActiveLink}>Blog</NavLink> */}
//     </header>
//     <Outlet />
//     <footer>Тут футер какой то 2022</footer>
//   </>
// );

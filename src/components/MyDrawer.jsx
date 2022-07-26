import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { removeItemAction } from '../store/actions';

const MyDrawer = ({ open, setOpen }) => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  console.log(items);
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box sx={{width:300}}>
        <Typography sx={{display:'flex', justifyContent:'center', mt:3 }} variant='h6'>My Wishlist</Typography>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton onClick={()=>{console.log('click');}}>
                <ListItemText primary={item.title} />
              </ListItemButton>
              <IconButton color="error" onClick={() => dispatch(removeItemAction(item.id))}>
                <ClearIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MyDrawer;

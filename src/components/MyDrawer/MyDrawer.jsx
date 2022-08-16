import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import { removeItemAction, setOpenModalAction } from '../../store/actions';
import ToggleColumns from '../ToggleColumns';

const MyDrawer = ({ isOpen, setOpen }) => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleOpenModal = useCallback( 
    (item) => {
      dispatch(setOpenModalAction(item));
    },
    [dispatch]
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
      <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} variant="h6">
        My Wishlist
      </Typography>
      <Box sx={{ width: 300 }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton
                onClick={() => {
                  handleOpenModal(item);
                }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
              <IconButton color="error" onClick={() => dispatch(removeItemAction(item.id))}>
                <ClearIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} variant="h6">
          Column view
        </Typography>
        <Box sx={{ mt: 3 }}>
          <ToggleColumns />
        </Box>
      </Box>
    </Drawer>
  );
};

export default MyDrawer;

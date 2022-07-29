import { IconButton, ImageListItemBar } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';
import { addItemAction, removeItemAction } from '../../store/actions';

const AddToWishlistButton = ({ img,position }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => !!state.wishlist.items.filter((item) => item.id === img.id)[0]);
  const addToWishList = (e) => {
    e.stopPropagation();
    if (selected) {
      dispatch(removeItemAction(img.id));
    } else {
      dispatch(addItemAction(img));
    }
  };
  return (
    <ImageListItemBar
      onClick={addToWishList}
      sx={{background: 'none'}}
      position={position.x}
      actionPosition={position.y}
      actionIcon={<IconButton sx={{ color: 'white' }}>{selected ? <StarIcon /> : <StarBorderIcon />}</IconButton>}
    />
  );
};

export default AddToWishlistButton;

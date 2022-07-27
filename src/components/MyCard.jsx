import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, ImageListItemBar, Typography } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeItemAction } from '../store/actions';
import SimpleImageSlider from 'react-simple-image-slider';

const MyCard = ({ img, handleOpen,columnGrid }) => {
  const selected = useSelector((state) => !!state.wishlist.items.filter((item) => item.id === img.id)[0]);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    handleOpen(img);
  };

  const addToWishList = (e) => {
    e.stopPropagation();
    if (selected) {
      dispatch(removeItemAction(img.id));
    } else {
      dispatch(addItemAction(img));
    }
  };

  return (
    <Grid item md={columnGrid}>
      <Card sx={{ mt: 4, boxShadow: 'none', borderRadius: 3 }}>
        <CardActionArea
          sx={{ cursor: 'pointer' }}
          component="div"
          onClick={(e) => {
            e.stopPropagation();
            handleOpenModal();
          }}
        >
          <Box onClick={(e) => e.stopPropagation()} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <SimpleImageSlider onClick={() => handleOpenModal()} width="100%" navSize={30} navMargin={1} showBullets={false} height={250} images={img.urls} showNavs={true} />
            <ImageListItemBar
              onClick={(e) => addToWishList(e)}
              sx={{
                background: 'none',
              }}
              position="top"
              actionIcon={<IconButton sx={{ color: 'white' }}>{selected ? <StarIcon /> : <StarBorderIcon />}</IconButton>}
              actionPosition="right"
            />
          </Box>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                {img.title}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }} color="text.secondary">
                {img.price} $/day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {img.description}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MyCard;

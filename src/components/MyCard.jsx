import { Box, Button, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModalAction } from '../store/actions';
import SimpleImageSlider from 'react-simple-image-slider';
import AddToWishlistButton from './UI/AddToWishlistButton';

const MyCard = memo(({ img }) => {
  const columnGrid = useSelector((state) => state.column.md);
  const [showNavs, setShowNavs] = useState(false)
  const dispatch = useDispatch();
  const handleOpenModal = useCallback(() => {
    dispatch(setOpenModalAction(img));
  }, [img, dispatch]);
  // TODO: добавить алерт при добавлении карточки с кликом и переходом в вишлист

  return (
    <Grid item md={columnGrid} sx={{ height: 500 }}>
      <Card sx={{ mt: 4, boxShadow: 'none', borderRadius: 5 }}>
        <CardActionArea sx={{ cursor: 'pointer' }} component="div" onClick={handleOpenModal}>
          <Box onClick={(e) => e.stopPropagation()} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <div onMouseEnter={() => {setShowNavs(true)}} onMouseLeave={() => {setShowNavs(false)}}>
              <SimpleImageSlider onClick={handleOpenModal} bgColor="#fff" width="100%" navSize={25} navMargin={1} showBullets={false} height={columnGrid === 6 ? 360 : 250} images={img.urls} showNavs={showNavs} />
            </div>
            <AddToWishlistButton img={img} position={{x: 'top', y: 'right'}} />
          </Box>
        </CardActionArea>
      </Card>
      <Box sx={{ height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ p: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {img.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }} color="text.secondary">
            {img.price} $/day
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {img.description.length > 90 ? `${img.description.substr(0, 90)} ...` : img.description}
          </Typography>
        </Box>
        <Button onClick={() => handleOpenModal()}>Learn more</Button>
      </Box>
    </Grid>
  );
});

export default MyCard;

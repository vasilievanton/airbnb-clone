import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, ImageListItemBar, Typography } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeItemAction } from '../store/actions';

const MyCard = ({ img, handleOpen }) => {
  const selected = useSelector((state) => !!state.wishlist.items.filter((item) => item.id === img.id)[0]);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    handleOpen(img);
  };

  return (
    <Grid item md={3}>
      <Card sx={{ mt: 4, boxShadow: 'none', borderRadius: 3 }}>
        <CardActionArea sx={{ cursor: 'pointer' }} component="div" onClick={() => handleOpenModal()}>
          <CardMedia component="img" height={250} sx={{ borderRadius: 3 }} image={img.url} alt="green iguana" />
          <ImageListItemBar
            onClick={(e) => {
              e.stopPropagation();
              if (selected) {
                dispatch(removeItemAction(img.id));
              } else {
                dispatch(addItemAction(img));
              }
            }}
            sx={{
              background: 'none',
            }}
            position="top"
            actionIcon={<IconButton sx={{ color: 'white' }}>{selected ? <StarIcon /> : <StarBorderIcon />}</IconButton>}
            actionPosition="right"
          />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                {img.title}
              </Typography>
              <Typography variant="body1" sx={{fontWeight:700}} color="text.secondary">
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

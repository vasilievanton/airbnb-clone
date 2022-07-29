import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import MyCard from '../MyCard';

const WishlistPage = () => {
  const items = useSelector((state) => state.wishlist.items);

  return (
    <Container>
      {items.length ? (
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="stretch">
          {items.map((img) => (
            <MyCard img={img} key={img.id} />
          ))}
        </Grid>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ mt: 30, mb: 30 }}>Тут ничего нет. Добавь что-нибудь в избранное</Typography>
        </Box>
      )}
    </Container>
  );
};

export default WishlistPage;

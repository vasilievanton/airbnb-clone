import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import MyCard from '../MyCard';


const WishlistPage = () => {
  const items = useSelector((state) => state.wishlist.items);

    return (
        <Container>

        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="stretch">
          {items.map((img) => (
            <MyCard img={img} key={img.id} />
          ))}
        </Grid>
        </Container>
    );
};

export default WishlistPage;
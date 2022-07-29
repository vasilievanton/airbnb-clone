import React from 'react';
import { Container, Grid } from '@mui/material';
import MyCard from '../MyCard';
import MyDrawer from '../MyDrawer';
import MyModal from '../MyModal/MyModal';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const imgList = useSelector((state) => state.items.items);

  return (
    <>
      <Container>
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="stretch">
          {imgList.map((img) => (
            <MyCard img={img} id={img.id} key={img.id} />
          ))}
        </Grid>
      </Container>
      <MyModal />
      <MyDrawer />
    </>
  );
};

export default HomePage;

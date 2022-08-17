import React from 'react';
import { Container, Grid } from '@mui/material';
import MyCard from '../components/MyCard';
import { useSelector } from 'react-redux';
import Filter from '../components/Filter';

const HomePage = () => {
  const imgList = useSelector((state) => state.items.items);

  return (
    <>
      <Container>
        <Filter />
        <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="stretch">
          {imgList.map((img) => (
            <MyCard img={img} id={img.id} key={img.id}/>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;

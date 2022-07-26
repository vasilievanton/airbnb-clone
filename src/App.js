import { Container, Grid } from '@mui/material';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import React, { useState } from 'react';
import MyCard from './components/MyCard';
import MyDrawer from './components/MyDrawer';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import MyModal from './components/MyModal';
import { setOpenModalAction } from './store/actions';

function App() {
  const imgList = useSelector((state) => state.items.items);
  // const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [imgIdInModal, setImgIdInModal] = useState('');
  // const isOpenModal = useSelector((state) => state.isModal.isModal);
  const dispatch = useDispatch();

  const handleOpen = (img) => {
    dispatch(setOpenModalAction());
    setImgIdInModal(img.id);
  };

  return (
    <>
      <MenuAppBar setOpenDrawer={setOpenDrawer} />
      <Container>
        <Filter />
        <Grid container spacing={2}>
          {imgList.map((img) => (
            <MyCard img={img} id={img.id} key={img.id} handleOpen={handleOpen} />
          ))}
        </Grid>
      </Container>
      <MyModal imgIdInModal={imgIdInModal} setImgIdInModal={setImgIdInModal} />
      <MyDrawer open={isOpenDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default App;

import { Box, Container, Grid, IconButton, Modal } from '@mui/material';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import React, { useState } from 'react';
import MyCard from './components/MyCard';
import OpenCard from './components/OpenCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MyDrawer from './components/MyDrawer';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';

const styleModal = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  pr: 0,
  pt: 0,
  pb: 0,
};

const styleCard = {
  overflow: 'scroll',
  display: 'flex',
  justifyContent: 'space-between',
  width: 800,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
};

function App() {
  const imgList = useSelector(state=>state.items.items);

  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  const [imgIdInModal, setImgIdInModal] = useState('');
  const handleOpen = (img) => {
    setOpenModal(true);
    setImgIdInModal(img.id);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <Box sx={{ ...styleModal }}>
          <Box>
            <IconButton disabled={imgIdInModal <= 1} sx={{ color: 'white' }} onClick={() => setImgIdInModal(imgIdInModal - 1)}>
              <ArrowBackIosIcon />
            </IconButton>
          </Box>
          <Box sx={{ ...styleCard }}>
            <OpenCard img={imgList.find((city) => city.id === imgIdInModal)} />
          </Box>
          <Box>
            <IconButton disabled={imgIdInModal > 5} sx={{ color: 'white' }} onClick={() => setImgIdInModal(imgIdInModal + 1)}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
      <MyDrawer open={isOpenDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default App;

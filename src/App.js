import { Container, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import React, { useState } from 'react';
import MyCard from './components/MyCard';
import MyDrawer from './components/MyDrawer';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import MyModal from './components/MyModal';
import { setOpenModalAction } from './store/actions';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

function App() {
  const imgList = useSelector((state) => state.items.items);
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [imgIdInModal, setImgIdInModal] = useState('');
//переписать в редакс?

  const [columnGrid, setColumnGrid] = useState(3);
console.log(columnGrid);

  const dispatch = useDispatch();

  const handleOpen = (img) => {
    dispatch(setOpenModalAction());
    setImgIdInModal(img.id);
  };

  const handleAlignment = (event, newAlignment) => {
    setColumnGrid(newAlignment);
  };

  return (
    <>
      <MenuAppBar setOpenDrawer={setOpenDrawer} />
      <Container>
        <Filter />
        <ToggleButtonGroup
          value={columnGrid}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value={6} aria-label="two" >
            <LooksTwoIcon />
          </ToggleButton>
          <ToggleButton value={4} aria-label="three">
            <Looks3Icon />
          </ToggleButton>
          <ToggleButton value={3} aria-label="four">
            <Looks4Icon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Grid container spacing={2}>
          {imgList.map((img) => (
            <MyCard img={img} id={img.id} key={img.id} handleOpen={handleOpen} columnGrid={columnGrid}/>
          ))}
        </Grid>
      </Container>
      <MyModal imgIdInModal={imgIdInModal} setImgIdInModal={setImgIdInModal} />
      <MyDrawer open={isOpenDrawer} setOpen={setOpenDrawer} />
    </>
  );
}

export default App;

import './App.css';
import { useSelector } from 'react-redux';
import { Container, Grid } from '@mui/material';
import MenuAppBar from './components/MenuAppBar';
import React from 'react';
import MyCard from './components/MyCard';
import MyDrawer from './components/MyDrawer';
import Filter from './components/Filter';
import MyModal from './components/MyModal/MyModal';


function App() {
  const imgList = useSelector((state) => state.items.items);
 
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(testfetchItems());
  // },[dispatch]);

  return (
    <>
      <MenuAppBar />
      <Container>
        <Filter />
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
}

export default App;

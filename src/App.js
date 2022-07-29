import './App.css';
import React from 'react';
// import Filter from './components/Filter';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Layout from './components/pages/Layout';
import AboutPage from './components/pages/AboutPage';
import WishlistPage from './components/pages/WishlistPage';
import MyDrawer from './components/MyDrawer';
import MyModal from './components/MyModal/MyModal';

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(testfetchItems());
  // },[dispatch]);

  return (
    <div>
      {/* <MenuAppBar /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about/" element={<AboutPage />} />
            <Route path="wishlist/" element={<WishlistPage />} />
          </Route>
        </Routes>
        <MyModal />
      <MyDrawer />
        {/* <Filter /> */}
      
    </div>
  );
}

export default App;

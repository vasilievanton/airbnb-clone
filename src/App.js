import React from 'react';
// import Filter from './components/Filter';
import MyDrawer from './components/MyDrawer';
import MyModal from './components/MyModal/MyModal';
import AppRouter from './components/AppRouter';


function App() {
  
  return (
    <div>
      <AppRouter/>
      <MyModal />
      <MyDrawer />
    </div>
  );
}

export default App;

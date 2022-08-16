import React, { useEffect, useState } from 'react';
import MyModal from './components/MyModal/MyModal';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div>
      <AppRouter />
      <MyModal />
    </div>
  );
}

export default App;

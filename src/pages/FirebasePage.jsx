import { Box, Button, ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import MyCard from '../components/MyCard';
import CountriesInput from '../components/CountriesInput';
import axios from 'axios';
import AddToDataButton from '../components/UI/AddToDataButton';
import MySelect from '../components/UI/MySelect';
import SearchUnsplashImages from '../components/SearchUnsplashImages';

const FirebasePage = () => {
  // const [users, setUsers] = useState([]);

  const [houses, setHouses] = useState([]);
  const [isSearchUnsplash, setSearchUnsplash] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState({ name: '', age: '', id: '' });
  const [houseInputValue, setHouseInputValue] = useState({
    country: '',
    description: '',
    price: '',
    title: '',
    urls: [],
    bedrooms: 1,
    bathrooms: 1,
  });

  console.log(houseInputValue);
  const housesCollectionRef = collection(db, 'houses');

  // const usersCollectionRef = collection(db, 'users');
  // const getUsers = async () => {
  //   const data = await getDocs(usersCollectionRef );
  //   console.log(data);
  //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  // const createUser = async () => {
  //   if (isEdit) {
  //     const userDoc = doc(db, 'users', inputValue.id);
  //     await updateDoc(userDoc, { name: inputValue.name, age: inputValue.age });
  //     setIsEdit(false);
  //     setInputValue({ name: '', age: '', id: '' });
  //   } else {
  //     await addDoc(usersCollectionRef, { name: inputValue.name, age: Number(inputValue.age) });
  //   }
  //   getUsers();
  // };
  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, 'users', id);
  //   await deleteDoc(userDoc);
  //   getUsers();
  // };

  const getHouses = async () => {
    const data = await getDocs(housesCollectionRef);
    setHouses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    // getUsers();
    getHouses();
  }, []);

  const createHouse = async () => {
    await addDoc(housesCollectionRef, {
      title: houseInputValue.title,
      country: houseInputValue.country,
      description: houseInputValue.description,
      price: Number(houseInputValue.price),
      urls: houseInputValue.urls,
    });

    getHouses();
  };

  const inputChange = (e, type) => {
    setInputValue({ ...inputValue, [type]: e.target.value });
  };
  const houseInputChange = (e, type) => {
    if (type) {
      if (type === 'url') {
        const newUrlsArr = [...houseInputValue.urls, { url: e }];
        setHouseInputValue({ ...houseInputValue, urls: newUrlsArr });
      } else {
        setHouseInputValue({ ...houseInputValue, [type]: e.target.value });
      }
    } else {
      setHouseInputValue({ ...houseInputValue, country: e });
    }
  };

  const setEditUser = (user) => {
    setInputValue({ name: user.name, age: user.age, id: user.id });
    setIsEdit(true);
  };

  const removeUrl = (url) => {
    const newUrls = houseInputValue.urls.filter((el) => el.url !== url);
    setHouseInputValue({ ...houseInputValue, urls: newUrls });
  };

  return (
    <Container sx={{ width: 800 }}>
      {/* <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField sx={{ mb: 2 }} value={inputValue.name} onChange={(e) => inputChange(e, 'name')} label="name" variant="outlined" />
        <TextField type="number" sx={{ mb: 2 }} value={inputValue.age} onChange={(e) => inputChange(e, 'age')} label="age" variant="outlined" />
        <Button variant="contained" onClick={createUser}>
          {isEdit ? 'Редактировать' : 'Создать'}
        </Button>
      </Box>
      {users.map((user) => (
        <Box sx={{ mt: 5 }} key={user.id}>
          {user.name && <Typography>Name: {user.name}</Typography>}
          {user.age && <Typography>Age: {user.age}</Typography>}
          <Button onClick={() => setEditUser(user)}>Edit</Button>
          <Button color="error" onClick={() => deleteUser(user.id)}>
            del
          </Button>
        </Box>
      ))} */}
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CountriesInput setValue={houseInputChange} sx={{ mb: 2 }} />
        <TextField sx={{ mb: 2 }} value={houseInputValue.title} onChange={(e) => houseInputChange(e, 'title')} label="Название" variant="outlined" />
        <TextField sx={{ mb: 2 }} value={houseInputValue.description} onChange={(e) => houseInputChange(e, 'description')} label="Описание" variant="outlined" />
        <TextField type="number" sx={{ mb: 2 }} value={houseInputValue.price} onChange={(e) => houseInputChange(e, 'price')} label="Стоимость за ночь" variant="outlined" />
        <MySelect title="Количество спален:" type="bedrooms" count={5} setSelect={houseInputChange} />
        <MySelect title="Количество ванных комнат:" type="bathrooms" count={5} setSelect={houseInputChange} />

        <Button variant="contained" onClick={createHouse}>
          СОЗДАТЬ ДОМ!!!
        </Button>
      </Box>
      {isSearchUnsplash ? <SearchUnsplashImages houseInputChange={houseInputChange} removeUrl={removeUrl} /> : <Button onClick={() => setSearchUnsplash(true)}>Найти на Unsplash</Button>}
      {houses.length && houses.map((house) => <MyCard img={house} />)}
    </Container>
  );
};

export default FirebasePage;

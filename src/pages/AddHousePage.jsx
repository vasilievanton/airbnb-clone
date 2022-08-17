import { Box, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import CountriesInput from '../components/CountriesInput';
import MySelect from '../components/UI/MySelect';
import SearchUnsplashImages from '../components/SearchUnsplashImages';

const AddHousePage = () => {
  const [isSearchUnsplash, setSearchUnsplash] = useState(false);
  const [houseInputValue, setHouseInputValue] = useState({
    country: '',
    description: '',
    price: '',
    title: '',
    urls: [],
    bedrooms: 1,
    bathrooms: 1,
  });
  const housesCollectionRef = collection(db, 'houses');
  console.log(houseInputValue);

const sendButtonIsDisabled = !!houseInputValue.country.length && !!houseInputValue.description.length && !!houseInputValue.price.length && !!houseInputValue.title.length && !!houseInputValue.urls.length
console.log(sendButtonIsDisabled);
  const createHouse = async () => {
    await addDoc(housesCollectionRef, {
      title: houseInputValue.title,
      country: houseInputValue.country,
      description: houseInputValue.description,
      price: Number(houseInputValue.price),
      urls: houseInputValue.urls,
    });
    setHouseInputValue({ country: '', description: '', price: '', title: '', urls: [], bedrooms: 1, bathrooms: 1 });
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

  const removeUrl = (url) => {
    const newUrls = houseInputValue.urls.filter((el) => el.url !== url);
    setHouseInputValue({ ...houseInputValue, urls: newUrls });
  };

  return (
    <Container sx={{ width: 800 }}>
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CountriesInput setValue={houseInputChange} sx={{ mb: 2 }} />
        <TextField sx={{ mb: 2 }} value={houseInputValue.title} onChange={(e) => houseInputChange(e, 'title')} label="Название" variant="outlined" />
        <TextField sx={{ mb: 2 }} value={houseInputValue.description} onChange={(e) => houseInputChange(e, 'description')} label="Описание" variant="outlined" />
        <TextField type="number" sx={{ mb: 2 }} value={houseInputValue.price} onChange={(e) => houseInputChange(e, 'price')} label="Стоимость за ночь" variant="outlined" />
        <MySelect title="Количество спален:" type="bedrooms" count={5} setSelect={houseInputChange} />
        <MySelect title="Количество ванных комнат:" type="bathrooms" count={5} setSelect={houseInputChange} />
        <Button disabled={!sendButtonIsDisabled} variant="contained" onClick={createHouse}>
          СОЗДАТЬ ДОМ!!!
        </Button>
      </Box>
      {isSearchUnsplash ? <SearchUnsplashImages houseInputChange={houseInputChange} removeUrl={removeUrl} /> : <Button onClick={() => setSearchUnsplash(true)}>Нажми, чтобы найти картини на Unsplash и добавить</Button>}
    </Container>
  );
};

export default AddHousePage;

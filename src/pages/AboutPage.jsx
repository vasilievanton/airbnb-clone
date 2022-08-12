import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyImageList from '../components/MyModal/MyImageList';

const AboutPage = () => {
  const [img, setImg] = useState(null);

  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
    price: 0,
  });

  async function getLocal() {
    const response = await axios.get('http://localhost:3005/items');
    setImg(response.data);
  }

  console.log(img);
  useEffect(() => {
    getLocal();
  }, []);

  const inputChange = (e, type) => {
    setInputValue({ ...inputValue, [type]: e.target.value });
  };

  async function createItem() {
    const response = await axios.post('http://localhost:3005/items', { data: inputValue });
    console.log('response>>>', response);
  }

  return (
    <>
      {img &&
        img.map((item) => (
          <Box>
            <TextField value={item.data.title} label="title" variant="outlined" />
            <TextField value={item.data.description} label="title" variant="outlined" />
            <TextField value={item.data.price} label="title" variant="outlined" />
            <MyImageList img={item.data} />
          </Box>
        ))}

      <Box sx={{ mt: 5 }}>
        <TextField value={inputValue.title} onChange={(e) => inputChange(e, 'title')} label="title" variant="outlined" />
        <TextField value={inputValue.description} onChange={(e) => inputChange(e, 'description')} label="description" variant="outlined" />
        <TextField value={inputValue.price} onChange={(e) => inputChange(e, 'price')} label="price" variant="outlined" />
        <Button onClick={createItem}>Создать</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: 30, mb: 30 }}>Вот такой вот эбаут</Typography>
      </Box>
    </>
  );
};

export default AboutPage;

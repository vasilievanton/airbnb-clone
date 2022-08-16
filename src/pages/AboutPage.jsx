import { Box, Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const defaultInputsValue = {
  title: '',
  description: '',
  price: '',
  urls: '',
};

const AboutPage = () => {
  const [items, setItems] = useState(null);

  const [inputValue, setInputValue] = useState(defaultInputsValue);

  async function getLocal() {
    const response = await axios.get('http://localhost:3005/items');
    setItems(response.data);
  }

  console.log(items);
  useEffect(() => {
    getLocal();
  }, []);

  const inputChange = (e, type) => {
    if (type === 'price') {
      setInputValue({ ...inputValue, [type]: Number(e.target.value) });
    }
    setInputValue({ ...inputValue, [type]: e.target.value });
  };

  async function createItem() {
    const response = await axios.post('http://localhost:3005/items', { data: inputValue });
    setInputValue(defaultInputsValue);
    console.log('response>>>', response);
  }

  async function deleteItem(id) {
    const response = await axios.delete(`http://localhost:3005/items/${id}`);
    console.log('response>>>', response);
  }

  return (
    <Container>
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <TextField sx={{ mb: 2 }} value={inputValue.title} onChange={(e) => inputChange(e, 'title')} label="title" variant="outlined" />
        <TextField sx={{ mb: 2 }} value={inputValue.description} onChange={(e) => inputChange(e, 'description')} label="description" variant="outlined" />
        <TextField sx={{ mb: 2 }} value={inputValue.price} onChange={(e) => inputChange(e, 'price')} label="price" variant="outlined" />
        <TextField sx={{ mb: 2 }} value={inputValue.urls} onChange={(e) => inputChange(e, 'urls')} label="urls" variant="outlined" />
        <Button onClick={createItem}>Создать</Button>
      </Box>
      {items &&
        items.map((item) => (
          <Box sx={{ mt: 5 }}>
            <Typography onClick={() => deleteItem(item.id)}>ID: {item.id}</Typography>
            {item.data.title && <Typography>Title: {item.data.title}</Typography>}
            {item.data.description && <Typography>Description: {item.data.description}</Typography>}
            {item.data.price && <Typography>Price: {item.data.price}</Typography>}
            {item.data.urls && <Typography>Urls: {JSON.stringify(item.data.urls)}</Typography>}
          </Box>
        ))}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ mt: 30, mb: 30 }}>Вот такой вот эбаут</Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;

import { Box, Button, ImageList, ImageListItem, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const SearchImage = () => {
  const [img, setImg] = useState(null);
  const [query, setQuery] = useState('bali');
  const [urls, setUrls] = useState([]);
  console.log(urls);
  async function getUnsplash(query) {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=30&client_id=owh1CmTv_87qnCkl5lWQ4MsuH6ReH-syhXzqAhqXlZU`);
    setImg(response.data.results);
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: 500, margin: '0 auto', mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextField fullWidth value={query} onChange={(e) => setQuery(e.target.value)} variant="outlined" />
          <Button sx={{ ml: 5 }} onClick={() => getUnsplash(query)}>
            Search
          </Button>
        </Box>
      </Box>
      <ImageList variant="quilted" cols={4} gap={5} sx={{ mb: 30, mt: 3 }}>
        {img &&
          img.map((item) => (
            <ImageListItem
              key={item.urls.regular}
              id={item.urls.regular}
              onClick={() => {
                navigator.clipboard.writeText(item.urls.regular);
                setUrls([...urls, { url: item.urls.regular }]);
              }}
            >
              <img src={item.urls.regular} alt="пикчер" srcSet={item.urls.regular} loading="lazy" />
            </ImageListItem>
          ))}
      </ImageList>
      {urls.map((url) => (
        <Typography key={url}>{`{"url": "${url.url}"},`}</Typography>
      ))}
    </>
  );
};

export default SearchImage;

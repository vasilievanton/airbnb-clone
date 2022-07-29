import { ImageList, ImageListItem } from '@mui/material';
import React, { memo } from 'react';

const MyImageList = memo(({ img }) => {
  return (
    <ImageList variant="quilted" cols={2} gap={5} sx={{ m: 0 }}>
      {img.urls.map((item) => (
        <ImageListItem key={item.url}>
          <img src={item.url} alt="пикчер" srcSet={item.url} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
});

export default MyImageList;

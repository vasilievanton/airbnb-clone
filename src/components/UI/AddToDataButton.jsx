import { IconButton, ImageListItemBar } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const AddToDataButton = ({ url, setUrl, removeUrl }) => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    if (selected) {
      removeUrl(url);
    } else {
      setUrl(url, 'url');
    }
    setSelected(!selected);
  };
  return (
    <ImageListItemBar
      onClick={onClick}
      sx={{ background: selected ? 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)' : 'none' }}
      position={'top'}
      actionPosition={'right'}
      actionIcon={<IconButton sx={{ color: 'white' }}>{selected ? <StarIcon /> : <StarBorderIcon />}</IconButton>}
    />
  );
};

export default AddToDataButton;

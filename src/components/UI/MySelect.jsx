import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const MySelect = ({ title, setSelect, count, type }) => {
  const values = [];
  for (let i = 1; i <= count; i++) {
    values.push(i);
  }
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <RadioGroup row onChange={(e) => setSelect(e, type)}>
        {values.map((el) => (
          <FormControlLabel key={el} value={el} control={<Radio />} label={el} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MySelect;

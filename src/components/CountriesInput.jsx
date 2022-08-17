import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const CountriesInput = ({ sx, setValue }) => {
  const [countries, setCountries] = useState([]);
  const countriesCollectionRef = collection(db, 'countries');

  const getCountries = async () => {
    const data = await getDocs(countriesCollectionRef);
    setCountries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <Autocomplete onInputChange={(e) => setValue(e.target.outerText)} options={countries} sx={sx} renderInput={(params) => <TextField  {...params} label="Страна" />} />
    </div>
  );
};

export default CountriesInput;

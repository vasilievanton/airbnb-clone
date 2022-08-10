import React, { useEffect, useState } from 'react';
import { Divider, IconButton, InputBase, Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ForestIcon from '@mui/icons-material/Forest';
import WaterIcon from '@mui/icons-material/Water';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch } from 'react-redux';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { fetchItems } from '../asyncActions/items';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState('house');
  const [inputValue, setInputValue] = useState('');

  const [isSearch, setSearch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(query));
  }, [dispatch, query]);

  const clickOnTab = (keyFilter) => {
    setQuery(keyFilter);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ p: 0, m: 0, bgcolor: 'background.paper' }}>
        <Tabs sx={{ p: 0, m: 0 }} value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example">
          <Tab onClick={() => clickOnTab('house')} label="Все" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<AllInclusiveIcon />} />
          <Tab onClick={() => clickOnTab('thailand-house')} label="Thailand" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<BeachAccessIcon />} />
          <Tab onClick={() => clickOnTab('bali-house')} label="Bali" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<ForestIcon />} />
          <Tab onClick={() => clickOnTab('norway-house')} label="Norway" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<WaterIcon />} />
          <Tab onClick={() => clickOnTab('greece-house')} label="Greece" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<GolfCourseIcon />} />
          <Tab onClick={() => clickOnTab('canada-house')} label="Canada" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<CottageIcon />} />
        </Tabs>
      </Box>
      {isSearch ? (
        <Paper onSubmit={onFormSubmit} component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Location" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      ) : (
        <IconButton onClick={() => setSearch(true)}>
          <SearchIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Filter;

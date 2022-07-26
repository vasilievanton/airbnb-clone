import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ForestIcon from '@mui/icons-material/Forest';
import WaterIcon from '@mui/icons-material/Water';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch } from 'react-redux';
import { filterItemsAction, loadItemsAction } from '../store/actions';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Filter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const clickOnTab = (keyFilter) => {
    dispatch(filterItemsAction(keyFilter));
  };

  const loadItems = () => {
    dispatch(loadItemsAction());
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ p: 0, m: 0, bgcolor: 'background.paper' }}>
        <Tabs sx={{ p: 0, m: 0 }} value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example">
          <Tab onClick={() => loadItems()} label="Все" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<AllInclusiveIcon />} />
          <Tab onClick={() => clickOnTab('beach')} label="Пляж" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<BeachAccessIcon />} />
          <Tab onClick={() => clickOnTab('forest')} label="Лес" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<ForestIcon />} />
          <Tab onClick={() => clickOnTab('water')} label="Озеро" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<WaterIcon />} />
          <Tab onClick={() => clickOnTab('golf')} label="Гольф" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<GolfCourseIcon />} />
          <Tab onClick={() => clickOnTab('cottage')} label="Коттедж" sx={{ textTransform: 'capitalize', fontSize: 12 }} icon={<CottageIcon />} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Filter;

import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import { useDispatch, useSelector } from 'react-redux';
import { setColumnAction } from '../store/actions';

const ToggleColumns = () => {
  const columnGrid = useSelector((state) => state.column.md);
  const dispatch = useDispatch();
  const changeColumn = (e, newValue) => {
    dispatch(setColumnAction(newValue));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} variant="h6">
      <ToggleButtonGroup value={columnGrid} exclusive onChange={changeColumn} aria-label="text alignment" size="small">
        <ToggleButton value={6} aria-label="two">
          <LooksTwoIcon />
        </ToggleButton>
        <ToggleButton value={4} aria-label="three">
          <Looks3Icon />
        </ToggleButton>
        <ToggleButton value={3} aria-label="four">
          <Looks4Icon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToggleColumns;

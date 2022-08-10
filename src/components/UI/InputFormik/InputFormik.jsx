import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InputFormik = (props) => {
  return (
    <Box>
      <TextField fullWidth size="small" sx={{ mb: 0.5 }} {...props} />
    </Box>
  );
};

export default InputFormik;

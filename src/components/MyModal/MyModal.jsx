import { Box, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OpenCard from './OpenCard';
import { setCloseModalAction } from '../../store/actions';

const styleModal = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  pr: 0,
  pt: 0,
  pb: 0,
};

const styleCard = {
  overflow: 'scroll',
  display: 'flex',
  justifyContent: 'space-between',
  width: 1000,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
};

const MyModal = () => {
  const isOpenModal = useSelector((state) => state.isModal.isModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setCloseModalAction());
  };

  return (
    <Modal open={isOpenModal} onClose={() => handleCloseModal()}>
      <Box sx={{ ...styleModal }}>
        <Box sx={{ ...styleCard }}>
          <OpenCard />
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;

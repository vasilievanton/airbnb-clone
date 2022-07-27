import { Box, IconButton, Modal } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OpenCard from './OpenCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { setCloseModalAction } from '../store/actions';

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

const MyModal = ({ setImgIdInModal, imgIdInModal }) => {

  //TODO: ({ setImgIdInModal, imgIdInModal }) перенести в редакс для удобство вызова модального окна из вишлиста
  const isOpenModal = useSelector((state) => state.isModal.isModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setCloseModalAction());
  };
  const imgList = useSelector((state) => state.items.items);

  return (
    <Modal open={isOpenModal} onClose={() => handleCloseModal()}>
      <Box sx={{ ...styleModal }}>
        <Box>
          <IconButton disabled={imgIdInModal <= 1} sx={{ color: 'white' }} onClick={() => setImgIdInModal(imgIdInModal - 1)}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <Box sx={{ ...styleCard }}>
          <OpenCard img={imgList.find((city) => city.id === imgIdInModal)} />
        </Box>
        <Box>
          <IconButton disabled={imgIdInModal > 5} sx={{ color: 'white' }} onClick={() => setImgIdInModal(imgIdInModal + 1)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default MyModal;

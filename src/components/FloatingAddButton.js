import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateNewTask from './CreateNewTask';

export default function FloatingActionButton() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add"
      onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <CreateNewTask open={isModalOpen} handleClose={closeModal} />
    </Box>
  );
}
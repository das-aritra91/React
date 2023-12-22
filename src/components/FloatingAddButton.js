// import React from 'react';
// import Fab from '@mui/material/Fab';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

// const FloatingAddButton = ({ onClick }) => {
//   return (
//     <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }} onClick={onClick}>
//       <AddCircleIcon />
//     </Fab>
//   );
// };

// export default FloatingAddButton;

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButton() {
    const handleAddClick = () => {
        // Add your logic for handling the button click here
        console.log('Add button clicked');
        alert('hello')
      };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add"
      onClick={handleAddClick}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
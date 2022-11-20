import React from 'react';
import {Box, Stack, Typography} from "@mui/material" ;


export const Rightbar = () => {
  return (
    <Box flex={2} p={2} 
     //this default breakPoints
    sx={{ display: { xs: "none", sm: "block"}}}>    
        <Box position="fixed">
          <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        </Box>
    </Box>
  )
}

export default Rightbar
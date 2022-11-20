import React from 'react';
import {Box, Stack} from "@mui/material" ;


export const Rightbar = () => {
  return (
    <Box flex={2} p={2} 
     //this default breakPoints
    sx={{ display: { xs: "none", sm: "block"}}}>    
        <Box position="fixed">
          hello
        </Box>
    </Box>
  )
}

export default Rightbar
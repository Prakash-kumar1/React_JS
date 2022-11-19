import React from 'react';
import {Box, Stack} from "@mui/material" ;


export const Rightbar = () => {
  return (
    <Box bgcolor="lightcoral" flex={2} p={2} 
     //this default breakPoints
    sx={{ display: { xs: "none", sm: "block"}}}>    
        RightBar
    </Box>
  )
}

export default Rightbar
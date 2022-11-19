import React from 'react';
import {Box, Stack} from "@mui/material" ;


export const Sidebar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={2} 
     //this default breakPoints
    sx={{ display: { xs: "none", sm: "block"}}}>
        SideBar
    </Box>
   
  )
}


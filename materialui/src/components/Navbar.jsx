import React from 'react';
import {AppBar, InputBase, styled, Toolbar, Typography, Badge, Avatar} from '@mui/material' ;
import { Mail, Notifications, Pets } from "@mui/icons-material"
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
    display: "flex" ,
    justifyContent: "space-between"
}) ;

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white" ,
    padding : "0 10px" ,
    borderRadius : theme.shape.borderRadius ,
    width : "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display : "none" ,
    alignItems : "center" ,
    gap : "20px" ,
    [theme.breakpoints.up("sm")] : {
      display: "flex" 
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display : "flex" ,
    alignItems : "center" ,
    gap : "10px" ,
    [theme.breakpoints.up("sm")] : {
      display: "none" 
    }
}))


export const Navbar = () => {
  return (
    <AppBar position="stick">
        <StyledToolbar>
            <Typography variant='h6'  sx={{ display: { xs: "none", sm: "block"}}}>Prakash</Typography>
            <Pets sx={{ display: { xs: "block", sm: "none"}}}/>
            <Search> <InputBase placeholder="search..."/></Search>
            <Icons>
<Badge badgeContent={4} color="error">
  <Mail />
</Badge>

<Badge badgeContent={4} color="error">
  <Notifications />
</Badge>
<Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Icons>
            <UserBox>
<Avatar sx={{width:30 , height:30}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Typography variant='span'>Light</Typography>
            </UserBox>
        </StyledToolbar>
    </AppBar>
  )
}


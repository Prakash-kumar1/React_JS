import React from 'react';
import {Box, Stack, Typography, AvatarGroup, Avatar, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText, Divider, List} from "@mui/material" ;


export const Rightbar = () => {
  return (
    <Box flex={2} p={2} 
     //this default breakPoints
    sx={{ display: { xs: "none", sm: "block"}}}>    
        <Box position="fixed" width={300}>
          <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
          <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/301977/pexels-photo-301977.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography variant='h6' fontWeight={100} gap={3} mt={2} mb={2}>Latest Photos</Typography>

    <ImageList cols={3} rowHeight={100} >
      <ImageListItem>
        <img src='https://material-ui.com/static/images/image-list/breakfast.jpg' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://material-ui.com/static/images/image-list/burgers.jpg' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format&dpr=2' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://images.pexels.com/photos/627979/pexels-photo-627979.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://images.pexels.com/photos/18397/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://images.pexels.com/photos/414032/pexels-photo-414032.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </ImageListItem>
      <ImageListItem>
        <img src='https://images.pexels.com/photos/3243020/pexels-photo-3243020.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </ImageListItem>
    </ImageList>

    <Typography variant='h6' fontWeight={100} gap={3} mt={2} mb={2}>Latest Conversation</Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
        </Box>
    </Box>
  )
}

export default Rightbar
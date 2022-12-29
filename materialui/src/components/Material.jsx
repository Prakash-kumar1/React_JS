import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import ButtonGroup from '@mui/material/ButtonGroup';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


import Checkbox from '@mui/material/Checkbox';


export default function Material() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <button variant="text">Text</button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
{/* Creating  our own Button using  Button API Data*/}
                <Button color='warning' size='large' variant="outlined">Prakash</Button>
                <Button color='success' variant="contained" href='https://www.youtube.com/' target="_blank"> kumar </Button>
            </Stack>


<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="outlined" color="error">Error</Button>
 <hr />

<h1>Button size</h1>
<Button color='success' variant="contained" href='https://www.youtube.com/' target="_blank" size='small'> Small </Button>
<Button color='primary' variant="contained"  size='medium'> Medium </Button>
<Button color='success' variant="contained" disabled size='large'> large </Button>

<h1>Button with Icons</h1>
<Button color='secondary' variant="contained" startIcon={<DeleteIcon/>}> Delete </Button>
<Button color='warning' variant="contained" endIcon={<FavoriteIcon/>}> Favourite </Button>

<h1>Icon Button</h1>
<IconButton>
        <DeleteIcon color='warning'/>
        <FavoriteIcon color='secondary'/>
        <PushPinIcon />
        <StarsIcon color='success'/>
</IconButton>

<h1>Applying Color</h1>
<Button variant="contained" style={{backgroundColor: 'greenyellow' , color: 'black'}}>Click me</Button>
<Button variant="outlined" style={{backgroundColor: 'magenta' , borderRadius : '2rem'}}> Don't Click me</Button>
{/* in the place of style , we can also use "sx" */}
<Button variant="contained" style={{backgroundColor: 'aquamarine' , color: 'blue'}}>Log in</Button>
<Button variant="outlined" style={{color: 'black' , letterSpacing : '2rem'}}> Log Out</Button>


<h1>Button With Click event</h1>
<Button variant="contained" onClick={() => console.log('Button Clicked')}>Click</Button>

<h1>By Default Horizontal Button Groups</h1>
<ButtonGroup variant="contained" color='secondary'>
    <Button>One</Button>
    <Button style={{backgroundColor: 'aquamarine' , color: 'blue'}}>Two</Button>
    <Button>Three</Button>
</ButtonGroup>


<h1> Vertical Button Groups</h1>
<ButtonGroup variant="contained" orientation='vertical'>
    <Button>One</Button>
    <Button sx={{marginLeft : '12rem'}}>Two</Button>
    <Button>Three</Button>
</ButtonGroup>


<h1>A Floating Action Button (FAB) performs the primary, or most common, action on a screen.</h1>
<Fab color='success' href='https://www.javascripttutorial.net/'> Ankit </Fab>
<Fab color="primary"> <AddIcon /> </Fab>
<Fab color="secondary" > <EditIcon onClick={()=>alert("Do you want to Edit ??")}/> </Fab>
<Fab variant="extended"> <NavigationIcon sx={{ mt: '22px' }} /> Navigate </Fab>
<Fab disabled aria-label="like"> <FavoriteIcon sx={{ color: 'red' }}/> </Fab>


<h1>CheckBox</h1>
<Checkbox />       
<Checkbox checked/>
<Checkbox defaultChecked/>
<Checkbox defaultChecked indeterminate/>
<Checkbox checked={true} color='success' />
<Checkbox icon={<AddReactionIcon sx={{color:'lightskyblue'}} />}  checkedIcon={<EmojiEmotionsIcon sx={{color:'hotpink'}}/>} />
<Checkbox onChange={() => alert('checked Done') }/>



        </>
    )
}













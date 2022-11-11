import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import PushPinIcon from '@mui/icons-material/PushPin';


import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



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

    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>

<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">Success</Button>
<Button variant="outlined" color="error">Error</Button>


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



















        </>
    )
}













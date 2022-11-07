import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Material() {
    return (
        <>
            <Stack spacing={2} direction="row">
                <button variant="text">Text</button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>

        </>
    )
}

// import  React from 'react';
// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function Material() {
//   return (
//     <div>
//       <Checkbox {...label} defaultChecked />
//       <Checkbox {...label} />
//       <Checkbox {...label} disabled />
//       <Checkbox {...label} disabled checked />
//     </div>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Kilometre(props) {

  return (
    <>
        <Box sx={{ width: 200 }}>
        <Slider
            valueLabelDisplay='auto'
            value={props.value}
            min={0}
            max={150000}
            onChange={props.onChange}
            disableSwap
        />
        </Box>
        <p>{props.value[0]} - {props.value[1]} km</p>
    </>
    
  );
}

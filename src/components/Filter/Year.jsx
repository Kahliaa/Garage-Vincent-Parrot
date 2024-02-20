import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Year(props) {

  return (
    <>
        <Box sx={{ width: 200 }}>
        <Slider
            value={props.value}
            valueLabelDisplay='auto'
            min={1990}
            max={2024}
            onChange={props.onChange}
            disableSwap
        />
        </Box>
        <p>{props.value[0]} - {props.value[1]}</p>
    </>
    
  );
}

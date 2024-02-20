import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Price(props) {


  return (
    <>
        <Box sx={{ width: 200 }}>
          <Slider
              value={props.value}
              valueLabelDisplay='auto'
              min={0}
              max={50000}
              onChange={props.onChange}
              disableSwap
          />
        </Box>
        <p>{props.value[0]} - {props.value[1]} €</p>
    </>
    
  );
}

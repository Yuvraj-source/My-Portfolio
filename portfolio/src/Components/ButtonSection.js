import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Background2 from "./Assets/Background2.png";

const buttonStyle = {
  backgroundColor: 'rgb(84, 43, 236)', 
  color: 'white',
  padding: '12px 24px',
  borderRadius: '100px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s, color 0.3s', 
  marginRight: '50px',
  '&:hover': {
    backgroundColor: 'white', 
    color: 'black', 
  },
};

function ButtonSection() {
  const navigate = useNavigate(); 
  return (
    <Box py={4} sx={{  background: `url(${Background2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" sx={buttonStyle} onClick={() => navigate("/microbiology")}>
            Explore Microbiology journey →
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={buttonStyle} onClick={() => navigate("/web-development")}>
           Explore Front-End Dev journey →
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ButtonSection;

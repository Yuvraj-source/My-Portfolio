import React from 'react';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/system';
import Background2 from "./Assets/Background2.png";

const HeroSectionContainer = styled('div')(({ theme }) => ({
  background: `url(${Background2})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  color: 'white',
  padding: '3rem',
  textAlign: 'center',
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  margin: 0,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: '1rem',
    fontSize: '14px',
    backgroundSize: '100% 100%',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Helvetica Neue', sans-serif",
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroSectionContainer>
      <StyledTypography 
        variant="h1" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '2rem' 
          } 
        }}
      >
        Welcome to my world!
      </StyledTypography>
      <StyledTypography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.5rem' 
          } 
        }}
      >
        I'm Yuvraj Salunke, a passionate microbiologist and skilled web developer.
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        I thrive in two worlds: one where I explore life at the microscopic level as a microbiologist, and the other where I craft stunning websites as a web developer.
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        On this website, you can find more about me and my projects in both fields by clicking on the buttons below:
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        Explore Microbiology Career and Front End Development Path.
      </StyledTypography>
      <StyledTypography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.5rem' 
          } 
        }}
      >
        Thank you for visiting my website and I hope you enjoy it.
      </StyledTypography>
    </HeroSectionContainer>
  );
};

export default HeroSection;

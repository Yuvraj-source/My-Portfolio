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
        Welcome to My Portfolio!
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
        I'm Yuvraj Salunke, a microbiologist with extensive experience in pharmaceutical quality control and a passionate web development enthusiast.
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        paragraph 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        With over five years in microbiology, I ensure the quality and safety of pharmaceutical products through meticulous testing and compliance. My journey has involved navigating audits and honing my skills in QC Microbiology.
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        paragraph 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        Alongside this, I’ve developed a strong interest in front-end development, crafting websites as a creative outlet to combine my scientific precision with a love for technology.
      </StyledTypography>
      <StyledTypography 
        variant="h4" 
        paragraph 
        sx={{ 
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        Explore my portfolio to learn more about my work in microbiology or to see my web development projects. 
      </StyledTypography>

      <StyledTypography 
        variant="h4" 
        paragraph 
        sx={{ 
          fontWeight: 'bold',
          [theme.breakpoints.down('md')]: { 
            fontSize: '1.25rem' 
          } 
        }}
      >
        Thank you for visiting, and I hope you enjoy exploring my dual interests!
      </StyledTypography>
    </HeroSectionContainer>
  );
};

export default HeroSection;

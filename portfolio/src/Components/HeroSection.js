import React from 'react';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/system';
import Background2 from './Assets/Background2.png';
import Background3 from './Assets/Background3.jpg';
import RotatingCube from './RotatingCube';
import { Box } from '@mui/material';

const HeroSectionContainer = styled('div')(({ theme }) => ({
  background: `url(${Background3})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  color: 'white',
  padding: '6rem 2rem 4rem', // Add top padding to create space for content
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif", 
  fontSize: '20px',
  width: '100%',
  boxSizing: 'border-box',
  margin: 0,
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '4rem 2rem', // Adjust padding for medium screens
    fontSize: '16px',
    backgroundSize: '100% 100%',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif", // Use Poppins for headings and main text
  color: 'white', // Ensure the typography remains legible on background
}));

const HeroSection = () => {
  const theme = useTheme();

  return (
    <HeroSectionContainer>

<Box
  sx={{
    position: 'absolute',
    top: '2rem', // Space from the top of the section
    left: '2.5rem', // Space from the left of the screen
    width: '100px', // Smaller cube size
    height: '100px', // Match the width for a perfect cube
    zIndex: 10, // Ensure it appears above other content
  }}
>
  <RotatingCube />
</Box>


      <StyledTypography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: '3rem', // Larger font size for h1
          fontWeight: 800, // Bold weight for headings
          mb: '3rem', 

          [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem', // Adjust size on medium screens
            mb: '1.5rem',
          },
        }}
      >
        Hi, I’m Yuvraj Salunke <br /> Welcome to My Portfolio!
      </StyledTypography>
      <StyledTypography
  variant="h3"
  gutterBottom
  sx={{
    fontSize: '1.85rem', // Adjusted size for h3
    fontWeight: 500,
    mt: '2rem', // Added margin-top for spacing
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      mt: '1.5rem', // Adjust top margin for smaller screens
    },
  }}
>
        Microbiologist with over six years of experience in pharmaceutical quality control
        and a passionate front-end development enthusiast.
      </StyledTypography>
      <StyledTypography
        variant="h4"
        paragraph
        sx={{
          fontSize: '1.40rem', // Standard font size for paragraphs
          fontWeight: 500, // Lighter font weight for readability
          lineHeight: 1.8, // Improved line height for readability
          [theme.breakpoints.down('md')]: {
            fontSize: '1.15rem', // Adjusted font size for small screens
          },
        }}
      >
        In my microbiology career, I specialize in ensuring the quality and safety of
        pharmaceutical products through rigorous testing, compliance, and audit navigation.
        <br></br>My dedication to precision and excellence defines my work.
      </StyledTypography>
      <StyledTypography
        variant="h4"
        paragraph
        sx={{
          fontSize: '1.40rem',
          fontWeight: 500,
          lineHeight: 1.8,
          [theme.breakpoints.down('md')]: {
            fontSize: '1.15rem',
          },
        }}
      >
        On the creative side, I channel my passion for technology into front-end development,
        crafting user-friendly and visually appealing websites. This allows me to blend scientific
        rigor with innovative design.
      </StyledTypography>
      <StyledTypography
        variant="h4"
        paragraph
        sx={{
          fontSize: '1.40rem',
          fontWeight: 500,
          lineHeight: 1.8,
          [theme.breakpoints.down('md')]: {
            fontSize: '1.20rem',
          },
        }}
      >
        Explore my portfolio to learn more about my work in microbiology or to see my web
        development projects.
      </StyledTypography>

      <StyledTypography
        variant="h4"
        paragraph
        sx={{
          fontWeight: 'bold',
          fontSize: '1.45rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '1.15rem',
          },
        }}
      >
        Thank you for visiting—I hope you enjoy exploring my journey and creations!
      </StyledTypography>
    </HeroSectionContainer>
  );
};

export default HeroSection;

import React from 'react';
import Typography from '@mui/material/Typography';
import Background2 from "./Assets/Background2.png";

const heroSectionStyle = {
  background: `url(${Background2})`,
  backgroundSize: 'cover', // Image will cover the entire width
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center', // Center the image both horizontally and vertically
  color: 'white',
  padding: '3rem',
  textAlign: 'center',
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '16px',
};

const HeroSection = () => {
  return (
    <div style={heroSectionStyle} >
      <Typography variant="h1" gutterBottom fontFamily={"Helvetica Neue"} >
      Welcome to my world!
      </Typography>
      <Typography variant="h3" gutterBottom fontFamily={"Helvetica Neue"}>
     I'm Yuvraj Salunke, a passionate microbiologist and skilled web developer. 
      </Typography>
      <Typography variant="h4" gutterBottom fontFamily={"Helvetica Neue"}>
      I thrive in two worlds: one where I explore life at the microscopic level as a microbiologist, and the other where I craft stunning websites as a web developer.
      </Typography>
      <Typography variant="h4" gutterBottom fontFamily={"Helvetica Neue"}>
      On this website, you can find more about me and my projects in both fields by clicking on the buttons below: 
      </Typography>
      <Typography variant="h4" gutterBottom fontFamily={"Helvetica Neue"}>
      Explore Microbiology Career or Front End Development Path.
      </Typography>
      <Typography variant="h3" gutterBottom fontFamily={"Helvetica Neue"} >
      Thank you for visiting my website and I hope you enjoy it.
      </Typography>
     
    </div>
  );
};

export default HeroSection;

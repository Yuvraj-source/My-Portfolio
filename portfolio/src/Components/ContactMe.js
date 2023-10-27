import React from 'react';
import { Box, Typography, Grid, Link, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactMe() {
  return (
    <Box py={4} sx={{ background: 'black', textAlign: 'center', paddingBottom: '50px' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: 'white', marginBottom: '30px', fontFamily: 'Helvetica Neue' }}>
          Connect with Me
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="www.linkedin.com/in/yuvraj-salunke-89192411b" sx={{ color: 'white', p: 1 }}>
              <LinkedInIcon sx={{ fontSize: 50, color: 'white' }} />
            </Link>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="https://github.com/Yuvraj-source" sx={{ color: 'white', p: 1 }}>
              <GitHubIcon sx={{ fontSize: 50, color: 'white' }} />
            </Link>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="mailto:ydsalunke123@gmail.com" sx={{ color: 'white', p: 1 }}>
              <EmailIcon sx={{ fontSize: 40, color: 'white' }} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactMe;

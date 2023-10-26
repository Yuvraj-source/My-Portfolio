import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactMe() {
  return (
    <Box py={4} sx={{ background: 'black', textAlign: 'center', paddingBottom: '50px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'white', marginBottom: '30px', fontFamily :"Helvetica Neue" }}>
      Connect with Me
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="https://www.linkedin.com/in/yourusername" sx={{ color: 'white', p: 1 }}>
              <LinkedInIcon sx={{ fontSize: 50, color: 'white' }} />
            </Link>
            <Link href="https://www.github.com/yourusername" sx={{ color: 'white', p: 1 }}>
              <GitHubIcon sx={{ fontSize: 50, color: 'white' }} />
            </Link>
            <Link href="mailto:ydsalunke123@gmail.com" sx={{ color: 'white', p: 1 }}>
              <EmailIcon sx={{ fontSize: 40, color: 'white' }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactMe;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Adjust justifyContent */}
        <Typography variant="h5">
          Yuvraj
        </Typography>
        <div>
          <Button color="inherit"  style={{fontSize: '16px', marginRight: '50px' }}>
            About me
          </Button>
          <Button color="inherit" style={{ fontSize: '16px', marginRight: '50px' }}>
           Resume
          </Button>
          <Button color="inherit" style={{fontSize: '16px',  marginRight: '100px' }}>
            Contact me
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

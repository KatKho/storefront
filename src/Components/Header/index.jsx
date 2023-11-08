import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SimpleCart from '../SimpleCart';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div">
        OUR STORE
      </Typography>
      <SimpleCart />
    </Toolbar>
  </AppBar>
);

export default Header;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ minHeight: '36px' }}>
        <Typography variant="caption" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Doxa Palace International
        </Typography>
        <Button size="small" color="inherit" component={Link} to="/">Home</Button>
        <Button size="small" color="inherit" component={Link} to="/about">About</Button>
        <Button size="small" color="inherit" component={Link} to="/sermons">Sermons</Button>
        <Button size="small" color="inherit" component={Link} to="/events">Events</Button>
        <Button size="small" color="inherit" component={Link} to="/books">Books</Button>
        <Button size="small" color="inherit" component={Link} to="/gallery">Gallery</Button>
        <Button size="small" color="inherit" component={Link} to="/contact">Contact</Button>
        <Button size="small" color="inherit" component={Link} to="/donate">Donate</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
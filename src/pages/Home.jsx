import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      <Box 
        sx={{
          position: 'relative',
          height: { xs: '40vh', sm: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          background: 'url(https://via.placeholder.com/1500x600) no-repeat center center/cover',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem' } }}>
            Welcome to Doxa Palace
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            A place of worship, community, and faith.
          </Typography>
          <Button variant="contained" color="secondary" component={Link} to="/about">
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>
          Join Us for Worship
        </Typography>
        <Typography variant="body1" paragraph align="center">
          We welcome you to join us for our weekly services. Come experience the word of God and the fellowship of our community.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
          <Button variant="outlined" color="primary" component={Link} to="/sermons" fullWidth={{ xs: true, sm: false }}>
            Watch Sermons
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/events" fullWidth={{ xs: true, sm: false }}>
            Upcoming Events
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/books" fullWidth={{ xs: true, sm: false }}>
            Discover Our Books
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
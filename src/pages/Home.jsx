import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Box>
      <Box 
        sx={{
          position: 'relative',
          height: { xs: '50vh', sm: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          background: 'url(https://images.unsplash.com/photo-1507925921958-b724ca6753de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) no-repeat center center/cover',
        }}
      >
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
        <Box sx={{ zIndex: 1, p: 2 }}>
          <Typography variant="h3" component="h4" gutterBottom sx={{ fontSize: { xs: '2.5rem', sm: '4rem' }, fontWeight: 'bold' }}>
            Welcome to Doxa Palace 
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, mb: 3 }}>
            A vibrant community dedicated to faith, hope, and love.
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/about">
            Learn More About Us
          </Button>
        </Box>
      </Box>

      <Container sx={{ py: { xs: 4, sm: 6 } }}>
        <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' }, fontWeight: 'bold' }}>
            Join Us for Worship
            </Typography>
            <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
            We welcome you to join us for our weekly services. Come experience the word of God and the fellowship of our community.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                <Button variant="outlined" color="primary" component={Link} to="/sermons">
                    Watch Sermons
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/events">
                    Upcoming Events
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/books">
                    Discover Our Books
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/gallery">
                    Gallery
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/contact">
                    Contact Us
                </Button>
                <Button variant="outlined" color="primary" component={Link} to="/donate">
                    Donate
                </Button>
            </Box>
        </Box>
      </Container>
      
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, sm: 6 } }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
            Discover More
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1600497937332-b7c35a6b3e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Featured Sermon"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Featured Sermon
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Dive into our latest message on faith and perseverance. Let the word inspire and guide you through your week.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button size="small" component={Link} to="/sermons">Watch Now</Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Upcoming Events"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Upcoming Events
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Stay connected with our community. Find out about our upcoming events, from weekly gatherings to special celebrations.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button size="small" component={Link} to="/events">View Events</Button>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/books/righteousness.jpg"
                  alt="Featured Book"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    From Our Library
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Explore our collection of books, including "Righteousness by Faith," and deepen your understanding of the scriptures.
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button size="small" component={Link} to="/books">Explore Books</Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const books = [
  {
    title: 'The Power of Faith',
    author: 'Rev. William K. Danquah',
    image: 'https://via.placeholder.com/300x450',
    description: 'A deep dive into the power of faith and how it can transform your life.',
    link: '#'
  },
  {
    title: 'Living a Life of Purpose',
    author: 'Rev. William K. Danquah',
    image: 'https://via.placeholder.com/300x450',
    description: 'Discover your purpose and live a life that is fulfilling and pleasing to God.',
    link: '#'
  },
  {
    title: 'The Art of Prayer',
    author: 'Rev. William K. Danquah',
    image: 'https://via.placeholder.com/300x450',
    description: 'A practical guide to developing a powerful and effective prayer life.',
    link: '#'
  },
];

function Books() {
  return (
    <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          Our Books
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Explore our collection of books, written to inspire and guide you on your spiritual journey.
        </Typography>
        <Grid container spacing={4}>
          {books.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  sx={{ height: 450 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    by {book.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" href={book.link} target="_blank">
                    Buy Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Books;

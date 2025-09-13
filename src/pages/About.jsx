import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
} from '@mui/material';

const pastors = [
  {
    name: 'Rev. William K. Danquah',
    title: 'Senior Pastor',
    image: 'https://via.placeholder.com/150',
    bio: 'Rev. William K. Danquah is the founder and general overseer of Doxa Palace Chapel. With a passion for spreading the gospel and a heart for the community, he has been leading our congregation for over 20 years.',
  },
  {
    name: 'Pastor Jane Doe',
    title: 'Associate Pastor',
    image: 'https://via.placeholder.com/150', // Replace with a real image URL
    bio: 'Pastor Jane Doe has been with Doxa Palace Chapel for over a decade, serving in various capacities. She has a heart for women\'s ministry and a passion for teaching the Word of God.',
  },
];

function About() {
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
          About Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Learn more about our mission, vision, and the people who lead our church.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To spread the gospel of Jesus Christ and to make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that Jesus commanded.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To be a beacon of hope and a center of love in our community, where people can find and follow Jesus. We strive to create a welcoming environment where everyone can grow in their faith and serve others.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ my: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Our Pastors
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {pastors.map((pastor, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <Avatar
                    alt={pastor.name}
                    src={pastor.image}
                    sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {pastor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pastor.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      {pastor.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default About;

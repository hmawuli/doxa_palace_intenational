import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Link,
} from '@mui/material';
import { Event, LocationOn } from '@mui/icons-material';

const events = [
  {
    title: 'Sunday Worship Service',
    date: 'Every Sunday at 10:00 AM',
    location: 'Main Sanctuary',
    description: 'Join us for our weekly worship service as we come together to praise, pray, and hear an inspiring message from the Word of God.',
    mapLink: 'https://goo.gl/maps/example',
  },
  {
    title: 'Mid-Week Bible Study',
    date: 'Every Wednesday at 7:00 PM',
    location: 'Fellowship Hall',
    description: 'Dive deeper into the Scriptures with our mid-week Bible study. A great opportunity for learning and fellowship.',
    mapLink: 'https://goo.gl/maps/example',
  },
  {
    title: 'Youth Night',
    date: 'Every Friday at 6:30 PM',
    location: 'Youth Center',
    description: 'A fun and engaging night for our youth with games, worship, and a relevant message. Open to all middle and high school students.',
    mapLink: 'https://goo.gl/maps/example',
  },
    {
    title: 'Community Outreach',
    date: 'Last Saturday of Every Month',
    location: 'Various Locations',
    description: 'Be the hands and feet of Jesus as we serve our local community. Check our bulletin for this month\'s outreach activity.',
    mapLink: '#',
  },
];

function Events() {
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
          Upcoming Events
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Join us for our services, studies, and community gatherings.
        </Typography>

        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: 6 } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                    <Event sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1" color="text.secondary">
                      {event.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1" color="text.secondary">
                      {event.location}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={event.mapLink === '#'}
                  >
                    Find on Map
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Events;

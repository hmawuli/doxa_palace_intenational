import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Link,
  Paper,
} from '@mui/material';
import { Person, Event, LiveTv } from '@mui/icons-material';
import YouTube from 'react-youtube';

const featuredSermon = {
  title: 'Living a Life of Purpose',
  preacher: 'Rev. William K. Danquah',
  date: '2023-11-12',
  videoId: 'yBdr8A-bf7g', // Replaced with the provided YouTube video ID
  description: 'Discover how to live a life filled with purpose and meaning. In this sermon, Rev. Danquah explores the biblical principles of finding and fulfilling your God-given destiny.',
};

const sermons = [
  {
    title: 'The Power of Forgiveness',
    preacher: 'Rev. William K. Danquah',
    date: '2023-11-05',
    videoId: 'yBdr8A-bf7g',
  },
  {
    title: 'Faith Over Fear',
    preacher: 'Guest Speaker',
    date: '2023-10-29',
    videoId: 'yBdr8A-bf7g',
  },
  {
    title: 'The Heart of a Servant',
    preacher: 'Rev. William K. Danquah',
    date: '2023-10-22',
    videoId: 'yBdr8A-bf7g',
  },
  {
    title: 'Walking in the Spirit',
    preacher: 'Rev. William K. Danquah',
    date: '2023-10-15',
    videoId: 'yBdr8A-bf7g',
  },
];

function Sermons() {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

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
          Sermons
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Be inspired and uplifted by the Word of God.
        </Typography>

        {/* Live Stream Section */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<LiveTv />}
            href="http://www.tiktok.com/@apostlewilliamk.danquah/live?source=h5_m&_r=1&enter_from_merge=share&enter_method=share&share_from_user_id=7125561660350645253&user_id=7125561660350645253&sec_user_id=MS4wLjABAAAAme_DWA-6a6CpCMhfbY4zLCKmRZ4EUtlDLE--eKLl4gryD7rgFKGkqeVbmNFgNwXJ&utm_source=whatsapp&utm_campaign=client_share&utm_medium=android&share_iid=7536121908904544006&share_link_id=d0622002-525c-4cef-9015-0d33dded6ff3&share_app_id=1233&ugbiz_name=LIVE&ug_btm=b2001%2CSAAActivity&timestamp=1754818115&social_share_type=10&enable_checksum=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Live on TikTok
          </Button>
        </Box>

        {/* Featured Sermon */}
        <Paper sx={{ mb: 6, p: 4, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            Featured Sermon
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <YouTube videoId={featuredSermon.videoId} opts={opts} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                {featuredSermon.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                <Person sx={{ mr: 1 }} />
                <Typography variant="subtitle1">
                  {featuredSermon.preacher}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Event sx={{ mr: 1 }} />
                <Typography variant="subtitle1">
                  {featuredSermon.date}
                </Typography>
              </Box>
              <Typography variant="body1">
                {featuredSermon.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4, mt: 8 }}
        >
          Recent Sermons
        </Typography>

        {/* Recent Sermons */}
        <Grid container spacing={4}>
          {sermons.map((sermon, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: 6 } }}>
                <CardMedia
                  component="div" // Changed to div to house the YouTube component
                >
                  <YouTube videoId={sermon.videoId} opts={{ ...opts, height: 200 }} />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {sermon.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                    <Person sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {sermon.preacher}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Event sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {sermon.date}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, justifyContent: 'flex-end' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
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

export default Sermons;
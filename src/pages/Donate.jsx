import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  CreditCard,
  AccountBalance,
  MailOutline,
  VolunteerActivism,
} from '@mui/icons-material';

function Donate() {
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
          Support Our Mission
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Your generous contribution empowers us to make a lasting impact in our
          community and beyond. Join us in spreading hope and changing lives.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <CreditCard sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
                  Online Donation
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Securely donate online using your credit or debit card.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <AccountBalance sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
                  Bank Transfer
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Transfer your donation directly from your bank account.
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Account Name: Doxa Palace International
                  <br />
                  Account Number: 123-456-789
                  <br />
                  Bank: First National Bank
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <MailOutline sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
                  Mail a Check
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Send a check payable to "Doxa Palace International" to our
                  mailing address.
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  123 Main Street, Anytown, USA 12345
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <VolunteerActivism sx={{ fontSize: 80, color: 'secondary.main' }} />
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            The Impact of Your Gift
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Your donation supports our various ministries, including community
            outreach programs, youth and children's ministries, and global
            missions. With your help, we can continue to be a beacon of light
            and a source of support for those in need.
          </Typography>
        </Box>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mt: 6 }}
        >
          Thank you for your generosity and partnership in our ministry.
        </Typography>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 2, fontWeight: 'bold' }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            We keep your personal information private and secure. When you make a 
            payment through our site, you provide your name, contact information, 
            payment information, and additional information related to your transaction. 
            We use this information to process your payment and to ensure your payment 
            is correctly credited to your account.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}

export default Donate;
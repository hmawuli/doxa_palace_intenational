import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 0.5, mt: 4 }}>
      <Typography variant="caption" align="center">
        © {new Date().getFullYear()} Doxa Palace International. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
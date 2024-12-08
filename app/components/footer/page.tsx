import { Box, Typography, Grid, Link, Divider, Stack } from '@mui/material';

export const Footer = () => (
  <Box sx={{ bgcolor: '#f5f5f5', color: '#333', p: 4 }}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          About Us
        </Typography>
        <Typography variant="body2" lineHeight={1.8}>
          We are a leading e-commerce store, delivering style and comfort worldwide. Discover the best products tailored just for you.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Quick Links
        </Typography>
        <Stack spacing={1}>
          <Link href="#" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Shop
          </Link>
          <Link href="#" color="inherit" underline="hover">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contact
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Customer Support
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">FAQs</Typography>
          <Typography variant="body2">Shipping Policy</Typography>
          <Typography variant="body2">Return Policy</Typography>
          <Typography variant="body2">Terms of Service</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Contact Us
        </Typography>
        <Typography variant="body2">Email: support@website.com</Typography>
        <Typography variant="body2">Phone: +123 456 789</Typography>
        <Typography variant="body2">Address: 123 Main St, City, Country</Typography>
      </Grid>
    </Grid>

    <Divider sx={{ my: 3, borderColor: '#ddd' }} />

    <Box textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Bandage. All Rights Reserved.
      </Typography>
    </Box>
  </Box>
);

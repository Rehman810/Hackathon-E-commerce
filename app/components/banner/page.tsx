import { Box, Typography, Button } from '@mui/material';

export const Banner = () => (
  <Box
    sx={{
      backgroundImage: 'url(/banner.png)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: { xs: '400px', sm: '600px', md: '600px' }, 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: { xs: '1.5rem', sm: '2rem', md: '4rem' },
      color: 'white',
    }}
  >
    <Box
      maxWidth={{ xs: '100%', sm: '500px', md: '600px' }}
      sx={{
        textAlign: 'left',
        marginLeft: { xs: '0', sm: '3rem', md: '10rem' }, 
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' } }}
      >
        Summer 2020
      </Typography>

      <Typography
        variant="h2"
        fontWeight="bold"
        mb={2}
        sx={{
          fontSize: { xs: '32px', sm: '48px', md: '64px' },
          lineHeight: { xs: '1.2', md: '1.1' },
        }}
      >
        New Collection
      </Typography>

      <Typography
        variant="body1"
        mb={3}
        sx={{
          fontSize: { xs: '14px', sm: '18px', md: '20px' },
          maxWidth: '500px',
        }}
      >
       We know how larger objects willa act,<br/> but things on a small scale.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#2DC071',
          '&:hover': { backgroundColor: '#27a165' },
          paddingX: { xs: '1.5rem', sm: '2rem' },
          paddingY: { xs: '0.8rem', sm: '1rem' },
          fontSize: { xs: '14px', sm: '16px', md: '18px' },
          textTransform: 'uppercase',
        }}
      >
        Shop Now
      </Button>
    </Box>
  </Box>
);

import { Box, Typography, Button } from '@mui/material';

export const WorkWithUs = () => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100vh' }}>
    <Box
      sx={{
        width: { xs: '100%', md: '60%' },
        backgroundColor: '#2A7CC7',
        color: 'white',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: { xs: 2, md: 4 },
        paddingRight: { xs: 2, md: 4 }, 
      }}
    >
      <Typography variant="h6" gutterBottom fontSize={{ xs: '16px', md: '14px' }}>
        Work With Us
      </Typography>
      <Typography variant="h4" fontSize={{ xs: '24px', md: '32px' }} gutterBottom>
        Now let’s grow together
      </Typography>
      <Typography variant="body1" mb={2} fontSize={{ xs: '14px', md: '16px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet accumsan purus. Duis bibendum, ligula ac aliquet sodales, orci ante vehicula nisi, sed auctor magna erat at augue.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          padding: '6px 16px',
          fontSize: '14px',
          color: 'white',
          border: '1px solid white',
          width: { xs: '150px', sm: '100px' }, 
        }}
      >
        Button
      </Button>
    </Box>
    <Box
      sx={{
        width: { xs: '100%', md: '40%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="/workWithUs.png"
        alt="Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  </Box>
);

import { Box, Typography, Button, Stack } from '@mui/material';

export const ClassicProduct = () => (
  <Box
    sx={{
      backgroundColor: '#23856D',
      color: 'white',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: { xs: '2rem', md: '3rem' },
    }}
  >
    <Box flex="1" maxWidth="500px" p={2}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: { xs: '16px', md: '20px' } }}
      >
        Summer 2020
      </Typography>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ fontSize: { xs: '26px', sm: '32px', md: '36px' } }}
      >
        Vita Classic Products
      </Typography>

      <Typography
        variant="body1"
        mb={3}
        sx={{ fontSize: { xs: '14px', sm: '16px' } }}
      >
        We know how larger objects will act,
        <br /> but things on a small scale. We know
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ flexWrap: 'wrap' }} 
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: { xs: '18px', sm: '20px' } }}
        >
          $16.58
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2DC071',
            '&:hover': { backgroundColor: '#27a165' },
            paddingX: { xs: '1.5rem', sm: '2rem' },
            paddingY: { xs: '0.8rem', sm: '1rem' },
            fontSize: { xs: '14px', sm: '16px' },
            textTransform: 'uppercase',
            borderRadius: '8px',
          }}
        >
          Add to Cart
        </Button>
      </Stack>
    </Box>

    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      p={2}
      sx={{ width: '100%', display: { md: 'block' } }} 
    >
      <img
        src="/classicProduct.png"
        alt="Classic Product"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </Box>
  </Box>
);

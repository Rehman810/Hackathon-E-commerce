
import { Box, Button, Typography, Stack, Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CtaBanner = () => {
  return (
    <Box py={6} textAlign="center" bgcolor="background.paper">
      <Container maxWidth="sm">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          Start your 14 days <span style={{ color: '#000' }}>free trial</span>
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="textSecondary" mb={3}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: '8px', textTransform: 'none' }}
        >
          Try it free now
        </Button>

        {/* Social Icons */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          mt={4}
          alignItems="center"
        >
          <TwitterIcon color="primary" fontSize="medium" />
          <FacebookIcon sx={{ color: '#3b5998' }} fontSize="medium" />
          <InstagramIcon sx={{ color: '#000' }} fontSize="medium" />
          <LinkedInIcon sx={{ color: '#0077b5' }} fontSize="medium" />
        </Stack>
      </Container>
    </Box>
  );
};

export default CtaBanner;

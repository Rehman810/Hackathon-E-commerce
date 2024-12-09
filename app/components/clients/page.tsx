import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';

type ClientsSectionProps = {
  heading?: string;
  para?: string;
};

export const ClientsSection = ({ heading, para }: ClientsSectionProps) => {
  const formattedPara = para?.split('<br />').map((line, index) => (
    <span key={index}>
      {line}
      {index !== para?.split('<br />').length - 1 && <br />}
    </span>
  ));

  return (
    <Box bgcolor="#f5f5f5" py={4}> 
      {/* Heading */}
      <Typography variant="h4" color='#252B42' align="center" gutterBottom fontWeight="bold">
        {heading}
      </Typography>

      {/* Paragraph with manual line breaks */}
      <Typography variant="body2" mb={4} sx={{ color: "gray" }} align='center'>
        {formattedPara}
      </Typography>

      {/* Clients' Logos Section with margin */}
      <Box px={{ xs: 2, sm: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={2} key={index}> 
              <Card 
                sx={{ 
                  boxShadow: 'none', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  backgroundColor: 'transparent'  
                }}
              >
                <CardMedia
                  component="img"
                  image={`/client${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  sx={{
                    maxHeight: 60, 
                    objectFit: 'contain', 
                    backgroundColor: 'transparent' 
                  }} 
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

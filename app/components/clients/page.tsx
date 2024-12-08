import { Box, Grid, Card, CardMedia } from '@mui/material';

export const ClientsSection = () => (
  <Box bgcolor="#f5f5f5" py={4}> 
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
);

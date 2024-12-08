import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export const ShopCards = () => (
  <Box p={4}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Typography variant="h4" fontWeight="bold">
        Shop
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: "bold" }}> Home </span>&gt; Shop
      </Typography>
    </Box>

    <Grid container spacing={3}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Grid item xs={12} sm={2.4} key={index}>
          <Card sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="200"
              image={`/shop${index + 1}.png`}
              alt={`Clothes ${index + 1}`}
            />
            <CardContent
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <Typography variant="h6" fontWeight="bold" fontSize={"18px"}>
                Clothes {index + 1}
              </Typography>
              <Typography variant="body2" fontSize="small">
                5 items
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

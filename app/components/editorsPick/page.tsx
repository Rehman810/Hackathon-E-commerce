import { Box, Grid, Typography } from "@mui/material";

const categories = [
  { image: "/men.png" },
  { image: "/women.png" },
  { image: "/accessories.png" },
  { image: "/kids.png" },
];

export const EditorsPick = () => (
  <Box p={4} textAlign="center">
    <Typography variant="h5" mb={2} fontWeight={"bold"}>
      EDITOR'S PICK
    </Typography>
    <Typography variant="body1" mb={4} sx={{ color: "gray" }}>
      Problems trying to resolve the conflicts between
    </Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundImage: `url(${categories[0].image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: { xs: "300px", md: "550px" },
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Box
          sx={{
            backgroundImage: `url(${categories[1].image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            height: { xs: "300px", md: "550px" },
            backgroundRepeat: "no-repeat",
          }}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Grid container spacing={2}>
          {/* Third Image */}
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${categories[2].image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: { xs: "300px", md: "265px" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${categories[3].image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: { xs: "300px", md: "265px" },
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

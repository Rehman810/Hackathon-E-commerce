import { Box, Grid,  } from "@mui/material";

const images = [
  "/gallery1.png",
  "/gallery2.png", 
  "/gallery3.png",
  "/gallery4.png", 
  "/gallery5.png", 
];

const SectionLayout = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              position: "relative",
              height: "420px",
              backgroundImage: `url(${images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  backgroundImage: `url(${images[1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  backgroundImage: `url(${images[2]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  backgroundImage: `url(${images[3]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  backgroundImage: `url(${images[4]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionLayout;

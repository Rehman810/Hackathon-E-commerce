import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

export const NeuralUniverse = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: { xs: "2rem", sm: "3rem" },
      flexWrap: "wrap",
      flexDirection: { xs: 'column-reverse', md: 'row' }, 
    }}
  >
    <Box flex="1" display="flex" justifyContent="center" p={2}>
      <Image 
        src="/neuralUniverse.png"
        alt="Split Section"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Box>

    <Box flex="1" maxWidth="500px" p={2}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: { xs: "16px", md: "20px" } }}
        color="gray"
        fontWeight={"bold"}
      >
        Summer 2020
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={2} color="#252B42">
        Part of the neural universe
      </Typography>
      <Typography variant="body1" mb={3}>
        We know how larger objects will act,
        <br /> but things on a small scale.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        sx={{ flexWrap: "wrap" }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2DC071",
            "&:hover": { backgroundColor: "#27a165" },
            paddingX: { xs: "1.5rem", sm: "2rem" },
            paddingY: { xs: "0.8rem", sm: "1rem" },
            fontSize: { xs: "14px", sm: "16px" },
            textTransform: "uppercase",
            borderRadius: "8px",
            width: { xs: "100%", sm: "auto" },
          }}
          
        >
          Buy Now
        </Button>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "white",
            paddingX: { xs: "1.5rem", sm: "2rem" },
            paddingY: { xs: "0.8rem", sm: "1rem" },
            fontSize: { xs: "14px", sm: "16px" },
            textTransform: "uppercase",
            borderRadius: "8px",
            color: "#2DC071",
            borderColor: "#2DC071",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Read More
        </Button>
      </Stack>
    </Box>
  </Box>
);

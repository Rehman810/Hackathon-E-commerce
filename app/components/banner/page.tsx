"use client";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
interface BannerProps {
  bg: string;
}

export const Banner = ({ bg }: BannerProps) => {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        backgroundImage: `url(/${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { xs: "400px", sm: "600px", md: "600px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: { xs: "1.5rem", sm: "2rem", md: "4rem" },
        color: "white",
      }}
    >
      <Box
        maxWidth={{ xs: "100%", sm: "500px", md: "600px" }}
        sx={{
          textAlign: "left",
          marginLeft: { xs: "0", sm: "3rem", md: "10rem" },
        }}
        color={pathname == "/" ? "white" : "black"}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }}
        >
          {pathname === "/contact" ? "Contact Us" : "Summer 2020"}
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          mb={2}
          sx={{
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
            lineHeight: { xs: "1.2", md: "1.1" },
          }}
        >
          {pathname === "/" ? (
            "New Collection"
          ) : pathname === "/contact" ? (
            <>
              {"Get in touch"}
              <br />
              {"today!"}
            </>
          ) : (
            "About Us"
          )}
        </Typography>

        <Typography
          variant="body1"
          mb={3}
          sx={{
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            maxWidth: "500px",
          }}
        >
          We know how larger objects will act,
          <br /> but things on a small scale.
        </Typography>

        {pathname != "/contact" && (<Button
          variant="contained"
          sx={{
            backgroundColor: pathname == "/" ? "#2DC071" : "#23A6F0",
            "&:hover": { backgroundColor: "#27a165" },
            paddingX: { xs: "1.5rem", sm: "2rem" },
            paddingY: { xs: "0.8rem", sm: "1rem" },
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            textTransform: "uppercase",
          }}
        >
          {pathname == "/" ? "Shop Now" : "Get Quote Now"}
        </Button>)}

        <Typography
          variant="body1"
          mb={3}
          sx={{
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            maxWidth: "500px",
            fontWeight: "bold"
          }}
        >
          Phone: +451 215 215 <br />
          Fax: +451 215 215
        </Typography>

        <IconButton>
            <FacebookIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: "#000" }} />
          </IconButton>
      </Box>
    </Box>
  );
};

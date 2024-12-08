import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    p={1}
    bgcolor="#252B42"
    color="white"
    flexWrap="wrap"
  >
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{
        display: { xs: "block", sm: "flex" },
        "@media (max-width: 1000px)": { display: "none" },
      }}
    >
      <Box display="flex" alignItems="center" gap={0.5}>
        <PhoneIcon fontSize="small" />
        <Typography variant="body2">(225) 555-0118</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={0.5}>
        <EmailIcon fontSize="small" />
        <Typography variant="body2">michelle.rivera@example.com</Typography>
      </Box>
    </Box>

    <Box sx={{ flex: 1, textAlign: "center", display: { xs: "block" } }}>
      <Typography variant="body2" fontWeight="bold">
        Follow Us and get a chance to win 80% off
      </Typography>
    </Box>

    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{
        display: { xs: "block", sm: "flex" },
        "@media (max-width: 1000px)": { display: "none" },
      }}
    >
      <Typography variant="body2">Follow Us:</Typography>
      <IconButton color="inherit" size="small">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit" size="small">
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit" size="small">
        <TwitterIcon />
      </IconButton>
    </Box>
  </Box>
);

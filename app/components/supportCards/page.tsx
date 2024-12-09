import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  emails: string[];
  buttonText: string;
}

const contactData: ContactInfo[] = [
  {
    icon: <PhoneIcon fontSize="large" color="primary" />,
    title: "Get Support",
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    buttonText: "Submit Request",
  },
  {
    icon: <LocationOnIcon fontSize="large" sx={{ color: "white" }} />,
    title: "Get Support",
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    buttonText: "Submit Request",
  },
  {
    icon: <EmailIcon fontSize="large" color="primary" />,
    title: "Get Support",
    emails: ["georgia.young@example.com", "georgia.young@ple.com"],
    buttonText: "Submit Request",
  },
];

const ContactSection: React.FC = () => {
  return (

    <>
    <Box
      sx={{
        py: 5,
        px: 10,
        // backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{ textTransform: "uppercase", mb: 1, mt:3 }}
      >
        Visit Our Office
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 4,
          pb:4,
        }}
      >
        We help small businesses <br /> with big ideas
      </Typography>
      <Grid
        container
        spacing={0}
        display="flex"
        justifyContent="center"
        alignItems="flex-start" 
        paddingBottom='50px'

      >
        {contactData.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0", 
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: index === 1 ? "#002244" : "transparent",
                color: index === 1 ? "#fff" : "inherit",
                py: 4,
                px: 3,
                borderRadius: "8px",
                border:
                  index === 1
                    ? "none"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                width: "100%",
                maxWidth: "300px",
                minHeight: index === 1 ? "320px" : "300px", 
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                marginTop: index === 1 ? -2 : 0, 
                marginBottom: index === 1 ? 0 : "0 auto",
              }}
            >
              {item.icon}
              <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                {item.emails.map((email, idx) => (
                  <span key={idx}>
                    {email}
                    <br />
                  </span>
                ))}
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: index === 1 ? "white" : "primary.main",
                  borderColor: index === 1 ? "white" : "primary.main",
                }}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box py={6} textAlign="center" bgcolor="background.paper">
      <Container maxWidth="sm">
        {/* Title */}
        <Typography
          color="text.primary"
          gutterBottom
        >
          WE Cant WAIT TO MEET YOU 
        </Typography>

        {/* Description */}
        <Typography variant="h4" fontWeight="bold" color="#000" mb={3}>
        Let’s Talk
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
      </Container>
    </Box>

    </>
    
    
  );
};

export default ContactSection;


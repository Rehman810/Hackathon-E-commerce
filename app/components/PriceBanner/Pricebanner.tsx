// components/Pricebanner.tsx
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BreadCrumb from "../breadCrumb/page";

const Pricebanner = () => {
  const pricingPlans = [
    {
      title: "FREE",
      price: "0",
      features: ["Unlimited product updates"],
    },
    {
      title: "STANDARD",
      price: "9.99",
      features: ["Unlimited product updates", "Unlimited product updates"],
    },
    {
      title: "PREMIUM",
      price: "19.99",
      features: ["Unlimited product updates"],
    },
  ];

  return (
    <>
    <BreadCrumb h1="PRICING" para="Simple Pricing" route="Pricing"/>
    <Box
      sx={{
        py: 5,
        px: { xs: 2, sm: 5, md: 15 },
        display: "flex",
        justifyContent: "center",
        mt:'100px',
      }}
    >
      <Grid
        container
        spacing={0} 
        justifyContent="center"
        alignItems="stretch"
      >
        {pricingPlans.map((plan, index) => (
          <Grid
            item
            xs={12} 
            sm={12} 
            md={index === 1 ? 4 : 3} 
            lg={index === 1 ? 4 : 3} 
            key={plan.title}
          >
            <Card
              sx={{
                textAlign: "center",
                minHeight: index === 1 ? 400 : 350, 
                backgroundColor: index === 1 ? "#002244" : "#ffffff",
                color: index === 1 ? "#ffffff" : "#333333",
                boxShadow: 3,
                borderRadius: 2,
                marginTop: index === 1 ? -5 : 0, 
                marginBottom: index === 1 ? 0 : "0 auto",
              }}
            >
              <CardContent>
                {/* Plan Title */}
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {plan.title}
                </Typography>
                {/* Description */}
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Organize across all apps by hand
                </Typography>
                {/* Price */}
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: index === 1 ? "#4fc3f7" : "#007fff" }}
                >
                  {plan.price} $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Per Month
                </Typography>

                {/* Features */}
                {plan.features.map((feature, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mt: 2,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#2dc071",
                        mr: 1,
                      }}
                    />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    </>
      );
};

export default Pricebanner;

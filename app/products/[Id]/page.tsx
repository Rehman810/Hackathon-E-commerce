"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Stack,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

const products = [
  {
    id: 1,
    title: "Stylish Shirt",
    description: "A comfortable and stylish shirt for any occasion.",
    price: "$30",
    oldPrice: "$40",
    image: "/p1.png",
    colors: ["red", "blue", "green", "yellow"],
  },
  {
    id: 2,
    title: "Classic Pants",
    description: "Durable and sleek pants that suit all styles.",
    price: "$50",
    oldPrice: "$65",
    image: "/p2.png",
    colors: ["black", "gray", "white", "navy"],
  },
  {
    id: 3,
    title: "Fashion Jacket",
    description: "A fashionable jacket to keep you warm and trendy.",
    price: "$80",
    oldPrice: "$100",
    image: "/p3.png",
    colors: ["brown", "orange", "olive", "tan"],
  },
  {
    id: 4,
    title: "Comfort Shoes",
    description: "Shoes designed for ultimate comfort and durability.",
    price: "$60",
    oldPrice: "$75",
    image: "/p4.png",
    colors: ["purple", "pink", "aqua", "lime"],
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  console.log("ID from URL:", id); // Debugging log to verify the retrieved ID

  // Find the product based on the dynamic ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Typography variant="h6" textAlign="center" mt={4}>
        Product not found
      </Typography>
    );
  }

  return (
    <Box p={4} textAlign="center">
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6} textAlign="left">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>
            {product.description}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
              {product.oldPrice}
            </Typography>
            <Typography variant="h5" sx={{ color: "green" }}>
              {product.price}
            </Typography>
          </Stack>
          <Typography variant="body1" mb={2}>
            Availability: <strong>In Stock</strong>
          </Typography>
          <Stack direction="row" spacing={2} mb={2}>
            {product.colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </Stack>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Select Options
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;

import { Box, Grid, Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

const products = [
  { 
    id: 1, 
    title: "Stylish Shirt", 
    description: "A comfortable and stylish shirt for any occasion.", 
    price: "$30", 
    oldPrice: "$40", 
    image: "/p1.png", 
    colors: ["red", "blue", "green", "yellow"] 
  },
  { 
    id: 2, 
    title: "Classic Pants", 
    description: "Durable and sleek pants that suit all styles.", 
    price: "$50", 
    oldPrice: "$65", 
    image: "/p2.png", 
    colors: ["black", "gray", "white", "navy"] 
  },
  { 
    id: 3, 
    title: "Fashion Jacket", 
    description: "A fashionable jacket to keep you warm and trendy.", 
    price: "$80", 
    oldPrice: "$100", 
    image: "/p3.png", 
    colors: ["brown", "orange", "olive", "tan"] 
  },
  { 
    id: 4, 
    title: "Comfort Shoes", 
    description: "Shoes designed for ultimate comfort and durability.", 
    price: "$60", 
    oldPrice: "$75", 
    image: "/p4.png", 
    colors: ["purple", "pink", "aqua", "lime"] 
  },
  { 
    id: 1, 
    title: "Stylish Shirt", 
    description: "A comfortable and stylish shirt for any occasion.", 
    price: "$30", 
    oldPrice: "$40", 
    image: "/p5.png", 
    colors: ["red", "blue", "green", "yellow"] 
  },
  { 
    id: 2, 
    title: "Classic Pants", 
    description: "Durable and sleek pants that suit all styles.", 
    price: "$50", 
    oldPrice: "$65", 
    image: "/p6.png", 
    colors: ["black", "gray", "white", "navy"] 
  },
  { 
    id: 3, 
    title: "Fashion Jacket", 
    description: "A fashionable jacket to keep you warm and trendy.", 
    price: "$80", 
    oldPrice: "$100", 
    image: "/p7.png", 
    colors: ["brown", "orange", "olive", "tan"] 
  },
  { 
    id: 4, 
    title: "Comfort Shoes", 
    description: "Shoes designed for ultimate comfort and durability.", 
    price: "$60", 
    oldPrice: "$75", 
    image: "/p8.png", 
    colors: ["purple", "pink", "aqua", "lime"] 
  },
];

export const FeaturedProducts = () => (
  <Box p={4} textAlign="center">
    <Typography variant="body2" sx={{ color: "gray" }}>
      Featured Products
    </Typography>
    <Typography variant="h5" fontWeight="bold" gutterBottom>
      Bestseller Products
    </Typography>
    <Typography variant="body1" sx={{ color: "gray" }} mb={4}>
      Problem trying to resolve the conflict between
    </Typography>

    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card sx={{ boxShadow: "none", borderRadius: "10px", overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={product.image}
              height="450" 
              alt={product.title}
              sx={{ objectFit: "contain" }}
            />

            <CardContent sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                {product.description}
              </Typography>

              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mb={1}>
                <Typography variant="h6" fontWeight={"bold"} sx={{ color: "gray" }}>
                  {product.oldPrice}
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ color: "green" }}>
                  {product.price}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="center" spacing={1}>
                {product.colors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: color,
                      border: "1px solid #ddd",
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
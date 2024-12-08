import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const posts = [
  {
    id: 1,
    title: "The Summer Look",
    image: "/post1.png",
    description: "Discover the trends of this summer.",
  },
  {
    id: 2,
    title: "Style Essentials",
    image: "/post2.png",
    description: "Top picks for your wardrobe.",
  },
  {
    id: 3,
    title: "Comfort First",
    image: "/post3.png",
    description: "Combine style with comfort effortlessly.",
  },
];

export const FeaturedPosts = () => (
  <Box p={4} textAlign="center">
    <Typography variant="body2" mb={1} sx={{ color: "#23A6F0" }}>
      Practice Advice
    </Typography>
    <Typography variant="h4" mb={2} fontWeight="bold">
      Featured Posts
    </Typography>
    <Typography variant="body2" mb={4} sx={{ color: "gray" }}>
      Problems trying to resolve the conflict between <br /> the two major
      realms of Classical physics. Newtonian physics.
    </Typography>

    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card
            sx={{ boxShadow: "none", borderRadius: "10px", overflow: "hidden" }}
          >
            <CardMedia
              component="img"
              image={post.image}
              height="300"
              alt={post.title}
            />

            <CardContent>
              <Box display="flex" justifyContent="flex-start" gap={1} mb={1}>
                <Typography
                  variant="body1"
                  fontWeight="light"
                  color="#23A6F0"
                  fontSize={12}
                >
                  Google
                </Typography>
                <Typography variant="body1" fontWeight="light" fontSize={12}>
                  Trending
                </Typography>
                <Typography variant="body1" fontWeight="light" fontSize={12} >
                  New
                </Typography>
              </Box>

              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                display="flex"
                justifyContent="flex-start"
              >
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "gray" }}
                mb={2}
                display="flex"
                justifyContent="flex-start"
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                cumque, eaque eligendi sint, expedita totam similique nostrum
                voluptate quasi optio ut qui, corporis laboriosam impedit nemo
                eveniet animi maiores recusandae.
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Box display="flex" alignItems="center" gap={0.5}>
                  <AccessTimeIcon fontSize="small" color="disabled" sx={{color: "#23A6F0"}}/>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    22 April, 2024
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={0.5}>
                  <CommentIcon fontSize="small" color="disabled" sx={{color: "green"}}/>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    10 Comments
                  </Typography>
                </Box>
              </Stack>

              <Box display="flex" alignItems="center" gap={0.5} color="primary">
                <Typography variant="body2" fontWeight="bold">
                  Learn More
                </Typography>
                <ArrowForwardIosIcon fontSize="small" sx={{color: "#23A6F0"}}/>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

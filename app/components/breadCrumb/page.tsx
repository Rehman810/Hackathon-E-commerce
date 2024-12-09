import { Box, Grid, Typography, Link } from '@mui/material';


type Breadcrumb = {
    h1?: string;
    para?: string;
    route?: string;
  };

const BreadCrumb = ({h1, para, route}:Breadcrumb) => (
  <Box sx={{ padding: 4, textAlign: 'center' }}>
    <Typography variant="subtitle2" color="textSecondary" mb={2}>
      {h1}
    </Typography>

    <Typography variant="h3" fontWeight="bold" color="textPrimary" mb={2}>
      {para}
    </Typography>
    <Box>
      <Link href="/" underline="hover" color="textSecondary">
        Home
      </Link>
      <Typography variant="body2" component="span" color="textSecondary" mx={1}>
        &gt;
      </Typography>
      <Link href="/team" underline="hover" color="gray">
        {route}
      </Link>
    </Box>
  </Box>
);

export default BreadCrumb;

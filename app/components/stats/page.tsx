import { Box, Grid, Typography } from '@mui/material';

type StatCardProps = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: StatCardProps) => (
  <Box textAlign="center">
    <Typography variant="h4" fontWeight="bold">
      {value}
    </Typography>
    <Typography variant="subtitle2" color="text.secondary">
      {title}
    </Typography>
  </Box>
);

const StatsSection = () => {
  const stats = [
    { title: 'Total Users', value: '15K' },
    { title: 'Subscribers', value: '150K' },
    { title: 'Years Active', value: '15' },
    { title: 'Companies', value: '100+' },
  ];

  return (
    <Box py={4}>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <StatCard title={stat.title} value={stat.value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
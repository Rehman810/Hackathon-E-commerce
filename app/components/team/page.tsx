import { Box, Grid, Avatar, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type TeamMemberProps = {
  name: string;
  role: string;
  imgSrc: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
};

const TeamMember = ({ name, role, imgSrc, facebookUrl, instagramUrl, twitterUrl }: TeamMemberProps) => (
  <Box
    textAlign="center"
    sx={{
      padding: 2,
      maxWidth: 400,
      borderRadius: 2,
      backgroundColor: 'white',
    }}
  >
    <Avatar
      src={imgSrc}
      sx={{
        width: 250,
        height: 180,
        mx: 'auto',
        borderRadius: 1, 
      }}
    />
    
    <Typography variant="h6" fontWeight="bold" mt={2}>
      {name}
    </Typography>
    
    <Typography variant="body2" color="text.secondary" mb={2}>
      {role}
    </Typography>
    
    {/* Social Media Icons */}
    <Box>
      <IconButton href={facebookUrl} target="_blank" sx={{ color: '#23A6F0', mr: 1 }}>
        <FacebookIcon />
      </IconButton>
      <IconButton href={instagramUrl} target="_blank" sx={{ color: '#23A6F0', mr: 1 }}>
        <InstagramIcon />
      </IconButton>
      <IconButton href={twitterUrl} target="_blank" sx={{ color: '#23A6F0' }}>
        <TwitterIcon />
      </IconButton>
    </Box>
  </Box>
);

const TeamSection = () => {
  const team = [
    {
      name: 'Alice',
      role: 'Designer',
      imgSrc: '/member1.png',
      facebookUrl: 'https://facebook.com/alice',
      instagramUrl: 'https://instagram.com/alice',
      twitterUrl: 'https://twitter.com/alice',
    },
    {
      name: 'Bob',
      role: 'Developer',
      imgSrc: '/member2.png',
      facebookUrl: 'https://facebook.com/bob',
      instagramUrl: 'https://instagram.com/bob',
      twitterUrl: 'https://twitter.com/bob',
    },
    {
      name: 'Charlie',
      role: 'Manager',
      imgSrc: '/member3.png',
      facebookUrl: 'https://facebook.com/charlie',
      instagramUrl: 'https://instagram.com/charlie',
      twitterUrl: 'https://twitter.com/charlie',
    },
  ];

  return (
    <Box py={4} >
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamMember {...member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;

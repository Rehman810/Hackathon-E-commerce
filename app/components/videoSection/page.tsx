import { Box } from '@mui/material';

const VideoSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: "50px",
        marginBottom: "50px"
      }}
    >
      <Box
        component="img"
        src="/videCard.png" // Your image path
        alt="Video"
        sx={{
          maxWidth: '100%', // Ensures image is responsive and scales properly
          maxHeight: '100%', // Ensures image fits within the container
          objectFit: 'contain', // Maintain aspect ratio while fitting within the container
        }}
      />
    </Box>
  );
};

export default VideoSection;

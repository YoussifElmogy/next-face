import {
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Chip,
} from '@mui/material'

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                borderRadius: 3,
                background: 'linear-gradient(45deg, #1a3741, #366771)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                About Us Image
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Chip label="About Us" color="primary" sx={{ mb: 2 }} />
            <Typography variant="h2" gutterBottom color="primary">
              Shaping Tomorrow's Technology
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Next Face is a pioneering organization dedicated to advancing technology and innovation. 
              We bring together brilliant minds, cutting-edge research, and transformative ideas to 
              create solutions that shape the future.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
              Our community consists of researchers, developers, entrepreneurs, and visionaries who 
              are passionate about making a positive impact on the world through technology.
            </Typography>
            <Button variant="contained" size="large" color="primary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection 
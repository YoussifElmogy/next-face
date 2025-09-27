import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material'

const MissionVisionSection = () => {
  return (
    <Box id="mission" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Mission & Vision" color="primary" sx={{ mb: 2 }} />
          <Typography variant="h2" gutterBottom color="primary">
            Our Purpose & Future
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
                  To democratize access to cutting-edge technology and foster innovation that solves 
                  real-world problems. We strive to create an inclusive environment where diverse 
                  perspectives drive breakthrough solutions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary' }}>
                  To be the leading catalyst for technological advancement, creating a future where 
                  innovation serves humanity's greatest needs and aspirations. We envision a world 
                  where technology enhances human potential.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MissionVisionSection 
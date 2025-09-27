import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material'

const WhyJoinSection = () => {
  const reasons = [
    {
      title: 'Innovation Hub',
      description: 'Access to cutting-edge technology and research facilities that push the boundaries of what\'s possible.',
    },
    {
      title: 'Expert Network',
      description: 'Connect with industry leaders, researchers, and innovators who share your passion for technology.',
    },
    {
      title: 'Career Growth',
      description: 'Accelerate your professional development with mentorship, training, and real-world project experience.',
    },
    {
      title: 'Global Impact',
      description: 'Contribute to projects that make a meaningful difference in communities around the world.',
    },
    {
      title: 'Collaborative Environment',
      description: 'Work in a supportive, diverse environment that values creativity and collaborative problem-solving.',
    },
    {
      title: 'Future-Ready Skills',
      description: 'Develop expertise in emerging technologies that will define the next decade of innovation.',
    },
  ]

  return (
    <Box id="join" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Why Join Us" color="primary" sx={{ mb: 2 }} />
          <Typography variant="h2" gutterBottom color="primary">
            Be Part of Something Extraordinary
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {reasons.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhyJoinSection 
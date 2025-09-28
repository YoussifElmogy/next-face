import {
  Typography,
  Container,
  Box,
  Grid,
  IconButton,
  Divider,
} from '@mui/material'
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material'
import nextFaceLogo from '../assets/next-face.png'

const Footer = () => {
  const socialMedia = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  ]

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <img 
                src={nextFaceLogo} 
                alt="Next Face Logo" 
                style={{ 
                  height: 40, 
                  marginRight: 16, 
                  filter: 'brightness(0) invert(1)' 
                }} 
              />

            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              Shaping the future through innovation, collaboration, and cutting-edge technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 2, opacity: 0.8 }} />
              <Typography variant="body2">info@nextface.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 2, opacity: 0.8 }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialMedia.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8 }}>
          © 2025 Next Face. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer 
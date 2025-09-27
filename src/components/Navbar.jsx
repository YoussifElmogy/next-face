import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material'
import nextFaceLogo from '../assets/next-face.png'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'primary.main', boxShadow: '0 2px 10px rgba(26, 55, 65, 0.1)' }}>
      <Toolbar sx={{margin:'16px'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={nextFaceLogo} alt="Next Face Logo" style={{ height: 40, marginRight: 16 }} />
   
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" onClick={() => scrollToSection('about')}>
            About Us
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('mission')}>
            Mission & Vision
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('join')}>
            Why Join Us
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: 'secondary.main', 
              color: 'primary.main',
              '&:hover': { bgcolor: 'secondary.light' }
            }}
            onClick={() => scrollToSection('register')}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar 
// src/pages/RegisterPage.jsx
import { Box, Container, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RegisterPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ py: 20 }}>
        <Typography
          variant="h2"
          color="primary"
          gutterBottom
          sx={{ textAlign: 'center' }}
        >
          Register Screen
        </Typography>

      </Container>
    </Box>
  )
}

export default RegisterPage

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Typography,
  Container,
  Button,
  Box,
  Grid,
  Paper,
} from '@mui/material'
import {
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material'

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const navigate = useNavigate()
  // Countdown to December 3, 2025
  useEffect(() => {
    const targetDate = new Date('2025-12-03T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, rgba(26, 55, 65, 0.8) 0%, rgba(54, 103, 113, 0.8) 50%, rgba(130, 182, 184, 0.8) 100%),
          url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: 16,
        pb:16
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center" >
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <Typography
              variant="h3"
              sx={{
                mb: { xs: 3, md: 4 },
                opacity: 0.9,
                lineHeight: 1.6,
                textAlign: 'center',
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
              }}
            >
              Join us for an extraordinary event that will shape the future of innovation and technology.
            </Typography>
            
            {/* Event Details */}
            <Box display="flex" gap={4} sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CalendarIcon sx={{ mr: 2, color: '#82b6b8' }} />
                                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
                >December 3, 2025</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationIcon sx={{ mr: 2, color: '#82b6b8' }} />
                                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
                >Innovation Center, Tech District</Typography>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#82b6b8',
                  color: '#1a3741',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  '&:hover': { bgcolor: '#b3d4d6' },
                }}
                onClick={() => navigate('/register')}

              >
                Register Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<CalendarIcon />}
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Innovation+Summit+2025&dates=20251203T090000Z/20251203T170000Z&details=Join+us+for+an+extraordinary+event+that+will+shape+the+future+of+innovation+and+technology.&location=Innovation+Center,+Tech+District"
                  target="_blank"
  rel="noopener noreferrer"
                sx={{
                  borderColor: '#82b6b8',
                  color: '#82b6b8',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  '&:hover': { borderColor: '#b3d4d6', color: '#b3d4d6' },
                }}
              >
                Add to Calendar
              </Button>
            </Box>
          </Grid>

          {/* Countdown Timer */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 3,
              }}
            >
               <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: '#82b6b8',
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                Event Countdown
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item) => (
                  <Grid item xs={3} key={item.label}>
                    <Box
                      sx={{
                        p: { xs: 1, sm: 2 },
                        borderRadius: 2,
                        background: 'rgba(130, 182, 184, 0.2)',
                      }}
                    >
                       <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem' },
                        }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#82b6b8',
                          textTransform: 'uppercase',
                          fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.9rem' },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection 
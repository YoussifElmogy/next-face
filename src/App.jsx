import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import MissionVisionSection from './components/MissionVisionSection'
import WhyJoinSection from './components/WhyJoinSection'
import Footer from './components/Footer'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <WhyJoinSection />
      <Footer />
    </Box>
  )
}

export default App

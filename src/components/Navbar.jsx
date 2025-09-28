import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import nextFaceLogo from '../assets/next-face.png'

const navItems = [
  { label: 'About Us', id: 'about' },
  { label: 'Mission & Vision', id: 'mission' },
  { label: 'Why Join Us', id: 'join' },
]

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'primary.main',
          boxShadow: '0 2px 10px rgba(26, 55, 65, 0.1)',
        }}
      >
        <Toolbar sx={{ margin: '16px' }}>
          {/* Mobile Hamburger Icon on the LEFT */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src={nextFaceLogo}
              alt="Next Face Logo"
              style={{ height: 40, marginRight: 16 }}
            />
          </Box>

          {/* Desktop Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Register Button stays on the RIGHT */}
          <Box sx={{ ml: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'secondary.main',
                color: 'primary.main',
                '&:hover': { bgcolor: 'secondary.light' },
              }}
              onClick={() => scrollToSection('register')}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer on the LEFT */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            bgcolor: '#f9f9f9',
            height: '100%',
          }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#eeeeee',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: { color: 'primary.main', fontWeight: 500 },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar

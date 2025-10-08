import {
  Typography,
  Container,
  Chip,
  Box,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Instagram as InstagramIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import nextFaceLogo from "../assets/next-face.png";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <img
                src={nextFaceLogo}
                alt="Next Face Logo"
                style={{
                  height: 40,
                  marginRight: 16,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              Shaping the future through innovation, collaboration, and
              cutting-edge technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon sx={{ mr: 2, opacity: 0.8 }} />
              <Typography variant="body2">info@nextfaceofficial.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 2, opacity: 0.8 }} />
              <Typography
                variant="body2"
                component="a"
                href="tel:+201153443350"
                sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                +20 1153443350
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Follow Us
            </Typography>
            <Chip
              icon={<InstagramIcon />}
              label="Instagram"
              component="a"
              href="https://www.instagram.com/next.faceofficial/?igsh=MTE4dGdwaHA0bng4Zg%3D%3D#"
              clickable
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                borderRadius: "8px",
                "& .MuiChip-icon": {
                  color: "white", // make icon white
                },
                bgcolor: "rgba(255, 255, 255, 0.1)", // optional background
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
              }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.8 }}>
          © 2025 Next Face. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

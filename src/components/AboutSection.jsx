import { Typography, Container, Box, Grid, Chip } from "@mui/material";

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Side Image Box */}

          {/* Right Side Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" ,mb: { xs: 4, md: 6 } }} >
                        <Typography
            variant="h2"
            gutterBottom
            color="primary"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 700,
            }}
          >
            About us
          </Typography>
          <Box
              sx={{
                height: { xs: 250, sm: 300, md: 400 },
                borderRadius: 3,
                background: "linear-gradient(45deg, #1a3741, #366771)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                p: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
                }}
              >
                About Us Image
              </Typography>
            </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                color: "#366771",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              NEXT FACE is a groundbreaking symposium redefining the future of
              beauty, wellness, culture, and design while unlocking new
              investment opportunities in the aesthetic industry. Taking place in
              December 2025 in Soma Bay, Hurghada, this prestigious event will
              bring together world-renowned experts, global brands, influencers,
              investors, and creatives from across the MENA region and beyond.
              Through visionary panels, hands-on workshops, immersive brand
              activations, and exclusive lifestyle experiences, NEXT FACE goes
              beyond a symposium—it is a movement to establish Egypt as the
              region’s premier hub for aesthetic innovation, medical tourism, and
              cultural excellence on the global stage.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

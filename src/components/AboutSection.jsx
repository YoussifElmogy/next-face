import { Typography, Container, Box, Grid, Chip } from "@mui/material";
import AboutImg from "../assets/About.jpg";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Side Image Box */}

          {/* Right Side Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h2"
                gutterBottom
                color="primary"
                sx={{
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                }}
              >
                About Us
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)", // stronger shadow
                  border: "3px solid transparent",
                  background: "linear-gradient(135deg, #ffffff, #dfe9f3)", // soft gradient border
                  p: "3px", // spacing for gradient border
                }}
              >
                <Box
                  component="img"
                  src={AboutImg}
                  alt="Why Join Us"
                  sx={{
                    width: "100%",
                    height: "600px",
                    objectFit: "cover",
                    borderRadius: 3,
                    transition: "transform 0.5s ease, filter 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      filter: "brightness(1.1)", // brightens image slightly
                    },
                  }}
                />

                {/* Subtle overlay on hover */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />

                {/* Optional caption text */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "white",
                    fontWeight: 500,
                    fontSize: "1rem",
                    textShadow: "0px 2px 6px rgba(0,0,0,0.6)",
                  }}
                ></Box>
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
              investment opportunities in the aesthetic industry. Taking place
              in December 2025 in Soma Bay, Hurghada, this prestigious event
              will bring together world-renowned experts, global brands,
              influencers, investors, and creatives from across the MENA region
              and beyond. Through visionary panels, hands-on workshops,
              immersive brand activations, and exclusive lifestyle experiences,
              NEXT FACE goes beyond a symposium—it is a movement to establish
              Egypt as the region’s premier hub for aesthetic innovation,
              medical tourism, and cultural excellence on the global stage.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

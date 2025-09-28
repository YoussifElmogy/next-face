import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const MissionVisionSection = () => {
  return (
    <Box id="mission" sx={{ py: { xs: 6, md: 10 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Header */}
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
            Mission & Vision
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
                Mission and vision image
              </Typography>
            </Box>
            </Box>

        {/* Mission & Vision Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", p: { xs: 2, md: 3 } }}>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  color="#1a3741 "
                  sx={{
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                    color: "#366771",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  At NEXT FACE, our mission is to redefine the conversation
                  around beauty and aesthetics by blending wellness, culture,
                  design, and investment into one groundbreaking platform. We
                  strive to create an environment where brands, experts,
                  creatives, and investors can connect, share ideas, and spark
                  innovation through immersive experiences that inspire growth,
                  collaboration, and transformation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", p: { xs: 2, md: 3 } }}>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  color="#1a3741 "
                  sx={{
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
                    color: "#366771",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Our vision is to position NEXT FACE as the world’s most
                  influential aesthetic symposium — a place where trends are
                  born, partnerships are forged, and the future of beauty and
                  wellness is shaped. We aim to set new global standards by
                  bringing together the brightest minds and boldest voices to
                  push the boundaries of creativity, science, and lifestyle in
                  the aesthetic field.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionVisionSection;

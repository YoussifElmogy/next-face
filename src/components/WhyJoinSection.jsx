import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const WhyJoinSection = () => {
  const reasons = [
    {
      description:
        "Stay Ahead with the Latest Aesthetic Innovations, Trends,and Technologies.",
    },
    {
      description:
        "Build powerful connections with experts and peers to grow your career and business",
    },
    {
      description:
        "Enhance your skills through workshops and insights fromindustry leaders",
    },
    {
      description:
        "Contribute to projects that make a meaningful difference in communities around the world.",
    },
    {
      description: "Earn CME credits to advance your qualifications.",
    },
    {
      description:
        "Experience exclusive dinners, networking sessions, and social events throughout the conference.",
    },
  ];

  return (
    <Box id="join" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
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
            Why Join Us
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
                Why Join us image
              </Typography>
            </Box>
            </Box>
        <Grid container spacing={4}>
          {reasons.map((item, index) => (
            <Grid item size={{ xs: 12 }} key={index}>
              <Card sx={{ height: "100%", p: 3, textAlign: "left", padding:4 }}>
                <CardContent sx={{padding:0, paddingBottom:'0px !important'}}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                      lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                      fontSize: { xs: "1rem", sm: "1.15rem"}, // responsive scaling
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyJoinSection;

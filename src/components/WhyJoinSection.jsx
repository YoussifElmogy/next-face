import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import TrendSettersIcon from "../assets/1.svg";
import PowerCycleIcon from "../assets/2.svg";
import GrowthLabIcon from "../assets/3.svg";
import CMEIcon from "../assets/4.svg";
import EliteEveningsIcon from "../assets/5.svg";
import whyJoinImg from "../assets/why join.jpg";

const WhyJoinSection = () => {
  const reasons = [
    {
      icon: TrendSettersIcon,
      title: "Trendsetters",
      description:
        "Stay Ahead with the Latest Aesthetic Innovations, Trends,and Technologies.",
    },
    {
      icon: PowerCycleIcon,
      title: "Power Cycle",
      description:
        "Build powerful connections with experts and peers to grow your career and business",
    },
    {
      icon: EliteEveningsIcon,
      title: "Elite Evenings",
      description:
        "Experience exclusive dinners, networking sessions, and social events throughout the conference.",
    },
    {
      icon: GrowthLabIcon,
      title: "Growth Lab",
      description:
        "Enhance your skills through workshops and insights fromindustry leaders",
    },
    {
      icon: CMEIcon,
      title: "CME",
      description: "Earn CME credits to advance your qualifications.",
    },
  ];

  return (
    <Box id="join" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
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
            Why Join Us
          </Typography>

          {/* ✅ Replaced gradient box with actual image */}
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
              src={whyJoinImg}
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

        <Grid
          container
          spacing={7}
          justifyContent="center"
          alignItems="stretch"
        >
          {reasons.map((item, idx) => (
            <Grid item key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.title}
                    sx={{
                      width: { xs: 72, sm: 100, md: 120 },
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      textAlign: "center",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                      hyphens: "auto",
                      maxWidth: 280,
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

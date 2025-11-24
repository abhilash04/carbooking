import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import PointOfSaleRoundedIcon from "@mui/icons-material/PointOfSaleRounded";

const ACCENT_ORANGE = "#F39C12";
const BRAND_BLUE = "#2B22C9";
const NUM_SIZE = 56; // diameter of the step circle

const steps = [
  {
    number: 1,
    title: "Choose Your Car",
    icon: <TouchAppRoundedIcon sx={{ fontSize: 40, color: BRAND_BLUE }} />,
    text:
      "Browse through our vehicle options and select the one that best fits your trip.",
  },
  {
    number: 2,
    title: "Customize Your Ride",
    icon: <EditNoteRoundedIcon sx={{ fontSize: 40, color: BRAND_BLUE }} />,
    text:
      "Add extra features, pick your preferences, and set your schedule effortlessly.",
  },
  {
    number: 3,
    title: "Confirm and Pay",
    icon: <PointOfSaleRoundedIcon sx={{ fontSize: 40, color: BRAND_BLUE }} />,
    text:
      "Complete your secure payment and get instant booking confirmation.",
  },
];

function Work() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 4}, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", mb: { xs: 4, md: 1 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                borderRadius: "50%",
                bgcolor: "#FFEAD0",
                color: ACCENT_ORANGE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                svg: { fontSize: 16 },
                
              }}
            >
              <LocalOfferRoundedIcon />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 800, color: ACCENT_ORANGE, letterSpacing: 1 }}>
              HOW IT WORK
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{ fontWeight: 900, fontSize: { xs: 24, sm: 30, md: 36 }, color: "#1c1c28", lineHeight: 1.2 ,mb:2}}
          >
            Book Your Ride in 3 Simple Steps
          </Typography>

          <Typography sx={{ maxWidth: 650, color: "text.secondary", fontSize: { xs: 16, sm: 17 }, lineHeight: 1.5, }}>
            Fast, easy, and designed to get you on the road in minutes.
          </Typography>
        </Stack>

        {/* Steps */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {steps.map((step) => (
            <Grid key={step.number} item xs={12} md={4}>
              <Box sx={{ position: "relative", pb: `${NUM_SIZE / 2 + 8}px` }}>
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: 2,
                    textAlign: "left",
                    width: "100%",
                    minHeight: 250,
                    transition: "all 0.3s ease",
                    overflow: "visible", // allow the circle to poke out
                    ":hover": { boxShadow: 5, transform: "translateY(-4px)" },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Stack spacing={2}>
                      {step.icon}
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: 18, sm: 20 }, color: "#1c1c28" }}>
                        {step.title}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: 16, lineHeight: 1.8 }}>
                        {step.text}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Overlapping number: half inside, half outside */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: "4%",
                    transform: "translateX(-50%)",
                    width: NUM_SIZE,
                    height: NUM_SIZE,
                    borderRadius: "50%",
                    bgcolor: ACCENT_ORANGE,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                    outline: "4px solid #fff", // crisp ring where it touches the card
                    zIndex: 2,
                  }}
                >
                  {step.number}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Work;
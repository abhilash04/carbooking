import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  Stack,
  ButtonBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import bg from "../../src/assets/pricing-bg.jpg";
import sedan from "../../src/assets/sedan.png";
import tavera from "../../src/assets/tavera.png";
import innova from "../../src/assets/innova.png";
import crysta from "../../src/assets/innova_crysta.png";
import tt from "../../src/assets/tt.png";
import luxury from "../../src/assets/luxury.png";
import miniBus from "../../src/assets/min_bus.png";
import bus from "../../src/assets/bus.png";
import suv from "../../src/assets/bus.png"; // replace with real SUV image if available

/* =========================================================
   DISTINCT DATA PER SECTION
   ========================================================= */
const AIRPORT_CARS = [
  { id: "ap-1", title: "Sedan", charges: "₹2,199/-", limit: "8 Hrs/80 Km", ac: "AC", pax: "4+1", bg, img: sedan },
  { id: "ap-2", title: "Tavera", charges: "₹2,699/-", limit: "8 Hrs/80 Km", ac: "Non-AC", pax: "8+1", bg, img: tavera },
  { id: "ap-3", title: "Innova", charges: "₹2,989/-", limit: "8 Hrs/80 Km", ac: "AC", pax: "7+1", bg, img: innova },
  { id: "ap-4", title: "Innova Crysta", charges: "₹3,249/-", limit: "8 Hrs/80 Km", ac: "AC", pax: "6+1", bg, img: crysta },
  { id: "ap-5", title: "Tempo Traveller", charges: "₹3,849/-", limit: "8 Hrs/80 Km", ac: "Both", pax: "12+1", bg, img: tt },
  { id: "ap-6", title: "Mini Bus", charges: "₹3,999/-", limit: "8 Hrs/80 Km", ac: "Both", pax: "21+1", bg, img: miniBus },
  { id: "ap-7", title: "Bus", charges: "₹8,009/-", limit: "Outright", ac: "Both", pax: "50+1", bg, img: bus },
  { id: "ap-8", title: "Luxury", charges: "₹4,909/-", limit: "8 Hrs/80 Km", ac: "AC", pax: "4+1", bg, img: luxury },
  { id: "ap-9", title: "SUV", charges: "₹2,609/-", limit: "8 Hrs/80 Km", ac: "AC", pax: "6+1", bg, img: suv },
];

const CITY_CARS = [
  { id: "ct-1", title: "Sedan", charges: "₹1,909/-", limit: "35 Km", ac: "AC", pax: "4+1", bg, img: sedan },
  { id: "ct-2", title: "SUV", charges: "₹2,409/-", limit: "35 Km", ac: "AC", pax: "6+1", bg, img: suv },
  { id: "ct-3", title: "Innova", charges: "₹1,969/-", limit: "35 Km", ac: "AC", pax: "7+1", bg, img: innova },
  { id: "ct-4", title: "Tempo Traveller", charges: "₹3,409/-", limit: "35 Km", ac: "Both", pax: "12+1", bg, img: tt },
  { id: "ct-5", title: "Luxury", charges: "₹3,909/-", limit: "35 Km", ac: "AC", pax: "4+1", bg, img: luxury },
  { id: "ct-6", title: "Mini Bus", charges: "₹3,809/-", limit: "35 Km", ac: "Both", pax: "21+1", bg, img: miniBus },
  { id: "ct-7", title: "Innova Crysta", charges: "₹2,409/-", limit: "35 Km", ac: "AC", pax: "6+1", bg, img: crysta },
  { id: "ct-8", title: "Tavera", charges: "₹1,909/-", limit: "35 Km", ac: "Non-AC", pax: "8+1", bg, img: tavera },
  { id: "ap-7", title: "Bus", charges: "₹8,009/-", limit: "Outright", ac: "Both", pax: "50+1", bg, img: bus },

];

const OUTSTATION_CARS = [
  { id: "os-1", title: "Sedan", charges: "₹12/km", limit: "Outstation", ac: "AC", pax: "4+1", bg, img: sedan },
  { id: "os-2", title: "SUV", charges: "₹16/km", limit: "Outstation", ac: "AC", pax: "6+1", bg, img: suv },
  { id: "os-3", title: "Innova Crysta", charges: "₹18/km", limit: "Outstation", ac: "AC", pax: "6+1", bg, img: crysta },
  { id: "os-4", title: "Tempo Traveller", charges: "₹24/km", limit: "Outstation", ac: "Both", pax: "12+1", bg, img: tt },
  { id: "os-5", title: "Mini Bus", charges: "₹28/km", limit: "Outstation", ac: "Both", pax: "21+1", bg, img: miniBus },
  { id: "os-6", title: "Bus", charges: "₹34/km", limit: "Outstation", ac: "Both", pax: "50+1", bg, img: bus },
  { id: "os-7", title: "Luxury", charges: "₹30/km", limit: "Outstation", ac: "AC", pax: "4+1", bg, img: luxury },
  { id: "ct-3", title: "Innova", charges: "₹1,969/-", limit: "35 Km", ac: "AC", pax: "7+1", bg, img: innova },
  { id: "ct-8", title: "Tavera", charges: "₹1,909/-", limit: "35 Km", ac: "Non-AC", pax: "8+1", bg, img: tavera },

];

/* ---------- Specs Row ---------- */
const SpecsRow = ({ label, value }) => (
  <Stack direction="row" justifyContent="space-between" sx={{ py: 0.4 }}>
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary" }}>
      {value}
    </Typography>
  </Stack>
);

/* ---------- Reusable grid ---------- */
const CarsGrid = ({ cars, isMobile }) => (
  <Grid container spacing={isMobile ? 2 : 3}>
    {cars.map((item) => (
      <Grid key={item.id} item xs={12} sm={6} md={4}>
        <Card
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "translateY(-5px)" },
            height: isMobile ? 390 : 390, // 🔹 Adjust card height
            width: "95%",
            mx: "auto",
          }}
        >
          {/* Diagonal Right → Left Background */}
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={item.bg}
              alt={item.title}
              sx={{ height: 120, objectFit: "cover", filter: "saturate(0.9)" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "65%",
                  bgcolor: "#ffffff",
                  clipPath: "polygon(0 100%, 0 0, 100% 100%)",
                },
              }}
            />
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                position: "absolute",
                bottom: -36,
                left: "50%",
                transform: "translateX(-50%)",
                width: isMobile ? 200 : 250,
                maxWidth: "95%",
                zIndex: 2,
                filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.25))",
              }}
            />
          </Box>

          <CardContent sx={{ pt: 7 }}>
            <Typography align="center" sx={{ fontWeight: 700, mb: 1 }} variant="subtitle1">
              {item.title}
            </Typography>

            {/* Specs (no divider) */}
            <Box sx={{ px: 2 }}>
              <SpecsRow label="Charges:" value={item.charges} />
              <SpecsRow label="Limit:" value={item.limit} />
              <SpecsRow label="AC:" value={item.ac} />
              <SpecsRow label="Passengers:" value={item.pax} />
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#F59E0B",
                color: "#111827",
                fontWeight: 800,
                borderRadius: 1.5,
                py: 1.1,
                "&:hover": { bgcolor: "#d97706" },
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

/* ---------- Section Switch with short dividers ---------- */
const SectionSwitch = ({ value, onChange, isMobile }) => {
  const items = [
    { key: "airport", label: "Airport Packages" },
    { key: "city", label: "City Packages" },
    { key: "outstation", label: "Outstation Packages" },
  ];

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ mb: isMobile ? 2 : 3 }}
    >
      {items.map((it, idx) => {
        const active = value === it.key;
        const isLast = idx === items.length - 1;
        return (
          <Stack key={it.key} direction="row" alignItems="center">
            <ButtonBase onClick={() => onChange(it.key)} sx={{ px: 1.5, borderRadius: 1 }}>
              <Typography
                sx={{
                  fontWeight: active ? 700 : 600,
                  color: active ? "text.primary" : "text.disabled",
                  transition: "color .2s",
                  fontSize: isMobile ? 14 : 18,
                }}
              >
                {it.label}
              </Typography>
            </ButtonBase>

            {!isLast && (
              <Box
                sx={{
                  width: { xs: 40, sm: 56, md: 72 },
                  height: 2,
                  borderRadius: 2,
                  mx: { xs: 1.5, md: 2.5 },
                  bgcolor: "divider",
                  opacity: 0.9,
                }}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

/* ---------- Main Component ---------- */
const CarModels = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [section, setSection] = React.useState("city");

  const renderGrid = () => {
    switch (section) {
      case "airport":
        return <CarsGrid cars={AIRPORT_CARS} isMobile={isMobile} />;
      case "city":
        return <CarsGrid cars={CITY_CARS} isMobile={isMobile} />;
      case "outstation":
        return <CarsGrid cars={OUTSTATION_CARS} isMobile={isMobile} />;
      default:
        return null;
    }
  };

  const subtitle =
    section === "airport"
      ? "Choose a package to see what fits your needs the best."
      : section === "city"
      ? "Comfortable rides tailored for city travel and daily needs."
      : "Reliable vehicles for long trips and intercity journeys.";

  return (
    <Box sx={{ bgcolor: "#f5f6f8",py: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center",}}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            /// Lets Go With Us!
          </Typography>
          <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 800 }}>
            Choose Your Package to Ride!
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mt: 1, maxWidth: 620, mx: "auto" }}
          >
            {subtitle}
          </Typography>
        </Box>

        <SectionSwitch value={section} onChange={setSection} isMobile={isMobile} />
        {renderGrid()}
      </Container>
    </Box>
  );
};

export default CarModels;


































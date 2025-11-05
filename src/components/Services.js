// Services.jsx
import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import ConnectingAirportsRoundedIcon from "@mui/icons-material/ConnectingAirportsRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const ACCENT_ORANGE = "#F39C12";
const BRAND_BLUE = "#2B22C9";

const items = [
  {
    title: "One-Way Rentals",
    icon: <DirectionsCarRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Standar & Luxury Car Rentals",
    icon: <WorkspacePremiumRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Corporate Rentals",
    icon: <CorporateFareRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Electric Car Rentals",
    icon: <ElectricBoltRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Airport & City Transfers",
    icon: <ConnectingAirportsRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Rent with Driver Service",
    icon: <PersonPinCircleRoundedIcon />,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

function ServiceCard({ title, text, icon }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        border: "1px solid #ECECF2",
        bgcolor: "#fffE9F4FF",
        ":hover": { boxShadow: 4, transform: "translateY(-2px)" },
        transition: "all .2s ease",
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack direction="row" spacing={2.25} alignItems="flex-start">
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 1.5,
              bgcolor: "#FFF6E5",
              color: ACCENT_ORANGE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              svg: { fontSize: 26 },
            }}
          >
            {icon}
          </Box>

          <Stack spacing={1}>
            <Typography
              sx={{ fontWeight: 800, fontSize: { xs: 16, sm: 17 }, color: "#1c1c28" }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "text.secondary", lineHeight: 1.7 }}>
              {text}
            </Typography>

            <MuiLink
              href="#"
              underline="none"
              sx={{
                mt: 0.5,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontWeight: 700,
                fontSize: 13,
                color: BRAND_BLUE,
                "&:hover": { color: "#1f189f" },
              }}
            >
              LEARN MORE <ArrowRightAltRoundedIcon sx={{ fontSize: 18 }} />
            </MuiLink>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function Services() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#F6F6FE",             
        py: { xs: 6, md: 8 },
        borderTop: "1px solid #e7e7f3",
        borderBottom: "1px solid #e7e7f3",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                width: 26,
                height: 26,
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
              OUR SERVICES
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{ fontWeight: 900, fontSize: { xs: 22, sm: 28, md: 32 }, color: "#1c1c28" }}
          >
            Complete Solutions for Your Vehicle Needs
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              color: "text.secondary",
              fontSize: { xs: 14, sm: 15 },
              lineHeight: 1.8,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Divider sx={{ width: 80, borderColor: "#e0e0f0" }} />
        </Stack>

        {/* Cards */}
        <Grid container spacing={2.5}>
          {items.map((it) => (
            <Grid key={it.title} item xs={12} md={6}>
              <ServiceCard title={it.title} text={it.text} icon={it.icon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default Services;
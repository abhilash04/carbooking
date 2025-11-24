
// ChooseUs.jsx
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const BRAND_BLUE = "#2B22C9";
const ACCENT_ORANGE = "#F39C12";

function Tile({
  icon,
  title,
  text,
  variant = "light", 
}) {
  const isOrange = variant === "orange";
  const isBlue = variant === "blue";

  return (
    <Card
      elevation={isOrange || isBlue ? 6 : 2}
      sx={{
        borderRadius: 2,
        bgcolor: isOrange ? ACCENT_ORANGE : isBlue ? BRAND_BLUE : "#fff",
        color: isOrange || isBlue ? "#fff" : "inherit",
        boxShadow:
          isOrange || isBlue ? "0 10px 24px rgba(0,0,0,.18)" : undefined,
        height: "100%",
        textAlign: "left",
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 2,
            bgcolor: isOrange || isBlue ? "rgba(255,255,255,.18)" : "#F5F6FF",
            color: isOrange || isBlue ? "#fff" : BRAND_BLUE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            svg: { fontSize: 34 },
          }}
        >
          {icon}
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: 16, sm: 18 },
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        {/* Description text */}
        <Typography
          sx={{
            opacity: isOrange || isBlue ? 0.95 : 0.8,
            fontSize: 14,
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          {text}
        </Typography>

        {/* Learn more link */}
        <MuiLink
          href="#"
          underline="none"
          sx={{
            mt: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontWeight: 700,
            fontSize: 13,
            color: isOrange || isBlue ? "#fff" : BRAND_BLUE,
            opacity: isOrange || isBlue ? 0.9 : 1,
            "&:hover": { opacity: 1 },
          }}
        >
          LEARN MORE <ArrowRightAltRoundedIcon sx={{ fontSize: 18 }} />
        </MuiLink>
      </CardContent>
    </Card>
  );
}

function ChooseUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("isMobile:", isMobile); 

  return (
    <Box component="section" sx={{ mt:{ xs: 4, md: 15 },py: 4, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack
          alignItems="center"
          spacing={2.25}
          sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}
        >
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
            <Typography
              variant="body2"
              sx={{ fontWeight: 800, color: ACCENT_ORANGE, letterSpacing: 1 }}
            >
              WHY CHOOSE US
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 24, sm: 30, md: 34 },
              color: "#1c1c28",
              lineHeight: 1.25,
            }}
          >
            Delivering Tours With Trust, 
            <br />
            Comfort, And Consistency.
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              color: "text.secondary",
              fontSize: { xs: 15, sm: 17 },
              lineHeight: 1.8,
            }}
          >
            Designed to give you a smoother, safer, and more comfortable travel experience.
          </Typography>
        </Stack>

        {/* Grid layout */}
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={5}>
            <Tile
              variant="orange"
              title="Quick and Easy Booking"
              text="Book your ride effortlessly with a fast, user-friendly booking process."
              icon={<AssignmentTurnedInRoundedIcon />}
            />
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Tile
              title="Well-Maintained Cars"
              text="Enjoy safe, comfortable travel in vehicles that are regularly cleaned and serviced."
              icon={<DirectionsCarRoundedIcon />}
            />
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Tile
              title="Flexible Pickup and Return"
              text="Pick your preferred pickup and drop-off locations and travel on your schedule."
              icon={<AutorenewRoundedIcon />}
            />
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Tile
              title="Trusted Technicians"
              text="Your vehicle is cared for by trained professionals who ensure top performance."
              icon={<VerifiedRoundedIcon />}
            />
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Tile
              title="All-in-One Services"
              text="Get everything you need - from rentals to transfers - conveniently in one place."
              icon={<BuildCircleRoundedIcon />}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <Tile
              variant="blue"
              title="Customer-Centered Service"
              text="Experience helpful, responsive support focused entirely on your comfort."
              icon={<HeadsetMicRoundedIcon />}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default ChooseUs;
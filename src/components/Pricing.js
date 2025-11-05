// Pricing.jsx
import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import ElectricCarRoundedIcon from "@mui/icons-material/ElectricCarRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

const BG_DARK = "#0E0E0E";
const BG_DARKER = "#070707";
const YELLOW = "#F7B500"; // Accent
const TEXT_MUTED = "rgba(255,255,255,0.8)";
const BORDER_DIM = "rgba(255,255,255,0.15)";

function Row({ label, price }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ fontSize: 13, color: TEXT_MUTED }}
    >
      <Typography sx={{ fontSize: 13 }}>{label}</Typography>
      <Typography sx={{ fontSize: 13, color: "#fff" }}>${price}</Typography>
    </Stack>
  );
}

function PlanCard({
  title,
  icon,
  items,
  highlight = false,
  note = "It is a long established fact that a page when looking at its layout",
}) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 2,
        bgcolor: highlight ? YELLOW : "rgba(255,255,255,0.02)",
        color: highlight ? "#1a1400" : "#fff",
        border: `1px solid ${highlight ? "rgba(0,0,0,0.15)" : BORDER_DIM}`,
        boxShadow: highlight
          ? "0 12px 28px rgba(247,181,0,0.35)"
          : "0 10px 24px rgba(0,0,0,0.25)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: highlight
            ? "0 16px 32px rgba(247,181,0,0.45)"
            : "0 14px 28px rgba(255,255,255,0.12)",
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={2}>
          {/* Icon */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 1.25,
              bgcolor: highlight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: highlight ? "#1a1400" : YELLOW,
              svg: { fontSize: 28 },
            }}
          >
            {icon}
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 18, md: 20 },
              letterSpacing: 0.2,
            }}
          >
            {title}
          </Typography>

          {/* Note */}
          <Typography
            sx={{
              fontSize: 12.5,
              lineHeight: 1.6,
              color: highlight ? "rgba(0,0,0,0.7)" : TEXT_MUTED,
              maxWidth: 360,
            }}
          >
            {note}
          </Typography>

          <Divider
            sx={{
              my: 1.5,
              borderColor: highlight ? "rgba(0,0,0,0.12)" : BORDER_DIM,
            }}
          />

          {/* Price rows */}
          <Stack spacing={1.1}>
            {items.map((it) => (
              <Row key={it.label} label={it.label} price={it.price} />
            ))}
          </Stack>

          {/* CTA */}
          <Box sx={{ mt: 2 }}>
            <Button
              fullWidth
              disableElevation
              endIcon={<NorthEastRoundedIcon />}
              sx={{
                borderRadius: 999,
                px: 2.5,
                py: 1.25,
                fontWeight: 800,
                bgcolor: highlight ? "#111" : "transparent",
                color: highlight ? "#fff" : "#fff",
                border: highlight
                  ? "none"
                  : `1.8px solid ${BORDER_DIM}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: YELLOW,
                  color: "#000",
                  border: "1.8px solid transparent",
                  boxShadow: "0 0 12px rgba(247,181,0,0.6)",
                },
              }}
            >
              Join Now
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Pricing() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        color: "#fff",
        // dark gradient background
        background: `radial-gradient(80% 80% at 50% 0%, rgba(247,181,0,0.12) 0%, rgba(0,0,0,0) 60%),
                     linear-gradient(180deg, ${BG_DARK} 0%, ${BG_DARKER} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* subtle vignette circles */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(400px 200px at 20% 60%, rgba(255,255,255,0.05), transparent 60%), radial-gradient(400px 200px at 80% 60%, rgba(255,255,255,0.05), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Stack alignItems="center" spacing={2} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="body2"
            sx={{ color: YELLOW, fontWeight: 700, letterSpacing: 0.6 }}
          >
            Pricing action
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, sm: 34, md: 40 },
              lineHeight: 1.2,
            }}
          >
            Time Quick and Easy to
            <br />
            Transportation
          </Typography>
        </Stack>

        {/* Plans */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <PlanCard
              title="Skyline Taxi"
              icon={<LocalTaxiRoundedIcon />}
              items={[
                { label: "Initial charge:", price: "02" },
                { label: "Additional Kilometer:", price: "02" },
                { label: "Per minutes stopped traffic:", price: "03" },
                { label: "Waiting Charge:", price: "01" },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PlanCard
              highlight
              title="Urban Cabs"
              icon={<AirportShuttleRoundedIcon />}
              items={[
                { label: "Initial charge:", price: "02" },
                { label: "Additional Kilometer:", price: "02" },
                { label: "Per minutes stopped traffic:", price: "03" },
                { label: "Waiting Charge:", price: "01" },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PlanCard
              title="TurboTaxi"
              icon={<ElectricCarRoundedIcon />}
              items={[
                { label: "Initial charge:", price: "02" },
                { label: "Additional Kilometer:", price: "02" },
                { label: "Per minutes stopped traffic:", price: "03" },
                { label: "Waiting Charge:", price: "01" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

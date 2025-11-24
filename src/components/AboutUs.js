import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import aboutus from "../../src/assets/bg-aboutus.png";


function useCountUpProgress({ duration = 1200, delay = 0 }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    let startedAt = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      if (!startedAt) startedAt = now;
      const elapsed = now - startedAt;
      const t = Math.min(1, elapsed / duration);
      setProgress(easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const start = () => (raf = requestAnimationFrame(tick));
    const timer = setTimeout(start, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [duration, delay]);

  return progress; // 0..1
}

/* --------- Animated Stat (reads shared progress) ---------- */
function AnimatedStatSync({
  label,
  end,
  progress,              // 0..1 from useCountUpProgress
  formatter,             // (n: number) => string
}) {
  // Ensure the final frame is the exact end value
  const raw = progress >= 1 ? end : end * progress;
  const display = formatter ? formatter(raw) : Math.round(raw).toString();

  return (
    <Stack spacing={0.75} sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography variant="body2" sx={{ opacity: 0.85, fontSize: { xs: 13, sm: 14 } }}>
        {label}
      </Typography>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: 30, sm: 36 },
          lineHeight: 1.1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {display}
      </Typography>
    </Stack>
  );
}

/* --------- Feature Card ---------- */
function FeatureCard({ title, text, icon, variant = "light" }) {
  const isAccent = variant === "accent";
  return (
    <Card
      elevation={isAccent ? 6 : 2}
      sx={{
        bgcolor: isAccent ? "#F39C12" : "#fff",
        color: isAccent ? "#fff" : "#000",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Box
            sx={{
              bgcolor: isAccent ? "rgba(255,255,255,0.15)" : "#FFF6E5",
              width: 44,
              height: 44,
              borderRadius: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>
          <Stack spacing={0.75}>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: 16, sm: 18 } }}>
              {title}
            </Typography>
            <Typography
              sx={{
                opacity: isAccent ? 0.95 : 0.8,
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.6,
              }}
            >
              {text}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function AboutUs() {
  // one clock for all three numbers; same duration so they end together
  const progress = useCountUpProgress({ duration: 1400, delay: 0 });

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 10 },
        color: "#fff",
        backgroundImage: `url(${aboutus})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle overlay grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          transform: "skewY(-4deg)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {/* label */}
              <Stack direction="row" alignItems="center" spacing={1} sx={{ opacity: 0.95 }}>
                <Box
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <LocalOfferRoundedIcon sx={{ fontSize: 16 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, color: "#F39C12", letterSpacing: 1 }}
                >
                  ABOUT US
                </Typography>
              </Stack>

              {/* headline */}
              <Typography
                component="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 30, sm: 36, md: 42 },
                  lineHeight: 1.2,
                }}
              >
                Easy Travel Services 
                <br />
                for Every Trip
              </Typography>

              {/* paragraph */}
              <Typography
                sx={{
                  maxWidth: 560,
                  opacity: 0.85,
                  fontSize: { xs: 14, sm: 15 },
                  lineHeight: 1.8,
                }}
              >
                Vihaan Travels is a trusted booking partner known for its experience, care, and commitment to giving every customer a smooth travel experience.
              </Typography>

              {/* Stats (all end at the same time) */}
              <Grid container alignItems="center" sx={{ mt: 1 }}>
                <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <AnimatedStatSync label="Since" end={2017} progress={progress} />
                </Grid>

                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderLeft: { md: "1px solid rgba(255,255,255,0.15)" },
                  }}
                >
                  <AnimatedStatSync
                    label="Satisfied Client"
                    end={2500}
                    progress={progress}
                    formatter={(n) => `${(n / 1000).toFixed(1)}K+`}
                  />
                </Grid>

                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    borderLeft: { md: "1px solid rgba(255,255,255,0.15)" },
                  }}
                >
                  <AnimatedStatSync
                    label="Total Vehicle"
                    end={500}
                    progress={progress}
                    formatter={(n) => `${Math.round(n)}+`}
                  />
                </Grid>
              </Grid>

              {/* CTA */}
              <Box>
                <Button
                  variant="contained"
                  disableElevation
                  endIcon={<KeyboardArrowRightRoundedIcon />}
                  sx={{
                    bgcolor: "#F39C12",
                    color: "#fff",
                    fontWeight: 800,
                    borderRadius: 1.5,
                    px: { xs: 2.5, sm: 3 },
                    py: { xs: 1, sm: 1.1 },
                    "&:hover": { bgcolor: "#DB8C07" },
                  }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <FeatureCard
                variant="accent"
                title="Easy Booking Process"
                text="Enjoy safe, comfortable trips in cars that are always well-maintained, thoroughly checked, and kept in excellent condition for every journey."
                icon={<AssignmentTurnedInRoundedIcon />}
              />
              <FeatureCard
                title="Clean and Reliable Vehicles"
                text="Enjoy safe, comfortable trips in cars that are always well-maintained and ready for any journey."
                icon={<LayersRoundedIcon />}
              />
              <FeatureCard
                title="Support Anytime You Need"
                text="Our dedicated team is available 24/7 to assist you at every stage of your journey, ensuring support no matter the time or situation."
                icon={<SupportAgentRoundedIcon />}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;

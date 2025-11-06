import * as React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import heroImg from "../assets/hero.png";

const ACCENT_GOLD = "#D2C067";

const HeroRoot = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "80vh",             // reduced section height
  minHeight: "500px",
  backgroundColor: "#000",    // fixes grey gap
  color: "#fff",
});

function Hero() {
  const wrapRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    const el = wrapRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate parallax motion
        const scrollProgress = 1 - rect.top / windowHeight;
        const clamped = Math.min(Math.max(scrollProgress, 0), 1);
        const translateY = (clamped - 0.5) * 200; // parallax range

        img.style.transform = `translate3d(-50%, calc(-50% + ${translateY}px), 0) scale(1.05)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <HeroRoot ref={wrapRef}>
      {/* Background Image */}
      <Box
        ref={imgRef}
        component="img"
        src={heroImg}
        alt="Hero Background"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, -50%, 0) scale(1.05)",
          width: "105%",      // ensures full width coverage
          height: "130%",     // taller to prevent gaps during scroll
          objectFit: "cover",
          pointerEvents: "none",
          userSelect: "none",
          willChange: "transform",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              letterSpacing: 1,
              fontSize: { xs: 20, sm: 28, md: 36 },
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            Comfort, Safety, and Speed – Everything for
            <br />
            Your Journey
          </Typography>

          <Button
            variant="contained"
            disableElevation
            endIcon={<KeyboardArrowRightRoundedIcon />}
            sx={{
              bgcolor: ACCENT_GOLD,
              color: "#111",
              fontWeight: 800,
              borderRadius: 0.75,
              px: { xs: 2.5, sm: 3 },
              py: { xs: 0.9, sm: 1.1 },
              "&:hover": { bgcolor: "#C8B65A" },
            }}
          >
            READ MORE
          </Button>
        </Stack>
      </Container>
    </HeroRoot>
  );
}

export default Hero;

import * as React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import heroImg from "../assets/hero.png";

const PARALLAX_STRENGTH = 0.25;
const ACCENT_GOLD = "#D2C067";

const HeroRoot = styled(Box)({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  color: "#fff",
  transition: "height 0.5s ease",
});

function Hero() {
  const wrapRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const [heroHeight, setHeroHeight] = React.useState(80);
  const rafRef = React.useRef(0);

  // Parallax
  React.useEffect(() => {
    const el = wrapRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const heroCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;
      const delta = heroCenter - viewportCenter;
      const translate = clamp(-delta * PARALLAX_STRENGTH, -100, 100);
      img.style.transform = `translate3d(-50%, calc(-50% + ${translate}px), 0) scale(1.05)`;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Decrease height on zoom out (never increase on zoom in)
  React.useEffect(() => {
    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const BASE_VH = 80;
    const MIN_VH = 40;
    const baseRatio = window.devicePixelRatio || 1;
    const baseWidth = window.innerWidth || 1;

    let raf = 0;
    const updateHeight = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const ratioScale = (window.devicePixelRatio || 1) / baseRatio;
        const widthScale = (window.innerWidth || 1) / baseWidth;
        // consider DPR scale; cap at 1 so we never grow on zoom in
        const zoomScale = Math.min(ratioScale, 1);
        const target = clamp(BASE_VH * zoomScale, MIN_VH, BASE_VH);
        setHeroHeight(target);
      });
    };

    window.addEventListener("resize", updateHeight);
    window.addEventListener("wheel", updateHeight, { passive: true });
    updateHeight();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("wheel", updateHeight);
    };
  }, []);

  return (
    <HeroRoot ref={wrapRef} sx={{ height: `${heroHeight}vh`, minHeight: "40vh" }}>
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
          width: "100%",
          height: "120%",
          objectFit: "cover",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />

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

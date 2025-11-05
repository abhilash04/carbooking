import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import footerBg from "../../src/assets/bg-footer.png";

const BRAND_BLUE = "#1B1783"; 
const BRAND_BLUE_DARK = "#15145F";
const ACCENT_ORANGE = "#F39C12";

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  color: "rgba(255,255,255,0.85)",
  fontSize: 18,
  textDecoration: "none",
  "&:hover": { color: "#fff" },
};

const bullet = (
  <ArrowForwardIosRoundedIcon sx={{ fontSize: 14, opacity: 0.8 }} />
);

function Footer() {
  return (
    <Box
  component="footer"
  sx={{
    position: "relative",
    color: "#fff",
    backgroundImage: `url(${footerBg})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    pt: { xs: 6, md: 8 },
    pb: 3,
    overflow: "hidden",
  }}
>

      {/* Subtle grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          transform: "skewY(-6deg)",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top CTA Bar */}
        <Box
          sx={{
            bgcolor: ACCENT_ORANGE,
            borderRadius: 2,
            px: { xs: 2.5, sm: 3.5, md: 4 },
            py: { xs: 3, md: 4 },
            mb: { xs: 5, md: 6 },
            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md>
              <Stack spacing={1}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: 22, sm: 26, md: 30 },
                    lineHeight: 1.2,
                  }}
                >
                  Need Help Right Now? Contact Our Team
                  <ArrowForwardIosRoundedIcon
                    sx={{ fontSize: 18, ml: 1, verticalAlign: "middle" }}
                  />
                </Typography>
                <Typography sx={{ opacity: 0.95, maxWidth: 720 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md="auto"
              sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}
            >
              <Button
                variant="contained"
                disableElevation
                startIcon={<PhoneInTalkRoundedIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: BRAND_BLUE,
                  fontWeight: 800,
                  borderRadius: 1.5,
                  px: 2.5,
                  py: 1.25,
                  "&:hover": { bgcolor: "#F7F7FF" },
                }}
              >
                CONTACT US
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Main Footer Columns */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand & Contact */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.25}>
              <Stack direction="row" alignItems="center" spacing={1.25}>
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: 1.25,
                    bgcolor: ACCENT_ORANGE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 0.5,
                  }}
                >
                  <DirectionsCarRoundedIcon sx={{ color: "#fff" }} fontSize="small" />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: 22 }}>
                  Autovia
                </Typography>
              </Stack>

              <Typography sx={{ opacity: 0.8, fontSize: 18, maxWidth: 360 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              <Stack spacing={1.25} sx={{ fontSize: 14 }}>
                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                  <PlaceRoundedIcon sx={{ mt: "2px", opacity: 0.9 }} />
                  <Typography sx={{ opacity: 0.85 }}>
                    6391 Elgin St. Celina, Delaware 10299
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <MailOutlineRoundedIcon sx={{ opacity: 0.9 }} />
                  <MuiLink href="mailto:hello@autovia.com" sx={linkSx}>
                    hello@autovia.com
                  </MuiLink>
                </Stack>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <CallRoundedIcon sx={{ opacity: 0.9 }} />
                  <MuiLink href="tel:+12175550123" sx={linkSx}>
                    (217) 555-0123
                  </MuiLink>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2.666}>
            <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Quick Links</Typography>
            <Stack spacing={1.1}>
              <MuiLink href="#" sx={linkSx}>{bullet} Home</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Cars</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Services</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Contact Us</MuiLink>
            </Stack>
          </Grid>

          {/* Rent A Car */}
          <Grid item xs={12} sm={6} md={2.666}>
            <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Rent A Car</Typography>
            <Stack spacing={1.1}>
              <MuiLink href="#" sx={linkSx}>{bullet} Sport Car</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} SUV Car</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} MVP Car</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Sedan Car</MuiLink>
            </Stack>
          </Grid>

          {/* Information */}
          <Grid item xs={12} sm={6} md={2.666}>
            <Typography sx={{ fontWeight: 800, mb: 1.5 }}>Information</Typography>
            <Stack spacing={1.1}>
              <MuiLink href="#" sx={linkSx}>{bullet} Privacy Policy</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Terms & Conditions</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Disclaimer</MuiLink>
              <MuiLink href="#" sx={linkSx}>{bullet} Support</MuiLink>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 3.5, md: 4.5 },
            borderColor: "rgba(255,255,255,0.12)",
          }}
        />

        {/* Bottom bar */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ opacity: 0.9 }}
        >
          <Typography sx={{ fontSize: 18 }}>
            © {new Date().getFullYear()} Autovia - All rights reserved
          </Typography>

          <Stack direction="row" spacing={1.25}>
            <Button
              aria-label="Facebook"
              size="small"
              sx={{
                minWidth: 0,
                p: 1,
                bgcolor: BRAND_BLUE_DARK,
                borderRadius: "50%",
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              <FacebookRoundedIcon fontSize="small" sx={{ color: "#fff" }} />
            </Button>
            <Button
              aria-label="Instagram"
              size="small"
              sx={{
                minWidth: 0,
                p: 1,
                bgcolor: BRAND_BLUE_DARK,
                borderRadius: "50%",
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              <InstagramIcon fontSize="small" sx={{ color: "#fff" }} />
            </Button>
            <Button
              aria-label="X"
              size="small"
              sx={{
                minWidth: 0,
                p: 1,
                bgcolor: BRAND_BLUE_DARK,
                borderRadius: "50%",
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              <XIcon fontSize="small" sx={{ color: "#fff" }} />
            </Button>
            <Button
              aria-label="LinkedIn"
              size="small"
              sx={{
                minWidth: 0,
                p: 1,
                bgcolor: BRAND_BLUE_DARK,
                borderRadius: "50%",
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              <LinkedInIcon fontSize="small" sx={{ color: "#fff" }} />
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
export default Footer;
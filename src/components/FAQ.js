import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import carPng from "../../src/assets/FAQ.png";
import autoviaLogoV from "../../src/assets/faq-logo.png";

const BRAND_BLUE = "#2B22C9";
const ACCENT_ORANGE = "#F39C12";
const FAQ_BG = "#F2F2FF";

const faqs = [
  {
    q: "How do I book a rental with Vihaan Travels?",
    a: "Booking is easy - choose your vehicle, enter your details, and confirm. We take care of everything through our booking portal.",
  },
  {
    q: "What documents do I need to rent a vehicle?",
    a: "You only need a valid driving license and an ID to get started.",
  },
  {
    q: "Can I change or cancel my booking?",
    a: "Yes, you can update or cancel your reservation anytime through your account or by contacting our support team.",
  },
  {
    q: "Do you offer customer or roadside assistance?",
    a: "Yes, we provide 24/7 assistance for all customers who book with Vihaan Travels.",
  },
];

function FaqItem({ q, a, defaultExpanded = false }) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  return (
    <Accordion
      elevation={0}
      disableGutters
      expanded={expanded}
      onChange={() => setExpanded((v) => !v)}
      sx={{
        mb: 2.5,
        borderRadius: 2,
        bgcolor: FAQ_BG,
        "&:before": { display: "none" },
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveRoundedIcon sx={{ color: BRAND_BLUE }} />
          ) : (
            <AddRoundedIcon sx={{ color: BRAND_BLUE }} />
          )
        }
        sx={{
          px: { xs: 2, sm: 3 },
          py: 2.25,
          "& .MuiAccordionSummary-content": { my: 0.25 },
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            color: "#1c1c28",
            fontSize: { xs: 15, sm: 16 },
          }}
        >
          {q}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0, px: { xs: 2, sm: 3 }, pb: 2.5 }}>
        <Typography
          sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: 14 }}
        >
          {a}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function FAQ() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("isMobile:", isMobile); // ✅ You can remove this later

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
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
              Frequently Asked Questions
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 26, sm: 34, md: 40 },
              color: "#1c1c28",
              lineHeight: 1.2,
            }}
          >
            Need Help? Find Answers Here
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              color: "text.secondary",
              fontSize: { xs: 18, sm: 20 },
              lineHeight: 1.8,
            }}
          >
            Clear Guidance for Every Traveller
          </Typography>
        </Stack>

        {/* Content */}
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
          {/* LEFT: orange strip + logo + car */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                height: { xs: 320, sm: 320, md: 440 },
                overflow: "hidden",
              }}
            >
              {/* Orange area (75% width) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: { xs: "75%", sm: "75%", md: "75%" },
                  bgcolor: ACCENT_ORANGE,
                }}
              >
                <Box
                  component="img"
                  src={autoviaLogoV}
                  alt="Autovia"
                  sx={{
                    position: "absolute",
                    top: { xs: 1, sm: 16, md: 1 },
                    right: { xs: 6, sm: 10 },
                    height: { xs: "12%", sm: "12%", md: "17%" },
                    maxHeight: { xs: 200, sm: 240, md: 300 },
                    objectFit: "contain",
                    pointerEvents: "none",
                    zIndex: 2,
                    transform: "rotate(-90deg) translateY(-80%)",
                    transformOrigin: "top right",
                  }}
                />
              </Box>

              <Box
                component="img"
                src={carPng}
                alt="Car"
                sx={{
                  position: "absolute",
                  bottom: -6,
                  left: -10,
                  width: { xs: "88%", sm: "85%", md: "95%" },
                  maxWidth: "none",
                  objectFit: "contain",
                  zIndex: 1.5,
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT: FAQ list */}
          <Grid item xs={12} md={7}>
            <Box sx={{ pt: { xs: 0, md: 1 } }}>
              {faqs.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  defaultExpanded={i === 0}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

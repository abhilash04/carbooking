// PopularPlaces.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// 🔹 Local assets
import bgPlaces from "../../src/assets/bg-places.jpg";
import ooty from "../../src/assets/ooty.png";
import madurai from "../../src/assets/madurai.png";
import kodaikanal from "../../src/assets/kodaikanal.png";
import kanyakumari from "../../src/assets/kanyakumari.png";
import wayanad from "../../src/assets/wayanad.png";
import munnar from "../../src/assets/munnar.png";
import rameshwaram from "../../src/assets/rameshwaram.png";
import alleppey from "../../src/assets/alleppey.png";
import tirupati from "../../src/assets/tirupati.png";


/* ----------------------------
   Data
----------------------------- */
const PLACES = [
  { id: "ooty", title: "Ooty(TN)", img: ooty },
  { id: "kodaikanal", title: "Kodaikanal(TN)", img: kodaikanal },
  { id: "madurai", title: "Madurai(TN)", img: madurai },
  { id: "kanyakumari", title: "Kanyakumari(TN)", img: kanyakumari },
  { id: "wayanad", title: "Wayanad(KL)", img: wayanad },
  { id: "munnar", title: "Munnar", img: munnar },
  { id: "rameshwaram", title: "Rameshwaram(TN)", img: rameshwaram },
  { id: "alleppey", title: "Alleppey(KL)", img: alleppey },
  { id: "tirupati", title: "Tirupati(AP)", img: tirupati },
];

/* ----------------------------
   Helpers
----------------------------- */
const mod = (n, m) => ((n % m) + m) % m;

function getWindowed(items, start, count) {
  const out = [];
  for (let i = 0; i < count; i++) out.push(items[mod(start + i, items.length)]);
  return out;
}

/* ----------------------------
   Kite Arrow (triangle button)
----------------------------- */
const KiteArrow = ({ direction, onClick, anchor = "right", show }) => {
  const SIZE = 46; // reduce kite size slightly
  const GAP = 0; // add a small gap from card edge
  const ICON = 24; // slightly smaller arrow fits perfectly
  const NUDGE = 1.5;
  const offset = -(SIZE + GAP);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-48%)",
        [anchor]: offset,
        width: SIZE,
        height: SIZE,
        bgcolor: "#f59e0b",
        boxShadow: 3,
        zIndex: 5,
        cursor: "pointer",
        clipPath:
          direction === "right"
            ? "polygon(0 0, 100% 50%, 0 100%)"
            : "polygon(100% 0, 0 50%, 100% 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity .35s ease, transform .35s ease",
      }}
    >
      {direction === "right" ? (
        <ArrowForwardIcon
          sx={{
            fontSize: ICON,
            color: "#111",
            transform: `translateX(-${NUDGE}px)`,
          }}
        />
      ) : (
        <ArrowBackIcon
          sx={{
            fontSize: ICON,
            color: "#111",
            transform: `translateX(${NUDGE}px)`,
          }}
        />
      )}
    </Box>
  );
};

/* ----------------------------
   Component
----------------------------- */
function PlacesInSouth() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const perView = isMobile ? 1 : isTablet ? 2 : 3;
  const total = PLACES.length;

  const [index, setIndex] = React.useState(0);
  const handleNext = () => setIndex((prev) => mod(prev + 1, total));
  const handlePrev = () => setIndex((prev) => mod(prev - 1, total));

  // Animation mount effect
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  // Hover/touch state
  const [hovered, setHovered] = React.useState(false);

  // For mobile, simulate hover on touch
  const handleTouchStart = () => setHovered(true);
  const handleTouchEnd = () => {
    // delay hiding to give visual time
    setTimeout(() => setHovered(false), 600);
  };

  const visible = getWindowed(PLACES, index, perView);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#eef0f4",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          height: { xs: 320, md: 420 },
          backgroundImage: `linear-gradient(180deg, rgba(8,10,18,.75), rgba(8,10,18,.4)), url(${bgPlaces})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: { xs: 6, md: 8 },
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            opacity: mounted ? 1 : 0,
            transition: "all .8s ease",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              letterSpacing: 2,
              fontWeight: 600,
              color: "#fbbf24",
            }}
          >
            /// MOST POPULAR
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ fontWeight: 700, mt: 1 }}
          >
            IN South India!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.85,
              mt: 1,
              maxWidth: 560,
              mx: "auto",
            }}
          >
            Check out the most popular places in South India!
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: "relative",
            transform: mounted ? "translateY(0)" : "translateY(40px)",
            opacity: mounted ? 1 : 0,
            transition: "all .9s cubic-bezier(.22,.61,.36,1)",
            px: { xs: 1, sm: 0 },
            mx: "auto",
            mt: -6,
            maxWidth: "1200px",
          }}
        >
          {/* Arrows visible only when hover or touch */}
          <KiteArrow
            direction="left"
            onClick={handlePrev}
            anchor="left"
            show={hovered}
          />
          <KiteArrow
            direction="right"
            onClick={handleNext}
            anchor="right"
            show={hovered}
          />

          <Grid container spacing={3}>
            {visible.map((p) => (
              <Grid key={p.id} item xs={10} sm={6} md={4} sx={{ mx: "auto" }}>
                <Card
                  elevation={2}
                  sx={{
                    overflow: "hidden",
                    height: "100%",
                    bgcolor: "#fff",
                    transition: "transform .3s ease, box-shadow .3s ease",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={p.img}
                      alt={p.title}
                      sx={{
                        height: { xs: 180, md: 260 },
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ py: 2.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, p: 2 }}>
                        {p.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Dots */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {PLACES.map((_, i) => {
            const active = i === index;
            return (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,

                  bgcolor: active ? "#fbbf24" : "#1f2937",
                  opacity: active ? 1 : 0.7,
                  transition: "all .2s",
                }}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
export default PlacesInSouth
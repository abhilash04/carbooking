import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.jpg";
import car1 from "../assets/banner-3.png";
import car2 from "../assets/car1-new.bf6949f6da77a8c7c742.webp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { motion, AnimatePresence } from "framer-motion";
const Banner = () => {
  const theme = useTheme();
  const [count, setCount] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    let start = 0;
    const end = 500;
    const duration = 1000; // 1 second animation
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Your Smoothest Ever Car Rental Experience",
      description:
        "Book from a wide range of luxury and budget vehicles ready to ride anywhere, anytime.",
      count: 120,
      image: car1,
    },
    {
      id: 2,
      title: "Drive Your Dream Car Today",
      description:
        "Choose from top models and get hassle-free delivery and pickup at your location.",
      count: 85,
      image: car2,
    },
    {
      id: 3,
      title: "Comfort, Style, and Reliability",
      description:
        "Experience top-notch performance and comfort on every ride with our premium fleet.",
      count: 150,
      image: car1,
    },
  ];

  const currentSlide = slides[currentIndex];

  return (
    <>
      {/* Banner Section */}
      <Box sx={{ position: "relative", width: "100%", overflow: "visible" }}>
        {/* Background Banner Section */}
        <Box
          sx={{
            position: "relative",
            height: isMobile? "65vh":"100vh",
            backgroundImage: `url(${banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Overlay gradient */}
          <Box
            component="img"
            src={banner1}
            alt="overlay"
            sx={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              zIndex: 1,
            }}
          />
          {/* Left Arrow */}
          {!isMobile && (
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 0,
                zIndex: 10,
                bgcolor: "rgba(0,0,0,0.3)",
                color: "#fff",
                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          {/* Content Wrapper */}(
          <Box
            sx={{
              position: "relative",
              zIndex: 3,
              maxWidth: "1200px",
              mx: "auto",
              width: "100%",
              px: isMobile ? 2 : 0,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.7 }}
                style={{
                  width: isMobile ? "100%" : "40%",
                  color: "white",
                  textAlign: "left",
                }}
              >
                {!isMobile && (
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      bgcolor: "rgba(0, 0, 0, 0.25)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      textTransform: "none",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#fff",
                      borderRadius: "8px",
                      px: 2.5,
                      py: 1,
                      mb: 4,
                      mt: -4,
                      transition:
                        "background .3s,border .3s,border-radius .3s,box-shadow .3s,transform .4s",
                      "&:hover": {
                        bgcolor: "rgba(0, 0, 0, 0.35)",
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    {count}+ Vehicles Ready to Ride
                  </Button>
                )}
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    lineHeight: isMobile? "42px":"56px",
                    fontSize: isMobile? "36px":"42px",
                  }}
                >
                  {currentSlide.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 1,
                    lineHeight: "24px",
                    fontSize: "18px",
                  }}
                >
                  {currentSlide.description}
                </Typography>
              </motion.div>

              {/* Car Image */}
              <motion.img
                key={currentSlide.image}
                src={currentSlide.image}
                alt="car"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "spring",
                  stiffness: 60,
                }}
                style={{
                  width: isMobile ? "100%" : "55%",
                  position: "relative",
                  marginTop: isMobile ? 20 : 0,
                  transform: isMobile ? "scale(1.15)" : "none",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  zIndex: 2,
                }}
              />
            </AnimatePresence>

            {/* Mobile arrows below image */}
            {isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 3,
                }}
              >
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    bgcolor: "rgba(0,0,0,0.3)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    bgcolor: "rgba(0,0,0,0.3)",
                    color: "#fff",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          );
          {/* Right Arrow */}
          {!isMobile && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 0,
                zIndex: 10,
                bgcolor: "rgba(0,0,0,0.3)",
                color: "#fff",
                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
          {/* Floating Form (only for Desktop) */}
          {!isMobile && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }} // start slightly lower & transparent
              animate={{ opacity: 1, y: 0 }} // fade in + lift up
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              sx={{
                position: "absolute",
                bottom: "-17.5%",
                // left: "50%",
                transform: "translateX(-50%)", // stays centered
                width: "85%",
                bgcolor: "white",
                borderRadius: 1,
                boxShadow: 4,
                p: 3,
                zIndex: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                Let’s Rent your Best Car
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Your Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DirectionsCarIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem disabled value="">
                      Choose a Car
                    </MenuItem>
                    <MenuItem value="SUV">SUV</MenuItem>
                    <MenuItem value="Sedan">Sedan</MenuItem>
                    <MenuItem value="Hatchback">Hatchback</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Pickup Address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Start Date"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    fullWidth
                    placeholder="Return Date"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3} textAlign="center">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#1a28d9",
                      color: "white",
                      fontWeight: 600,
                      px: 4,
                      py: 1.2,
                      height: "100%",
                      borderRadius: "8px",
                      "&:hover": { bgcolor: "#1521b5" },
                    }}
                  >
                    GET QUOTE
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>

      {/* Separate Form for Mobile */}
      {isMobile && (
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 0,
            boxShadow: 2,
            p: 3,
            mt: 5,
            mx: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Let’s Rent your Best Car
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Your Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Your Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                defaultValue=""
                displayEmpty
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCarIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem disabled value="">
                  Choose a Car
                </MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Pickup Address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Start Date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Return Date"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#1a28d9",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  py: 1.2,
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#1521b5" },
                }}
              >
                GET QUOTE
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Banner;
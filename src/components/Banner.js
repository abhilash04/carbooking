import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
  useMediaQuery,
  InputAdornment,
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
import banner3 from "../assets/banner-3.png";
import { motion } from "framer-motion";
const Banner = () => {
  const theme = useTheme();
  const [count, setCount] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <>
      {/* Banner Section */}
      <Box sx={{ position: "relative", width: "100%", overflow: "visible" }}>
        {/* Background Banner Section */}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
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

          {/* Content Wrapper */}
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
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                color: "white",
                width: isMobile ? "100%" : "40%",
                textAlign: "left",
                justifyContent: "space-between",
              }}
            >
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
                    "background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration,.4s)",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.35)",
                    transform: "scale(1.03)",
                  },
                }}
              >
                {count}+ Vehicles Ready to Ride
              </Button>

              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  lineHeight: "56px",
                  fontSize: "42px",
                }}
              >
                Your Smoothest Ever Car Rental Experience
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 1,
                  lineHeight: "24px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>

            {/* Right Section - Car Image */}
            {/* {!isMobile && ( */}
            <Box
              component={motion.img}
              src={banner3}
              alt="car"
              initial={{ x: 500, opacity: 0 }} // start off-screen right
              animate={{ x: 0, opacity: 1 }} // end at original position
              transition={{
                duration: 2, // smooth duration
                ease: [0.25, 0.1, 0.25, 1], // smooth curve easing
                type: "spring", // natural spring motion
                stiffness: 50, // control spring intensity
              }}
              sx={{
                width: isMobile ? "100%" : "60%",
                position: "relative",
                mt: isMobile ? 10 : 0,
                transform: isMobile ? "scale(1.2)" : "none",
                transformOrigin: "center",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                zIndex: 2,
              }}
            />
            {/* )} */}
          </Box>

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

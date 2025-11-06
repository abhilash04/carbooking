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

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.png";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "90vh" : "85vh",
        overflow: "hidden",
        backgroundImage: `url(${banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      <Box
        component="img"
        src={banner3}
        alt="car"
        sx={{
          position: "absolute",
          right: isMobile ? "5%" : "10%",
          bottom: isMobile ? "22%" : "15%",
          width: isMobile ? "70%" : "35%",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "12%" : "30%",
          left: isMobile ? "5%" : "12%",
          zIndex: 3,
          color: "white",
          width: isMobile ? "90%" : "35%",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            bgcolor: "rgba(0,0,0,0.6)",
            textTransform: "none",
            fontSize: 13,
            mb: 2,
          }}
        >
          500+ Vehicles Ready to Ride
        </Button>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Your Smoothest Ever Car Rental Experience
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>

      
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "5%" : "5%",
          left: "50%",
          transform: "translateX(-50%) translateY(75%)",
          width: isMobile ? "90%" : "70%",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          p: isMobile ? 2 : 3,
          zIndex: 4,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Let’s Rent your Best Car
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.4}>
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
          <Grid item xs={12} sm={6} md={2.4}>
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
          <Grid item xs={12} sm={6} md={2.4}>
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
          <Grid item xs={12} sm={6} md={2.4}>
            <TextField
              select
              fullWidth
              defaultValue=""
              displayEmpty
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon fontSize="small" />
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
          <Grid item xs={12} sm={6} md={2.4}>
            <TextField
              placeholder="Start Date"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <TextField
              placeholder="Return Date"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} textAlign="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0046FF",
                color: "white",
                fontWeight: 600,
                px: 4,
                py: 1.2,
                borderRadius: "8px",
                "&:hover": { bgcolor: "#0033cc" },
              }}
            >
              GET QUOTE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Banner;
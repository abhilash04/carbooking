import * as React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

function PromoStrip() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#2B22C9",
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 0.75, sm: 0.8 }, 
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap" },
            textAlign: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              justifyContent: "center",
            }}
          >
            <LocalOfferRoundedIcon
              sx={{ fontSize: { xs: 16, sm: 20 }, opacity: 0.95 }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 13, sm: 16 },
                lineHeight: 1.2,
              }}
            >
              15% OFF for Online Booking
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            sx={{
              bgcolor: "#F39C12",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 1.5,
              px: { xs: 1.75, sm: 2.25 },
              py: { xs: 0.3, sm: 0.4 },
              fontSize: { xs: 11, sm: 13 },
              "&:hover": { bgcolor: "#DB8C07" },
            }}
          >
            CLAIM NOW
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default PromoStrip;

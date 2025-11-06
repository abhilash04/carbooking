import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import logo from "../../src/assets/Logo.png";

const BRAND_BLUE = "#2B22C9";
const ACCENT_ORANGE = "#F39C12";

export default function NavBar() {
  const [anchor, setAnchor] = React.useState({});
  const openMenu = (label, el) => setAnchor((p) => ({ ...p, [label]: el }));
  const closeMenu = (label) => setAnchor((p) => ({ ...p, [label]: null }));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState({});
  const toggleMobileSection = (label) =>
    setMobileOpen((p) => ({ ...p, [label]: !p[label] }));

  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "text.primary",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
          {/* Logo */}
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ height: 40, width: "auto", objectFit: "contain" }}
            />
          </Stack>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1 }}>
              <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
              >
                {/* HOME */}
                <Button
                  href="#home"
                  sx={{
                    fontWeight: 700,
                    color: ACCENT_ORANGE,
                    "&:hover": { bgcolor: "transparent", color: BRAND_BLUE },
                  }}
                >
                  HOME
                </Button>

                {/* VEHICLE */}
                <Box>
                  <Button
                    endIcon={<KeyboardArrowDownRoundedIcon />}
                    onClick={(e) => openMenu("VEHICLE", e.currentTarget)}
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      "&:hover": { bgcolor: "transparent", color: ACCENT_ORANGE },
                    }}
                  >
                    VEHICLE
                  </Button>
                  <Menu
                    anchorEl={anchor["VEHICLE"]}
                    open={Boolean(anchor["VEHICLE"])}
                    onClose={() => closeMenu("VEHICLE")}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <MenuItem onClick={() => closeMenu("VEHICLE")} href="#carcollection">
                      Car Collection
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("VEHICLE")} href="#cardetails">
                      Car Details
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("VEHICLE")} href="#carbooking">
                      Car Booking
                    </MenuItem>
                  </Menu>
                </Box>

                {/* SERVICES */}
                <Box>
                  <Button
                    endIcon={<KeyboardArrowDownRoundedIcon />}
                    onClick={(e) => openMenu("SERVICES", e.currentTarget)}
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      "&:hover": { bgcolor: "transparent", color: ACCENT_ORANGE },
                    }}
                  >
                    SERVICES
                  </Button>
                  <Menu
                    anchorEl={anchor["SERVICES"]}
                    open={Boolean(anchor["SERVICES"])}
                    onClose={() => closeMenu("SERVICES")}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <MenuItem onClick={() => closeMenu("SERVICES")} href="#services">
                      Services
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("SERVICES")} href="#servicedetails">
                      Service Details
                    </MenuItem>
                  </Menu>
                </Box>

                {/* ABOUT */}
                <Button
                  href="#about"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    "&:hover": { bgcolor: "transparent", color: ACCENT_ORANGE },
                  }}
                >
                  ABOUT
                </Button>

                {/* PAGES */}
                <Box>
                  <Button
                    endIcon={<KeyboardArrowDownRoundedIcon />}
                    onClick={(e) => openMenu("PAGES", e.currentTarget)}
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      "&:hover": { bgcolor: "transparent", color: ACCENT_ORANGE },
                    }}
                  >
                    PAGES
                  </Button>
                  <Menu
                    anchorEl={anchor["PAGES"]}
                    open={Boolean(anchor["PAGES"])}
                    onClose={() => closeMenu("PAGES")}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#blog">
                      Blog
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#singlepost">
                      Single Post
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#contactus">
                      Contact Us
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#team">
                      Team
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#faq">
                      FAQ
                    </MenuItem>
                    <MenuItem onClick={() => closeMenu("PAGES")} href="#error404">
                      Error 404
                    </MenuItem>
                  </Menu>
                </Box>
              </Stack>
            </Box>
          )}

          {/* BOOK NOW (Desktop) */}
          {!isMobile && (
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                fontWeight: 700,
                borderRadius: 1.25,
                px: 2.5,
                py: 1,
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              BOOK NOW
            </Button>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: "auto" }}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { width: 300 } }}
        >
          <Box sx={{ p: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ height: 40, width: "auto", objectFit: "contain" }}
            />
          </Box>
          <Divider />

          <List sx={{ p: 1 }}>
            {/* HOME */}
            <ListItemButton href="#home" onClick={() => setDrawerOpen(false)}>
              <ListItemText
                primary="HOME"
                primaryTypographyProps={{
                  fontWeight: 700,
                  color: ACCENT_ORANGE,
                }}
              />
            </ListItemButton>

            {/* VEHICLE */}
            <ListItemButton onClick={() => toggleMobileSection("VEHICLE")}>
              <ListItemText primary="VEHICLE" primaryTypographyProps={{ fontWeight: 600 }} />
              <ExpandMoreRoundedIcon
                sx={{
                  transform: mobileOpen["VEHICLE"] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform .2s",
                }}
              />
            </ListItemButton>
            <Collapse in={mobileOpen["VEHICLE"]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton href="#carcollection" sx={{ pl: 4 }}>
                  <ListItemText primary="Car Collection" />
                </ListItemButton>
                <ListItemButton href="#cardetails" sx={{ pl: 4 }}>
                  <ListItemText primary="Car Details" />
                </ListItemButton>
                <ListItemButton href="#carbooking" sx={{ pl: 4 }}>
                  <ListItemText primary="Car Booking" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* SERVICES */}
            <ListItemButton onClick={() => toggleMobileSection("SERVICES")}>
              <ListItemText primary="SERVICES" primaryTypographyProps={{ fontWeight: 600 }} />
              <ExpandMoreRoundedIcon
                sx={{
                  transform: mobileOpen["SERVICES"] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform .2s",
                }}
              />
            </ListItemButton>
            <Collapse in={mobileOpen["SERVICES"]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton href="#services" sx={{ pl: 4 }}>
                  <ListItemText primary="Services" />
                </ListItemButton>
                <ListItemButton href="#servicedetails" sx={{ pl: 4 }}>
                  <ListItemText primary="Service Details" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* ABOUT */}
            <ListItemButton href="#about" onClick={() => setDrawerOpen(false)}>
              <ListItemText
                primary="ABOUT"
                primaryTypographyProps={{ fontWeight: 700 }}
              />
            </ListItemButton>

            {/* PAGES */}
            <ListItemButton onClick={() => toggleMobileSection("PAGES")}>
              <ListItemText primary="PAGES" primaryTypographyProps={{ fontWeight: 600 }} />
              <ExpandMoreRoundedIcon
                sx={{
                  transform: mobileOpen["PAGES"] ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform .2s",
                }}
              />
            </ListItemButton>
            <Collapse in={mobileOpen["PAGES"]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton href="#blog" sx={{ pl: 4 }}>
                  <ListItemText primary="Blog" />
                </ListItemButton>
                <ListItemButton href="#singlepost" sx={{ pl: 4 }}>
                  <ListItemText primary="Single Post" />
                </ListItemButton>
                <ListItemButton href="#contactus" sx={{ pl: 4 }}>
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
                <ListItemButton href="#team" sx={{ pl: 4 }}>
                  <ListItemText primary="Team" />
                </ListItemButton>
                <ListItemButton href="#faq" sx={{ pl: 4 }}>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
                <ListItemButton href="#error404" sx={{ pl: 4 }}>
                  <ListItemText primary="Error 404" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                fontWeight: 700,
                borderRadius: 1.25,
                py: 1.1,
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              BOOK NOW
            </Button>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
}

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
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import logo from "../../src/assets/Logo.png";

const BRAND_BLUE = "#2B22C9";
const ACCENT_ORANGE = "#F39C12";

const navItems = [
  { label: "HOME", href: "#home", active: true },
  {
    label: "VEHICLE",
    children: [
      { label: "Car Collection", href: "#carcollection" },
      { label: "Car Details", href: "#cardetails" },
      { label: "Car Booking", href: "#carbooking" },
    ],
  },
  {
    label: "SERVICES",
    children: [
      { label: "Services", href: "#services" },
      { label: "Service Details", href: "#servicedetails" },
    ],
  },
  { label: "ABOUT", href: "#about" },
  {
    label: "PAGES",
    children: [
      { label: "Blog", href: "#blog" },
      { label: "Single Post", href: "#singlepost" },
      { label: "Contact Us", href: "#contactus" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
      { label: "Error 404", href: "#error404" },
    ],
  },
];

export default function NavBar() {
  // desktop dropdown anchors
  const [anchor, setAnchor] = React.useState({});
  const openMenu = (label, el) => setAnchor((p) => ({ ...p, [label]: el }));
  const closeMenu = (label) => setAnchor((p) => ({ ...p, [label]: null }));

  // mobile drawer + collapses
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState({}); // { VEHICLE: true, ... }

  const toggleMobileSection = (label) =>
    setMobileOpen((p) => ({ ...p, [label]: !p[label] }));

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
          {/* Left: Logo */}
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ height: 40, width: "auto", objectFit: "contain" }}
            />
          </Stack>

          {/* Center: Desktop nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              {navItems.map((item) =>
                item.children ? (
                  <Box key={item.label}>
                    <Button
                      endIcon={<KeyboardArrowDownRoundedIcon />}
                      onClick={(e) => openMenu(item.label, e.currentTarget)}
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        "&:hover": { bgcolor: "transparent", color: BRAND_BLUE },
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={anchor[item.label] || null}
                      open={Boolean(anchor[item.label])}
                      onClose={() => closeMenu(item.label)}
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                      {item.children.map((c) => (
                        <MenuItem
                          key={c.label}
                          onClick={() => closeMenu(item.label)}
                          component="a"
                          href={c.href}
                        >
                          {c.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      fontWeight: 800,
                      color: item.active ? ACCENT_ORANGE : "text.primary",
                      "&:hover": { bgcolor: "transparent", color: BRAND_BLUE },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Stack>
          </Box>

          {/* Right: BOOK NOW (desktop) */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                fontWeight: 800,
                borderRadius: 1.25,
                px: 2.5,
                py: 1,
                "&:hover": { bgcolor: "#231cab" },
              }}
            >
              BOOK NOW
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer with dropdowns */}
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
          {navItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const isOpen = !!mobileOpen[item.label];

            if (!hasChildren) {
              return (
                <Box key={item.label}>
                  <ListItemButton
                    component="a"
                    href={item.href || "#"}
                    sx={{ borderRadius: 1 }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: item.active ? 800 : 700,
                        color: item.active ? ACCENT_ORANGE : "inherit",
                      }}
                    />
                  </ListItemButton>
                </Box>
              );
            }

            return (
              <Box key={item.label}>
                {/* Parent row with expand icon */}
                <ListItemButton
                  onClick={() => toggleMobileSection(item.label)}
                  sx={{ borderRadius: 1 }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <ExpandMoreRoundedIcon
                    sx={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform .2s",
                    }}
                  />
                </ListItemButton>

                {/* Collapsible children */}
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((c) => (
                      <ListItemButton
                        key={c.label}
                        component="a"
                        href={c.href}
                        sx={{ pl: 4, borderRadius: 1 }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={c.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          })}
        </List>

        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              bgcolor: BRAND_BLUE,
              color: "#fff",
              fontWeight: 800,
              borderRadius: 1.25,
              py: 1.1,
              "&:hover": { bgcolor: "#231cab" },
            }}
            onClick={() => setDrawerOpen(false)}
          >
            BOOK NOW
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
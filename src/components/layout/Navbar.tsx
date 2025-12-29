import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { gdgColors, useColorMode } from "../../theme";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
] as const;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  function handleDrawerToggle(): void {
    setMobileOpen((prev) => !prev);
  }

  function handleNavClick(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }

  function handleNavKeyDown(event: React.KeyboardEvent, href: string): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavClick(href);
    }
  }

  const drawer = (
    <Box sx={{ width: 250 }} role={"navigation"}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding={true}>
            <ListItemButton onClick={() => handleNavClick(item.href)} onKeyDown={(e) => handleNavKeyDown(e, item.href)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position={"sticky"}
      color={"inherit"}
      sx={{
        backgroundColor: mode === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(18, 18, 18, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
            }}
            aria-hidden={"true"}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: gdgColors.blue,
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: gdgColors.red,
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: gdgColors.yellow,
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: gdgColors.green,
              }}
            />
          </Box>
          <Typography
            variant={"h6"}
            component={"span"}
            sx={{
              fontWeight: 700,
              color: "text.primary",
              ml: 1,
            }}
          >
            GDG on Campus
          </Typography>
          <Typography
            variant={"h6"}
            component={"span"}
            sx={{
              fontWeight: 400,
              color: "text.secondary",
              display: { xs: "none", sm: "inline" },
            }}
          >
            NYP
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box component={"nav"} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => handleNavKeyDown(e, item.href)}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
                type={"button"}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              onClick={toggleColorMode}
              color={"inherit"}
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
              type={"button"}
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={toggleColorMode}
              color={"inherit"}
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
              type={"button"}
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <IconButton
              color={"inherit"}
              aria-label={"Open navigation menu"}
              onClick={handleDrawerToggle}
              type={"button"}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor={"right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

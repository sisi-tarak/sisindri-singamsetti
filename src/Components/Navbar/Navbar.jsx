import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { id: 1, text: "Doc", path: "/documentation" },
    { id: 2, text: "Tutorials", path: "/tutorials" },
    { id: 3, text: "Courses", path: "/courses" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) handleDrawerToggle();
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleNavigation(item.path)}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container
      maxWidth="lg"
      className="md:flex md:justify-center relative z-30 md:z-999 mt-9"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                component="span"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                Sisindri Singamsetti
              </Box>
            </Link>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mx: 1,
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleNavigation("/contact")}
                sx={{ ml: 2 }}
              >
                Let's Talk
              </Button>
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "background.default",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Container>
  );
};

export default Navbar;

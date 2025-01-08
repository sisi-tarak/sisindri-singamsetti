import React, { useState, useEffect } from "react";
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
  createTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { Consumer } from "../Context/Context";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        "2xs": 0,
        xs: 425,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) handleDrawerToggle();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Consumer>
      {(value) => {
        const { navItems } = value;
        return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleNavigation(item.path)}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
        </List>
  )}}
      </Consumer>
  );

  return (
    <Consumer>
      {(value) => {
        const { navItems } = value;
      
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
                      className="text-headColor"
                      sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      Sisindri Singamsetti
                    </Box>
                  </Link>
                </Box>

                {!isMobile ? (
                  <div className="flex items-center text-textColor">
                    {navItems.map((navItem) => (
                      <Button
                        key={navItem.id}
                        onClick={() => handleNavigation(navItem.path)}
                        sx={{
                          color: "#fafafa",
                          textTransform: "capitalize",
                          mx: "8px",
                          letterSpacing: "1px",
                          "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.05)",
                          },
                        }}
                      >
                        {navItem.text}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <IconButton
                    sx={{
                      color: "#ffffff",
                    }}
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
        )
      }}
    </Consumer>
    
  );
};

export default Navbar;

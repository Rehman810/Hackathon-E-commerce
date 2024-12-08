"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ boxShadow: "none", borderBottom: "1px solid #ddd" }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", alignItems: "center", py: 1 }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#252B42" }}>
          Bandage
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          sx={{
            "@media (max-width: 1000px)": { display: "none" },
          }}
        >
          <Button color="inherit">Home</Button>
          <Button
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleMenuClick}
          >
            Shop
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Pages</Button>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Cloths</MenuItem>
          <MenuItem onClick={handleMenuClose}>Watches</MenuItem>
        </Menu>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            "@media (max-width: 1000px)": { display: "none" },
          }}
        >
          <Button
            startIcon={<PersonIcon />}
            sx={{ color: "#00B0D7", textTransform: "none" }}
          >
            Login / Register
          </Button>
          <IconButton>
            <SearchIcon sx={{ color: "#00B0D7" }} />
          </IconButton>
          <IconButton>
            <FavoriteIcon sx={{ color: "#00B0D7" }} />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon sx={{ color: "#00B0D7" }} />
          </IconButton>
        </Box>

        <IconButton
          sx={{
            display: { xs: "block", sm: "block" },
            "@media (min-width: 1000px)": { display: "none" },
          }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", sm: "block" },
          "@media (min-width: 1000px)": { display: "none" },
        }}
      >
        <List>
          {[
            "Home",
            "Shop",
            "About",
            "Blog",
            "Contact",
            "Pages",
            "Login / Register",
          ].map((item) => (
            <ListItem button onClick={toggleDrawer} key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

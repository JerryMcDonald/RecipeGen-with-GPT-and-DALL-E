import * as React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExternalLinkAvatar from "../ExternalLinkAvatar";
import AIawwLogo from "../../static/images/AIawwLogo.png";

// Define the width of the drawer
const drawerWidth = 240;

// Define navigation links
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Handle toggling the mobile drawer open and closed
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Helper function to render navigation links
  const renderNavLink = (label, path) => (
    <Button key={path} component={RouterLink} to={path} sx={{ color: "#fff" }}>
      {label}
    </Button>
  );

  // Define the contents of the drawer
  const drawer = (
    <Box
      sx={{
        bgcolor: "var(--primary-color)",
        height: "100%",
      }}
    >
      <Box
        onClick={handleDrawerToggle}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          RecipeGen
        </Typography>
        <Divider />
        <List>
          {navItems.map(({ label, path }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={path}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ExternalLinkAvatar
          imageUrl={AIawwLogo}
          tooltipTitle="Visit AI And Web Watch on Youtube"
          sidebar={true}
        />
      </Box>
    </Box>
  );

  // Define the container to be used for the drawer
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "var(--primary-color)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginRight: '-50px', display: { xs: "none", sm: "block" } }}
          >
            RecipeGen
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {navItems.map(({ label, path }) => renderNavLink(label, path))}
          </Box>

          <ExternalLinkAvatar
            sx={{ display: { xs: "none", sm: "block" } }}
            imageUrl={AIawwLogo}
            tooltipTitle="Visit AI And Web Watch on Youtube"
          />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navigation;

Navigation.propTypes = {
  window: PropTypes.object,
};

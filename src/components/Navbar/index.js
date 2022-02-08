import React, { useState } from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { styled, Typography, Drawer } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InfoRounded, Login, VerifiedUser } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import DrawerComponent from "../../components/layouts/DrawerComponent";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(theme.breakpoints.down("sm"));
  const openMenu = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Appbar>
        <Toolbar>
          <img src="../../images/acharya_logo.png" alt="logo" />

          <Typography>PLACEMENT CELL</Typography>
          <Typography style={{ marginLeft: "1000px" }}>Hi Faculty!</Typography>
          {matches ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <Box style={{ marginLeft: "auto" }}>
              <Button
                color="inherit"
                className="button"
                startIcon={<VerifiedUser />}
              >
                Logout
              </Button>
            </Box>
          )}
          {matches ? (
            <IconButton
              style={{ color: "white", marginLeft: "auto" }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Toolbar>
      </Appbar>
    </>
  );
};
export default Navbar;

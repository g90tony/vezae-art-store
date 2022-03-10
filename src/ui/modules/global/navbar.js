import React from "react";

import {
  Button,
  Collapse,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { palette as system_colors } from "../../../assets/styles/colors";
import { bodyTypographyStyles as body } from "../../../assets/styles/typography";

import navLogo from "../../../assets/images/nav_logo.png";
import { NavLink } from "react-router-dom";
import CartPopup from "../../components/cartPopup";

import { cart } from "../../../helpers/data/dummyData";

export default function NavBar() {
  const navLinks = [
    {
      id: 5,
      text: "Home",
      path: "/",
      hasChildren: false,
    },
    {
      id: 1,
      text: "Collections",
      hasChildren: true,
      children: [
        {
          text: "All Art Collections",
          path: "/shop/collections/all",
        },

        {
          text: "Newest Art Collections",
          path: "/shop/collections/latest",
        },

        {
          text: "Trending Art Collections",
          path: "/shop/collections/trending",
        },
      ],
    },
    {
      id: 6,
      text: "Pieces",
      hasChildren: true,
      children: [
        {
          text: "All Art Pieces",
          path: "/shop/pieces/all",
        },

        {
          text: "Newest Art Pieces",
          path: "/shop/pieces/latest",
        },

        {
          text: "Trending Art Pieces",
          path: "/shop/pieces/trending",
        },
      ],
    },
    {
      id: 2,
      text: "Gallery",
      path: "/gallery",
      hasChildren: false,
    },
    {
      id: 3,
      text: "About",
      path: "/about-us",
      hasChildren: false,
    },
    {
      id: 4,
      text: "Contacts",
      path: "/contact-us",
      hasChildren: false,
    },
  ];

  const [anchorElCollection, setAnchorElCollection] = React.useState(null);
  const [anchorElPiece, setAnchorElPiece] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [drawerState, setDrawerState] = React.useState(false);
  const [openCartSubMenu, setOpenCartSubMenu] = React.useState(false);
  const [openPieceSubMenu, setOpenPieceSubMenu] = React.useState(false);
  const [openCollectionSubMenu, setOpenCollectionSubMenu] =
    React.useState(false);

  const menuOpenCart = Boolean(anchorElCart);
  const menuOpenPiece = Boolean(anchorElPiece);
  const menuOpenCollection = Boolean(anchorElCollection);

  const openCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };
  const openPieceMenu = (event) => {
    setAnchorElPiece(event.currentTarget);
  };
  const openCollectionMenu = (event) => {
    setAnchorElCollection(event.currentTarget);
  };

  const closeCartMenu = () => {
    setAnchorElCart(null);
  };
  const closePieceMenu = () => {
    setAnchorElPiece(null);
  };
  const closeCollectionMenu = () => {
    setAnchorElCollection(null);
  };

  const handleCartSubMenu = () => {
    setOpenCartSubMenu(!openCartSubMenu);
  };

  const handlePieceSubMenu = () => {
    setOpenPieceSubMenu(!openPieceSubMenu);
  };

  const handleCollectionSubMenu = () => {
    setOpenCollectionSubMenu(!openCollectionSubMenu);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  function drawerComponent() {
    return (
      <Box
        sx={{
          width: "300px",
          height: "fit-content",
          overflow: "hidden",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
        role="presentation"
      >
        <NavLink
          to="/"
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <img
            src={navLogo}
            style={{
              objectFit: "contain",
              width: "225px",
              margin: " 20px auto",
            }}
            alt="nav_logo"
          />
        </NavLink>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={{
              color: system_colors.primary,
              width: "50%",
              margin: "20px auto",
            }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            sx={{
              color: system_colors.primary,
              width: "50%",
              margin: "20px auto",
            }}
            onClick={handleCartSubMenu}
          >
            <ShoppingCartIcon />{" "}
            {openCartSubMenu ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        <Collapse in={openCartSubMenu} timeout="auto" unmountOnExit>
          <CartPopup cart={cart} width="100%" />
        </Collapse>
        {!openCartSubMenu && (
          <List>
            {navLinks.map((navLink) => {
              return !navLink.hasChildren ? (
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  button
                  key={navLink.id}
                  onClick={toggleDrawer("right", false)}
                >
                  <NavLink
                    to={navLink.path}
                    style={{
                      textDecoration: "none",
                      color: system_colors.primary,
                    }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        margin: "auto 20px",
                        fontSize: body.extraLargeNormal,
                        textAlign: "start",
                      }}
                    >
                      {navLink.text}
                    </Typography>
                  </NavLink>
                </ListItem>
              ) : (
                <ListItem
                  sx={{ display: "flex", flexDirection: "column" }}
                  key={navLink.id}
                >
                  <ListItemButton
                    onClick={
                      navLink.text === "Collections"
                        ? handleCollectionSubMenu
                        : handlePieceSubMenu
                    }
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <ListItemText>
                      <Typography
                        sx={{
                          textDecoration: "none",
                          fontSize: body.extraLargeNormal,
                          textAlign: "start",
                        }}
                      >
                        {navLink.text}
                      </Typography>{" "}
                    </ListItemText>
                    {navLink.text === "Collection" ? (
                      openCollectionSubMenu ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : openPieceSubMenu ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={
                      navLink.text === "Collections"
                        ? openCollectionSubMenu
                        : openPieceSubMenu
                    }
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {navLink.children.map((child) => {
                        return (
                          <ListItem
                            onClick={toggleDrawer("right", false)}
                            key={child.text}
                          >
                            <ListItemText>
                              <NavLink
                                to={child.path}
                                onClick={
                                  navLink.text === "Collections"
                                    ? handleCollectionSubMenu
                                    : handlePieceSubMenu
                                }
                                style={{
                                  textDecoration: "none",
                                }}
                              >
                                <Typography
                                  sx={{
                                    textDecoration: "none",
                                    color: system_colors.primary,
                                    fontSize: body.smallBold,
                                  }}
                                >
                                  {child.text}
                                </Typography>
                              </NavLink>
                            </ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    );
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: system_colors.secondary,
        width: "100vw",
        height: "90px",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: 300,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          padding: "10px",
          width: { xs: "100%", lg: "100%%" },
        }}
        component="div"
      >
        <NavLink
          to="/"
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <img
            src={navLogo}
            style={{
              objectFit: "contain",
              width: "225px",
              margin: "aut0 20px",
            }}
            alt="nav_logo"
          />
        </NavLink>
      </Box>
      <Box
        sx={{
          padding: "10px",
          width: "100%",
          margin: "auto",
          display: { xs: "none", lg: "flex" },
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {navLinks.map((navLink) => {
          return navLink.hasChildren === false ? (
            <React.Fragment key={navLink.id}>
              <NavLink
                to={navLink.path}
                style={{ textDecoration: "none", margin: "auto 20px" }}
              >
                <Typography
                  sx={{
                    fontSize: body.extraLargeLight,
                    color: system_colors.primary,
                  }}
                >
                  {navLink.text}
                </Typography>
              </NavLink>
            </React.Fragment>
          ) : (
            <React.Fragment key={navLink.id}>
              <Button
                sx={{
                  textTransform: "none",
                  textDecoration: "none",
                  fontSize: body.extraLargeLight,
                  color: system_colors.primary,
                }}
                id={`${navLink.text}-button`}
                aria-controls={
                  navLink.text === "Collections"
                    ? menuOpenCollection
                      ? "collection-menu"
                      : undefined
                    : menuOpenCollection
                    ? "piece-menu"
                    : undefined
                }
                aria-haspopup="true"
                aria-expanded={
                  navLink.text === "Collections"
                    ? menuOpenCollection
                      ? "true"
                      : undefined
                    : menuOpenPiece
                    ? "piece-menu"
                    : undefined
                }
                onClick={
                  navLink.text === "Collections"
                    ? openCollectionMenu
                    : openPieceMenu
                }
              >
                {navLink.text}{" "}
                {navLink.text === "Collection" ? (
                  menuOpenCollection ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : menuOpenPiece ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </Button>
              <Menu
                id={`${navLink.text}-menu`}
                anchorEl={
                  navLink.text === "Collections"
                    ? anchorElCollection
                    : anchorElPiece
                }
                open={
                  navLink.text === "Collections"
                    ? menuOpenCollection
                    : menuOpenPiece
                }
                onClose={
                  navLink.text === "Collections"
                    ? closeCollectionMenu
                    : closePieceMenu
                }
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {navLink.children.map((child) => {
                  return (
                    <MenuItem
                      key={child.text}
                      onClick={
                        navLink.text === "Collections"
                          ? closeCollectionMenu
                          : closePieceMenu
                      }
                      sx={{
                        color: system_colors.primary,
                        width: "100%",
                      }}
                    >
                      <NavLink
                        to={child.path}
                        style={{
                          textDecoration: "none",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: body.largeLight,
                            textDecoration: "none",
                            color: system_colors.primary,
                            width: "100%",
                          }}
                        >
                          {child.text}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  );
                })}
              </Menu>
            </React.Fragment>
          );
        })}
      </Box>
      <Box
        sx={{
          padding: "10px",
          width: { xs: "50%", lg: "100%" },
          flexDirection: "row",
          display: { lg: "flex", xs: "none" },
          justifyContent: "flex-end",
          flexWrap: "nowrap",
        }}
      >
        <IconButton
          sx={{ color: system_colors.primary, margin: "auto 10px" }}
          aria-controls={menuOpenCart ? "cart-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpenCart ? "true" : undefined}
          onClick={openCartMenu}
        >
          <ShoppingCartIcon /> {menuOpenCart ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Menu
          id={`cart-menu`}
          anchorEl={anchorElCart}
          open={menuOpenCart}
          onClose={closeCartMenu}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          MenuListProps={{
            "aria-labelledby": "cart-button",
          }}
        >
          <CartPopup cart={cart} width="450px" />
        </Menu>
        <IconButton sx={{ color: system_colors.primary, margin: "auto 10px" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <IconButton
          sx={{ color: system_colors.primary }}
          onClick={toggleDrawer("right", true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor={"right"}
          open={drawerState["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {drawerComponent("right")}
        </Drawer>
      </Box>
    </Grid>
  );
}

import React from "react";

import {
  Collapse,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useSelector, useDispatch } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { palette as system_colors } from "../../../assets/styles/colors";
import {
  bodyTypographyStyles as body,
  bodyTypographyStyles,
} from "../../../assets/styles/typography";

import navLogo from "../../../assets/images/nav_logo.png";
import { NavLink } from "react-router-dom";
import CartPopup from "../../components/cartPopup";
import { updateSelected } from "../../../state/slices/currencySelector";

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
      hasChildren: false,
      path: "/shop/collections/all",
    },
    {
      id: 6,
      text: "Pieces",
      hasChildren: false,
      path: "/shop/pieces/all",
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

  const [cart] = React.useState([]);

  const popularCurrencies = useSelector(
    (state) => state.currencySelector.popularCurrencies
  );

  const selectedCurrency = useSelector(
    (state) => state.currencySelector.selectedCurrency
  );

  const dispatch = useDispatch();

  const [anchorElCurrency, setAnchorElCurrency] = React.useState(null);
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [drawerState, setDrawerState] = React.useState(false);
  const [openCartSubMenu, setOpenCartSubMenu] = React.useState(false);
  const [openCurrencySubMenu, setOpenCurrencySubMenu] = React.useState(false);

  const menuOpenCart = Boolean(anchorElCart);
  const menuOpenCurrency = Boolean(anchorElCurrency);

  const openCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };
  const openCurrencyMenu = (event) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const closeCartMenu = () => {
    setAnchorElCart(null);
  };
  const closeCurrencyMenu = () => {
    setAnchorElCurrency(null);
  };

  const handleCartSubMenu = () => {
    setOpenCartSubMenu(!openCartSubMenu);
  };

  const handleCurrencySubMenu = () => {
    setOpenCurrencySubMenu(!openCurrencySubMenu);
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

  function setCurrency(selectedCurrency) {
    dispatch(updateSelected(selectedCurrency));
  }

  function cartDropdown() {
    return (
      <Collapse in={openCartSubMenu} timeout="auto" unmountOnExit>
        <CartPopup cart={cart} width="100%" />
      </Collapse>
    );
  }

  function currencyDropdown() {
    return (
      <Collapse in={openCurrencySubMenu} timeout="auto" unmountOnExit>
        {popularCurrencies.map((currency) => {
          const index = popularCurrencies.indexOf(currency);

          return (
            <MenuItem
              sx={{
                padding: "10px 50px ",
              }}
              key={index}
              onClick={handleCurrencySubMenu}
            >
              <Box sx={{ margin: "auto 10px" }}>
                {currency && `${currency.flag}`}
              </Box>
              <Box
                sx={{
                  margin: "auto 10px",
                  fontWeight: "600",
                  fontSize: bodyTypographyStyles.defaultBold,
                }}
              >
                {currency.countryName}
              </Box>
            </MenuItem>
          );
        })}
      </Collapse>
    );
  }

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
              width: "33.3%",
              margin: "20px auto",
            }}
          >
            <SearchIcon />
          </IconButton>
          {selectedCurrency.currencyName && (
            <IconButton
              sx={{
                color: system_colors.primary,
                width: "33.3%",
                margin: "20px auto",
              }}
              onClick={handleCurrencySubMenu}
            >
              <Typography>{`${selectedCurrency.flag}`}</Typography>
            </IconButton>
          )}

          <IconButton
            sx={{
              color: system_colors.primary,
              width: "33.3%",
              margin: "20px auto",
            }}
            onClick={handleCartSubMenu}
          >
            <ShoppingCartIcon />{" "}
            {openCartSubMenu ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
        {cartDropdown()}
        {currencyDropdown()}
        {!openCartSubMenu && !openCurrencySubMenu && (
          <List>
            {navLinks.map((navLink) => {
              return (
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
          return (
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
        <IconButton
          sx={{
            color: system_colors.primary,
            margin: "auto 10px",
            fontSize: bodyTypographyStyles.largeBold,
          }}
          aria-controls={menuOpenCurrency ? "currency-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpenCurrency ? "true" : undefined}
          onClick={openCurrencyMenu}
        >
          {selectedCurrency.flag && `${selectedCurrency.flag}`}{" "}
        </IconButton>
        <Menu
          id={`currency-menu`}
          anchorEl={anchorElCurrency}
          open={menuOpenCurrency}
          onClose={closeCurrencyMenu}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          MenuListProps={{
            "aria-labelledby": "currency-button",
          }}
        >
          {popularCurrencies.map((currency) => {
            const index = popularCurrencies.indexOf(currency);

            return (
              <MenuItem
                key={index}
                sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                onClick={() => setCurrency(currency)}
              >
                {`${currency.currencyName.toUpperCase()}  ${currency.flag}`}
              </MenuItem>
            );
          })}
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

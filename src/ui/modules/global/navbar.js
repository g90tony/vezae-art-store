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
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { useSelector, useDispatch } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import {
  palette,
  palette as system_colors,
} from "../../../assets/styles/colors";
import {
  bodyTypographyStyles as body,
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../../assets/styles/typography";

import navLogo from "../../../assets/images/horizontal_logoHD.svg";
import { NavLink } from "react-router-dom";
import CartPopup from "../../components/cartPopup";
import { updateSelected } from "../../../state/slices/currencySelector";
import SearchInput from "../../components/searchInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: palette.secondary,
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    // {
    //   id: 5,
    //   text: "Home",
    //   path: "/",
    //   hasChildren: false,
    // },
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
    // {
    //   id: 2,
    //   text: "Gallery",
    //   path: "/gallery",
    //   hasChildren: false,
    // },
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
  const [openSearchSubMenu, setOpenSearchSubMenu] = React.useState(false);

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
    if (openCurrencySubMenu === true) {
      setOpenCurrencySubMenu(false);
    }
    setOpenCartSubMenu(!openCartSubMenu);
  };

  const handleCurrencySubMenu = () => {
    if (openCartSubMenu === true) {
      setOpenCartSubMenu(false);
    }

    setOpenCurrencySubMenu(!openCurrencySubMenu);
  };

  const handleSidebarSearch = () => {
    if (openSearchSubMenu === false) {
      setOpenSearchSubMenu(true);
    } else {
      setOpenSearchSubMenu(false);
    }
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

  function handleOpen() {
    setOpen(true);
    setDrawerState(false);
  }

  function handleClose() {
    setOpen(false);
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
              onClick={() => {
                setCurrency(currency);
                handleCurrencySubMenu();
              }}
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

  function sidebarSearch() {
    return (
      <div
        style={{
          display: openSearchSubMenu ? "flex" : "none",
          transition: "750ms ease-in-out",
        }}
      >
        <SearchInput
          fullWidth
          closeModal={handleClose}
          dismissModal={handleClose}
        />
      </div>
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
            onClick={handleSidebarSearch}
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
          </IconButton>
        </Box>
        {sidebarSearch()}
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
          display: "flex",
          padding: "10px",
          width: { xs: "100%", lg: "100%%" },
        }}
        component="div"
      >
        <NavLink
          to="/"
          style={{ width: "100%", display: "flex", flexDirection: "row" }}
        >
          <Box
            component="img"
            src={navLogo}
            style={{
              objectFit: "contain",
              width: "130px",
              margin: "10px",
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
        <IconButton
          onClick={handleOpen}
          sx={{ color: system_colors.primary, margin: "auto 10px" }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <IconButton
          sx={{
            color: system_colors.primary,
            padding: "5px 40px",
            fontSize: "1.25rem",
          }}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: headingTypographyStyles.h6,
              marginBottom: "10px",
            }}
          >
            Search products and collections:
          </Typography>
          <SearchInput
            fullWidth
            closeModal={handleClose}
            dismissModal={handleClose}
          />
        </Box>
      </Modal>
    </Grid>
  );
}

import {
  Badge,
  Button,
  Grid,
  Typography,
  IconButton,
  Input,
  FilledInput,
  OutlinedInput,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import React from "react";

import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function CartPopup(props) {
  const [cartItems, setCartItems] = React.useState([]);
  const [grandTotal, setGrandTotal] = React.useState(0);

  const calculateGrandTotal = React.useCallback(() => {
    let subTotal = 0;

    cartItems.forEach((item) => {
      subTotal = subTotal + item.price * item.count;
    });

    setGrandTotal(Math.round(subTotal * 100) / 100);
  }, [cartItems]);

  React.useEffect(() => {
    setCartItems(props.cart);
    calculateGrandTotal();
    return () => {
      setCartItems([]);
      calculateGrandTotal();
    };
  }, [props.cart, calculateGrandTotal]);

  function handleCartIncrease(e) {
    const currentItemIndex = e.target.id;

    console.log(e.target);
    let currentItem = cartItems[currentItemIndex];

    if (e.target.value < 1) {
      const newCart = cartItems;
      newCart.splice(currentItemIndex, 1);
      console.log(newCart);
      setCartItems(newCart);
      calculateGrandTotal();
    } else {
      currentItem.count = e.target.value;

      let allItems = cartItems;

      allItems[currentItemIndex] = currentItem;

      setCartItems(allItems);
      calculateGrandTotal();
    }
  }

  return (
    <Grid
      sx={{
        width: props.width,
        padding: "10px",
        backgroundColor: palette.secondary,
        display: "column",
        justifyContent: "flex-start",
        borderRadius: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "20%",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: headingTypographyStyles.h3,
            width: "100%",
            textAlign: "start",
          }}
        >
          Your Cart
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "60%",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "column",
            justifyContent: "flex-start",
            width: "100%",
            maxHeight: { xs: "350px", lg: "500px" },
            overflowY: "auto",
            overflowX: "hidden",
            margin: "20px 5px",
          }}
        >
          {cartItems.map((item) => {
            return (
              <Box
                key={cartItems.indexOf(item)}
                sx={{
                  display: "flex",
                  flexDirection: props.width === "80%" ? "column" : "row",
                  justifyContent:
                    props.width === "80%" ? "center" : "space-between",
                  width: "100%",
                  backgroundColor: palette.accentLight,
                  margin: "10px auto",
                }}
              >
                <Badge
                  sx={{
                    "& 	.MuiBadge-badge": {
                      backgroundColor: palette.primary,
                      color: palette.secondary,
                      fonSize: bodyTypographyStyles.smallBold,
                    },
                  }}
                >
                  <Box
                    sx={{
                      border: {
                        xs: "none",
                        lg: `1px ${palette.primary} solid`,
                      },
                      width: { xs: "100px", lg: "100px" },
                      heigh: { xs: "100px", lg: "100px" },
                      margin: { xs: "auto", lg: 0 },
                      padding: "10px",
                    }}
                  >
                    <img
                      style={{
                        width: props.width === "80%" ? "85px" : "100px",
                        height: props.width === "80%" ? "85px" : "100px",
                        objectFit: "contain",
                      }}
                      src={item.url}
                      alt={item.name}
                    />
                  </Box>
                </Badge>
                <Box
                  sx={{
                    width: "100%",
                    maxHeight: { xs: "100%", lg: "400px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                    padding: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: bodyTypographyStyles.largeBold,
                      width: "100%",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: bodyTypographyStyles.defaultExtraLight,
                      width: "100%",
                    }}
                  >
                    {item.size}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: bodyTypographyStyles.largeBold,
                        width: "100%",
                      }}
                    >
                      {item.price}
                    </Typography>

                    <OutlinedInput
                      sx={{
                        padding: 0,
                        width: "80px",
                        borderRadius: 0,
                        textAlign: "center",
                        fontSize: bodyTypographyStyles.largeBold,
                      }}
                      focused
                      type="number"
                      id={cartItems.indexOf(item)}
                      value={item.count}
                      onChange={handleCartIncrease}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography sx={{ fontSize: headingTypographyStyles.h4 }}>
          Grand Total:{" " + grandTotal}
        </Typography>
      </Box>
      <Button
        href="/shop/checkout"
        sx={{
          width: "100%",
          padding: "10px",
          backgroundColor: palette.primary,
          color: palette.secondary,
          "&:hover": {
            backgroundColor: palette.secondary,
            color: palette.primary,
            border: `1px ${palette.primary} solid`,
          },
          borderRadius: 0,
          fontSize: bodyTypographyStyles.defaultBold,
        }}
      >
        Check Out
      </Button>
    </Grid>
  );
}

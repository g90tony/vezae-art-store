import { Badge, Button, Grid, Typography, IconButton } from "@mui/material";
import RemoveCircleSharp from "@mui/icons-material/RemoveCircleSharp";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../state/slices/cartSlice";

import { palette } from "../../assets/styles/colors";

import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function CartPopup(props) {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => {
    return state.cart.items;
  });

  function handleRemoveItemFromCart(item) {
    const data = {
      id: item.product_id,
      size: item.size,
    };
    console.log(data);
    dispatch(removeCartItem(data));
  }

  const [grandTotal, setGrandTotal] = React.useState(0);

  React.useEffect(() => {
    let total = 0;

    if (cartState.length > 0) {
      cartState.forEach((item) => {
        total = total + item.price * item.count;
      });
    }

    setGrandTotal(total);

    return () => {
      setGrandTotal(0);
    };
  }, [cartState]);

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
          {cartState.length > 0 ? (
            cartState.map((item) => {
              return (
                <Box
                  key={cartState.indexOf(item)}
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
                        src={item.image}
                        alt={item.title}
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
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: bodyTypographyStyles.defaultExtraLight,
                        width: "100%",
                      }}
                    >
                      <span
                        style={{ fontSize: bodyTypographyStyles.defaultBold }}
                      >
                        Size:
                      </span>
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

                      <IconButton
                        sx={{
                          padding: 0,
                          borderRadius: 0,
                          textAlign: "center",
                          fontSize: bodyTypographyStyles.largeBold,
                        }}
                        onClick={() => handleRemoveItemFromCart(item)}
                      >
                        <RemoveCircleSharp color="error" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              );
            })
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "50px",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: bodyTypographyStyles.smallBold,
                  // margin: "auto",
                  width: "100%",
                  textAlign: "center",
                  color: "#a0a0a0",
                }}
              >
                There are no items in your cart
              </Typography>{" "}
            </Box>
          )}
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
          Grand Total: {grandTotal}
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

import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Badge,
  Grid,
  Typography,
  Divider,
  IconButton,
  Button,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { palette } from "../../assets/styles/colors";

import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";
import {
  increaseCartItemQuantity,
  reduceCartItemQuantity,
  removeCartItem,
} from "../../state/slices/cartSlice";
import CheckoutCreditCard from "../modules/shop/checkoutCreditCard";
import CheckoutShippingAddress from "../modules/shop/checkoutShippingAddress";
import PriceConverter from "./priceConverter";

export default function CartCheckout(props) {
  const cartItems = useSelector((state) => state.cart.items);

  const [grandTotal, setGrandTotal] = React.useState(0);
  const [tax, setTax] = React.useState();

  const [shippingAddress, setShippingAddress] = React.useState();
  const [cardDetails, setCardDetails] = React.useState();
  const [cardType, setCardType] = React.useState("");

  const [shippingModal, setShippingModal] = React.useState(false);
  const [cardModal, setCardModal] = React.useState(false);

  const [viewDetails, setViewDetails] = React.useState(false);

  const dispatch = useDispatch();

  const calculateGrandTotal = React.useCallback(() => {
    let subTotal = 0;

    cartItems.forEach((item) => {
      subTotal = subTotal + item.price * item.count;
    });

    setGrandTotal(Math.round(subTotal * 100) / 100);
  }, [cartItems]);

  function addItemQuantity(item) {
    const index = cartItems.indexOf(item);

    dispatch(increaseCartItemQuantity(index));
  }

  function reduceItemQuantity(item) {
    const index = cartItems.indexOf(item);

    dispatch(reduceCartItemQuantity(index));
  }

  function removeItem(item) {
    const index = cartItems.indexOf(item);

    dispatch(removeCartItem(index));
  }

  function handleCloseShippingModal() {
    setShippingModal(false);
  }

  function handleCloseCreditModal() {
    setCardModal(false);
  }

  const getCardType = React.useCallback(function (number) {
    const numbers_ = number.split(" ");

    const card_number = numbers_[0];

    if (card_number[0] === "4") {
      setCardType(process.env.PUBLIC_URL + "/images/cards/visa.png");
    } else if (card_number[0] === "5") {
      setCardType(process.env.PUBLIC_URL + "/images/cards/mastercard.png");
    } else if (card_number[0] === "6") {
      setCardType(process.env.PUBLIC_URL + "/images/cards/discovercard.png");
    } else if (card_number[0] === "3") {
      // if (card_number[1] === "7") {
      // } else
      if (card_number[1] === "8") {
        setCardType(process.env.PUBLIC_URL + "/images/cards/dinersclub.png");
      }
    }

    return "unknown";
  }, []);

  React.useEffect(() => {
    if (cardDetails !== undefined) {
      getCardType(cardDetails.number);
    }
    return () => {};
  }, [cardDetails, getCardType]);

  React.useEffect(() => {
    calculateGrandTotal();

    return () => {
      calculateGrandTotal();
    };
  }, [cartItems, calculateGrandTotal]);

  return (
    <Grid
      sx={{
        width: { xs: "100%", lg: props.width },
        padding: "30px",
        backgroundColor: palette.secondary,
        display: "column",
        justifyContent: "flex-start",
        height: "100%",
        borderRadius: 0,
        // marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            fontSize: headingTypographyStyles.h1,
            width: "100%",
            textAlign: "start",
            marginBottom: "10px",
          }}
        >
          Checkout Summary
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          // display: { xs: "none", lg: "flex" },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          flexWrap: "nowrap",
          width: "100%",
          height: { xs: "100%", lg: "60vh" },
          justifyContent: "flex-start",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: { xs: viewDetails ? "none" : "flex", lg: "flex" },
            flexDirection: "column",
            justifyContent: "flex-start",
            width: { xs: "100%", lg: "50%" },
            height: { xs: "50vh", lg: "100%" },

            overflowY: "auto",
            overflowX: "hidden",
            margin: "0 5px",
          }}
        >
          {cartItems.map((item) => {
            return (
              <Box
                key={cartItems.indexOf(item)}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", lg: "row" },
                  justifyContent: "flex-start",
                  width: "100%",
                  backgroundColor: palette.accentLight,
                  margin: "10px 0",
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
                      border: 0,
                      width: { xs: "200px", lg: "85px" },
                      height: { xs: "200px", lg: "85px" },
                      margin: { xs: "auto", lg: 0 },
                      padding: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      style={{
                        width: { xs: "200px", lg: "85px" },
                        height: { xs: "200px", lg: "85px" },
                        margin: "auto",
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
                    Size: {item.size}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", lg: "row" },
                      width: "100%",
                      justifyContent: "flex-start",
                      alignItems: { xs: "flex-start", lg: "center" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: bodyTypographyStyles.defaultExtraLight,
                        width: "fit-content",
                        textAlign: "start",
                      }}
                    >
                      Item Cost:{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: bodyTypographyStyles.largeBold,
                        width: "fit-content",
                      }}
                    >
                      <PriceConverter selectedSize={{ price: item.price }} />
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "flex-end",
                      width: "100%",
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: palette.secondary,
                        margin: "5px",
                        padding: "2px",
                      }}
                      onClick={() => addItemQuantity(item)}
                    >
                      <Add
                        sx={{
                          fontSize: bodyTypographyStyles.extraLargeBold,
                          color: palette.primary,
                          margin: "auto 5px",
                        }}
                      />
                    </IconButton>
                    <Typography sx={{ fontSize: headingTypographyStyles.h2 }}>
                      {item.count}
                    </Typography>
                    <IconButton
                      onClick={() => reduceItemQuantity(item)}
                      sx={{
                        backgroundColor: palette.secondary,
                        margin: "5px",
                        padding: "2px",
                      }}
                    >
                      {" "}
                      <Remove
                        sx={{
                          fontSize: bodyTypographyStyles.extraLargeBold,
                          color: palette.primary,
                        }}
                      />{" "}
                    </IconButton>
                    <IconButton onClick={() => removeItem(item)}>
                      <Delete color="error" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: { xs: viewDetails ? "flex" : "none", lg: "flex" },

            flexDirection: "column",
            justifyContent: "flex-start",
            height: { xs: "50vh", lg: "100%" },
            width: { xs: "100%", lg: "50%" },
            overflowY: "auto",
            overflowX: "hidden",
            margin: "0 5px",
            padding: "10px",
          }}
        >
          <Typography sx={{ fontSize: headingTypographyStyles.h2 }}>
            Checkout Details
          </Typography>
          <Divider />
          <Box sx={{ marginTop: "40px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                margin: "20px 10px 20px 10px",
              }}
            >
              <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                Items Sub Total:
              </Typography>
              <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                <PriceConverter selectedSize={{ price: grandTotal }} />
              </Typography>
            </Box>
            <Divider sx={{ width: "75%", margin: "auto" }} />{" "}
            {shippingAddress && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    margin: "20px 10px 20px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                    Taxes:
                  </Typography>

                  <Typography
                    sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                  >
                    {tax}
                  </Typography>
                </Box>
                <Divider sx={{ width: "75%", margin: "auto" }} />
              </>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                margin: "20px 10px 20px 10px",
              }}
            >
              <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                Shipping Address :
              </Typography>
              {shippingAddress ? (
                <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                  {`${shippingAddress.address1}, ${shippingAddress.city}, ${shippingAddress.province}, ${shippingAddress.country}`}
                </Typography>
              ) : (
                <>
                  <Button
                    sx={{
                      fontSize: bodyTypographyStyles.smallBold,
                      backgroundColor: "#efefef",
                      color: palette.primary,
                      "&:hover": {
                        backgroundColor: palette.primary,
                        color: palette.secondary,
                      },
                      padding: "10px",
                      marginBottom: "10px",
                      margin: "5px",
                      borderRadius: 0,
                    }}
                    onClick={() => setShippingModal(true)}
                  >
                    Enter Shipping Address
                  </Button>
                  <Modal
                    open={shippingModal}
                    sx={{
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        position: "fixed",
                        backgroundColor: palette.secondary,
                        width: "80%",
                        top: 50,
                        left: "10%",
                        padding: "10px",
                      }}
                    >
                      <CheckoutShippingAddress
                        saveAddress={setShippingAddress}
                        handleCloseShippingModal={handleCloseShippingModal}
                      />
                    </Box>
                  </Modal>
                </>
              )}
            </Box>
            <Divider sx={{ width: "75%", margin: "auto" }} />
            {shippingAddress && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    margin: "20px 10px 20px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                    Shipping:
                  </Typography>
                  <Typography
                    sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                  >
                    FREE
                  </Typography>
                </Box>
                <Divider sx={{ width: "75%", margin: "auto" }} />
              </>
            )}
            {shippingAddress && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    margin: "20px 10px 20px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                    Payment Method:
                  </Typography>
                  {cardDetails ? (
                    <Typography
                      sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                    >
                      {/* {cardDetails && cardDetails.type} */}
                      {cardDetails && (
                        <Box
                          component={"img"}
                          src={cardType}
                          sx={{
                            maxWidth: "50px",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      )}
                    </Typography>
                  ) : (
                    <>
                      <Button
                        sx={{
                          fontSize: bodyTypographyStyles.smallBold,
                          backgroundColor: "#efefef",
                          color: palette.primary,
                          "&:hover": {
                            backgroundColor: palette.primary,
                            color: palette.secondary,
                          },
                          padding: "10px",
                          marginBottom: "10px",
                          margin: "5px",
                          borderRadius: 0,
                        }}
                        onClick={() => setCardModal(true)}
                      >
                        Enter Card Details
                      </Button>
                      <Modal
                        open={cardModal}
                        sx={{
                          position: "relative",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            position: "fixed",
                            backgroundColor: palette.secondary,
                            width: "50%",
                            top: 100,
                            left: "25%",
                            padding: "10px",
                          }}
                        >
                          <CheckoutCreditCard
                            handleCreditModalClose={handleCloseCreditModal}
                            saveCard={setCardDetails}
                          />
                        </Box>
                      </Modal>
                    </>
                  )}
                </Box>
                <Divider sx={{ width: "75%", margin: "auto" }} />
              </>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                margin: "20px 10px 20px 10px",
              }}
            >
              <Typography sx={{ fontSize: headingTypographyStyles.h2 }}>
                Total Amount :
              </Typography>
              <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                <PriceConverter selectedSize={{ price: grandTotal }} view />
              </Typography>
            </Box>
            <Divider sx={{ width: "75%", margin: "auto" }} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "flex-end",
        }}
      >
        {viewDetails ? (
          <Button
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              backgroundColor: palette.primary,
              color: palette.secondary,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              "&:disabled": {
                backgroundColor: "#efefef",
                color: "#cfcfcf",
              },
              padding: "10px",
              marginBottom: "10px",
              margin: "5px",
              borderRadius: 0,
            }}
            disabled={!shippingAddress && !cardDetails}
          >
            Complete Checkout
          </Button>
        ) : (
          <Button
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              backgroundColor: palette.primary,
              color: palette.secondary,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              "&:disabled": {
                backgroundColor: "#efefef",
                color: "#cfcfcf",
              },
              padding: "10px",
              marginBottom: "10px",
              margin: "5px",
              borderRadius: 0,
            }}
            onClick={() => setViewDetails(true)}
          >
            Proceed to Details
          </Button>
        )}
        {viewDetails ? (
          <Button
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              backgroundColor: palette.secondary,
              color: palette.primary,
              "&:hover": {
                backgroundColor: palette.primary,
                color: palette.secondary,
              },
              padding: "10px",
              marginBottom: "10px",
              margin: "5px",
              borderRadius: 0,
            }}
            onClick={() => setViewDetails(false)}
          >
            Back Cart
          </Button>
        ) : (
          <Button
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              backgroundColor: palette.secondary,
              color: palette.primary,
              "&:hover": {
                backgroundColor: palette.primary,
                color: palette.secondary,
              },
              padding: "10px",
              marginBottom: "10px",
              margin: "5px",
              borderRadius: 0,
            }}
          >
            Back to Shop
          </Button>
        )}
      </Box>
    </Grid>
  );
}

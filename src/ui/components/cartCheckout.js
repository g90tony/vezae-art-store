/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Badge,
  Grid,
  Typography,
  Divider,
  IconButton,
  Button,
  Modal,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Alert,
  Backdrop,
} from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createCheckoutSession,
  fetchItemsCheckoutIDs,
  updateCheckoutSessionItems,
} from "../../api/checkout";
import { processCard, processPayment } from "../../api/payments";

import { palette } from "../../assets/styles/colors";

import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";
import {
  emptyCart,
  increaseCartItemQuantity,
  reduceCartItemQuantity,
  removeCartItem,
} from "../../state/slices/cartSlice";

import {
  emptyCheckout,
  loadCheckout,
  updateLineItems,
  updateShippingAddress,
} from "../../state/slices/checkoutSlice";
import {
  emptyPayment,
  preparePayment,
  process,
  updateBillingAddress,
} from "../../state/slices/paymentSlice";

import CheckoutBillingAddress from "../modules/shop/checkoutBillingAddress";
import CheckoutCreditCard from "../modules/shop/checkoutCreditCard";
import CheckoutShippingAddress from "../modules/shop/checkoutShippingAddress";
import PriceConverter from "./priceConverter";

export default function CartCheckout(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const checkoutState = useSelector((state) => state.checkout);
  const selectedCurrency = useSelector(
    (state) => state.currencySelector.selectedCurrency
  );
  const paymentState = useSelector((state) => state.payment);

  const [grandTotal, setGrandTotal] = React.useState(0);
  const [productsTotal, setProductsTotal] = React.useState(0);
  const [processingPayment, setProcessingPayment] = React.useState(false);
  const [cartUpdate, setCartUpdate] = React.useState(false);
  const [tax, setTax] = React.useState(0);

  const [shippingAddress, setShippingAddress] = React.useState();
  const [billingAddress, setBillingAddress] = React.useState();
  const [cardDetails, setCardDetails] = React.useState();
  const [cardType, setCardType] = React.useState("");

  const [paidSuccess, setPaidSuccess] = React.useState(null);

  const [shippingModal, setShippingModal] = React.useState(false);
  const [billingModal, setBillingModal] = React.useState(false);
  const [diffAddress, setDiffAddress] = React.useState(false);

  const [cardModal, setCardModal] = React.useState(false);

  const [viewDetails, setViewDetails] = React.useState(false);

  const dispatch = useDispatch();
  let history = useNavigate();

  const calculateGrandTotal = React.useCallback(() => {
    let subTotal = 0;

    subTotal = productsTotal + tax;

    setGrandTotal(Math.round(subTotal * 100) / 100);
  }, [productsTotal, tax]);

  async function getCheckoutSession(checkoutIDs) {
    let response;

    const countryCode = selectedCurrency.currencyName;

    try {
      response = await createCheckoutSession(checkoutIDs, countryCode);
    } catch (error) {
      console.error(
        "There was a problem creating the checkout session",
        response
      );
    }

    const createdCheckout = response.checkout;

    if (createdCheckout) {
      setTax(parseInt(createdCheckout.totalTaxV2.amount));
      setProductsTotal(parseInt(createdCheckout.lineItemsSubtotalPrice.amount));

      const checkoutItemIds = createdCheckout.lineItems.edges.map((node) => {
        return node.node.id;
      });

      const payload = {
        id: createdCheckout.id,
        checkoutItemIds,
        itemsSubTotal: createdCheckout.lineItemsSubtotalPrice,
        tax: createdCheckout.totalTaxV2,
      };

      dispatch(loadCheckout(payload));
    }
  }
  async function updateCheckoutSession(checkoutIDs) {
    let response;

    try {
      response = await updateCheckoutSessionItems(
        checkoutIDs,
        checkoutState.checkout.checkoutItemIds,
        checkoutState.id
      );
    } catch (error) {
      console.error("There was a problem creating the checkout session", error);
    }

    const updateCheckout = response.checkout;

    if (updateCheckout) {
      setTax(parseInt(updateCheckout.totalTaxV2.amount));
      setProductsTotal(parseInt(updateCheckout.lineItemsSubtotalPrice.amount));

      const checkoutItemIds = updateCheckout.lineItems.edges.map((node) => {
        return node.node.id;
      });

      const payload = {
        id: updateCheckout.id,
        firstName: checkoutState.firstName
          ? checkoutState.firstName
          : undefined,
        lastName: checkoutState.lastName ? checkoutState.lastName : undefined,
        email: checkoutState.email ? checkoutState.email : undefined,
        checkout: {
          checkoutItemIds,
          shippingAddress: checkoutState.checkout.shippingAddress
            ? checkoutState.checkout.shippingAddress
            : undefined,
          itemsSubTotal: updateCheckout.lineItemsSubtotalPrice,
          tax: updateCheckout.totalTaxV2,
        },
      };

      dispatch(updateLineItems(payload));

      setCartUpdate(false);
    }
  }

  async function getCheckoutProductIds(type) {
    let response;

    const state_items = localStorage.getItem("cartItems");

    if (state_items) {
      const cart = JSON.parse(state_items);

      try {
        response = await fetchItemsCheckoutIDs(cart);
      } catch (error) {
        console.error("There was a problem updating the cart", response.status);
      }
      if (response) {
        const checkoutIds = response.checkoutIds;

        type === "create"
          ? getCheckoutSession(checkoutIds)
          : updateCheckoutSession(checkoutIds);
      }
    }
  }

  async function getPreparedCard() {
    const expiry = cardDetails.month.split("/");

    const cardMonth = expiry[0];
    const cardYear = expiry[1];

    const credit_card = {
      id: checkoutState.id,
      firstName: shippingAddress.firstName,
      lastName: shippingAddress.lastName,
      number: cardDetails.number,
      month: cardMonth,
      year: cardYear,
      verification_value: cardDetails.verification_value,
    };

    let response;

    try {
      response = await processCard(credit_card);
    } catch (error) {
      console.error("There was a problem preparing the card", error);
    }

    if (response) {
      console.log(response);
      dispatch(preparePayment(response.id));
    }
  }

  async function addItemQuantity(item) {
    const index = cartItems.indexOf(item);
    setCartUpdate(true);

    dispatch(increaseCartItemQuantity(index));

    getCheckoutProductIds("update");
  }

  function reduceItemQuantity(item) {
    setCartUpdate(true);

    const index = cartItems.indexOf(item);

    dispatch(reduceCartItemQuantity(index));
    getCheckoutProductIds("update");
  }

  function removeItem(item) {
    setCartUpdate(true);

    const index = cartItems.indexOf(item);

    dispatch(removeCartItem(index));
    getCheckoutProductIds("update");
  }

  function handleCloseShippingModal() {
    setShippingModal(false);
  }

  function handleCloseBillingModal() {
    setBillingModal(false);
  }

  function handleCloseCreditModal() {
    setCardModal(false);
  }

  async function handlePayment() {
    let response;
    setProcessingPayment(true);

    const billAddress = diffAddress
      ? paymentState.billingAddress
      : checkoutState.checkout.shippingAddress;

    try {
      response = await processPayment(
        checkoutState.id,
        grandTotal,
        checkoutState.email,
        billAddress,
        paymentState.id
      );
    } catch (error) {
      console.error("There was a problem processing the payment", error);
    }

    if (response) {
      setProcessingPayment(false);
      setPaidSuccess(true);

      dispatch(emptyCart());
      dispatch(emptyCheckout());
      dispatch(emptyPayment());
    } else {
      setPaidSuccess(false);
    }

    setTimeout(() => {
      setPaidSuccess(null);
    }, 3000);

    if (response) {
      setTimeout(() => {
        history("/");
      }, 1000);
    }
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
    const { tax, lineTotal } = props;
    if ((tax, lineTotal)) {
      setTax(tax);
      setProductsTotal(lineTotal);
    }

    calculateGrandTotal();

    return () => {
      calculateGrandTotal();
    };
  }, [cartItems, calculateGrandTotal, tax, productsTotal, props]);

  React.useEffect(() => {
    if (checkoutState && checkoutState.id && checkoutState.checkout) {
      setTax(parseInt(checkoutState.checkout.tax.amount));
      setProductsTotal(parseInt(checkoutState.checkout.itemsSubTotal.amount));
    } else {
      if (props.width) {
        getCheckoutProductIds("create");
      }
    }

    if (checkoutState.checkout) {
      setShippingAddress({
        address1: checkoutState.checkout.shippingAddress.address1,
        city: checkoutState.checkout.shippingAddress.city,
        company: checkoutState.checkout.shippingAddress.company,
        country: checkoutState.checkout.shippingAddress.country,
        province: checkoutState.checkout.shippingAddress.province,
        zip: checkoutState.checkout.shippingAddress.zip,
        email: checkoutState.email,
        firstName: checkoutState.firstName,
        lastName: checkoutState.lastName,
      });
    }

    if (paymentState && paymentState.billingAddress) {
      setBillingAddress({
        address1: paymentState.billingAddress.address1,
        city: paymentState.billingAddress.city,
        company: paymentState.billingAddress.company,
        country: paymentState.billingAddress.country,
        province: paymentState.billingAddress.province,
        zip: paymentState.billingAddress.zip,
      });

      // setDiffAddress(false);
    }

    return () => {
      setBillingAddress(undefined);
    };
  }, []);

  React.useEffect(() => {
    if (
      shippingAddress &&
      checkoutState.checkout &&
      checkoutState.checkout.shippingAddress === undefined
    ) {
      const payload = {
        id: checkoutState.id,
        email: shippingAddress.email,
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        checkout: {
          tax: checkoutState.checkout.tax,
          itemsSubTotal: checkoutState.checkout.itemsSubTotal,
          shippingAddress: {
            address1: shippingAddress.address1,
            city: shippingAddress.city,
            company: shippingAddress.company,
            country: shippingAddress.country,
            province: shippingAddress.province,
            zip: shippingAddress.zip,
          },
        },
      };

      dispatch(updateShippingAddress(payload));
    }
  }, [shippingAddress]);

  React.useEffect(() => {
    if (billingAddress && paymentState && !paymentState.billingAddress) {
      const payload = {
        id: paymentState.id,
        billingAddress: {
          address1: billingAddress.address1,
          city: billingAddress.city,
          company: billingAddress.company,
          country: billingAddress.country,
          province: billingAddress.province,
          zip: billingAddress.zip,
        },
      };

      dispatch(updateBillingAddress(payload));
    }
  }, [billingAddress]);

  React.useEffect(() => {
    if (cardDetails && paymentState.id === undefined) {
      getPreparedCard();

      // dispatch(updateShippingAddress(credit_card));
    }
  }, [cardDetails]);

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
      <Modal
        disableEnforceFocus
        open={paidSuccess === true ? true : false}
        sx={{
          height: "100%",
          width: "100%",
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            // backgroundColor: palette.primary,
            width: "auto",
            top: 10,
            right: 0,
            padding: "10px",
          }}
        >
          <Alert
            action={
              <Button
                sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                color="inherit"
                size="small"
                onClick={() => setPaidSuccess(null)}
              >
                Dismiss
              </Button>
            }
          >
            Payment was successful
          </Alert>
        </Box>
      </Modal>
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
                      margin: { xs: "auto", lg: 0 },
                      padding: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        display: { xs: "none", lg: "block" },
                        width: "85px",
                        height: "85px",
                        margin: "auto",
                        objectFit: "contain",
                      }}
                      src={item.image}
                      alt={item.title}
                    />
                    <Box
                      component="img"
                      sx={{
                        display: { xs: "block", lg: "none" },
                        width: "200px",
                        height: "200px",
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
          <Box sx={{ marginTop: "40px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                margin: "0 10px 20px 10px",
              }}
            >
              <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                Items Sub Total:
              </Typography>
              {cartUpdate ? (
                <CircularProgress size={20} sx={{ color: "#000" }} />
              ) : (
                <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                  {grandTotal}
                </Typography>
              )}
            </Box>
            <Divider sx={{ width: "75%", margin: "auto" }} />{" "}
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
              {shippingAddress !== undefined ? (
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "20px 10px 20px 10px",
              }}
            >
              {" "}
              <Box
                sx={{ display: billingAddress !== undefined ? "flex" : "none" }}
                direction="column"
              >
                <FormControlLabel
                  label={
                    <Typography
                      sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                    >
                      Is your billing address the same as shipping"
                    </Typography>
                  }
                  control={
                    <Checkbox
                      value={diffAddress}
                      checked={!diffAddress}
                      onChange={() => {
                        setDiffAddress(!diffAddress);
                      }}
                      sx={{
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  }
                />
              </Box>
              {diffAddress && (
                <Box
                  d
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    margin: "20px 10px 20px 10px",
                  }}
                >
                  <Typography sx={{ fontSize: headingTypographyStyles.h6 }}>
                    Billing Address :
                  </Typography>
                  {billingAddress.address1 ? (
                    <Typography
                      sx={{ fontSize: bodyTypographyStyles.defaultBold }}
                    >
                      {`${billingAddress.address1}, ${billingAddress.city}, ${billingAddress.province}, ${billingAddress.country}`}
                    </Typography>
                  ) : (
                    <Box direction="column">
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
                        onClick={() => setBillingModal(true)}
                      >
                        Enter Billing Address
                      </Button>
                      <Modal
                        open={billingModal}
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
                          <CheckoutBillingAddress
                            saveAddress={setBillingAddress}
                            handleCloseShippingModal={handleCloseBillingModal}
                          />
                        </Box>
                      </Modal>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
            <Divider sx={{ width: "75%", margin: "auto" }} />
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
                <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                  FREE
                </Typography>
              </Box>
              <Divider sx={{ width: "75%", margin: "auto" }} />
            </>
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
                            width: { xs: "80%", lg: "50%" },
                            top: 100,
                            left: { xs: "9%", lg: "25%" },
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

                <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
                  {tax !== undefined && tax}
                </Typography>
              </Box>
              <Divider sx={{ width: "75%", margin: "auto" }} />
            </>
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
              {cartUpdate ? (
                <CircularProgress size={30} sx={{ color: "#000" }} />
              ) : (
                <Typography sx={{ fontSize: headingTypographyStyles.h4 }}>
                  {grandTotal}
                </Typography>
              )}
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
          marginTop: "20px",
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
            disabled={
              !shippingAddress &&
              !cardDetails &&
              (billingAddress !== undefined || diffAddress)
            }
            onClick={handlePayment}
          >
            {processingPayment ? (
              <CircularProgress size={20} sx={{ color: palette.secondary }} />
            ) : (
              "Complete Checkout"
            )}
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
            onClick={() => history("/")}
          >
            Back to Shop
          </Button>
        )}
      </Box>
    </Grid>
  );
}

import React from "react";

import {
  bodyTypographyStyles as body,
  headingTypographyStyles as heading,
} from "../../../assets/styles/typography";

import { Box } from "@mui/system";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { palette, message } from "../../../assets/styles/colors";

import {
  Button,
  Collapse,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  OutlinedInput,
  Typography,
} from "@mui/material";

export default function CheckoutDetailsCard() {
  const [mobileToggle, setMobileToggle] = React.useState(false);

  // filters data
  const [billingAddress, setBillingAddress] = React.useState({
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    zip: "",
  });

  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [zip, setZip] = React.useState("");

  const [shippingAddress, setShippingAddress] = React.useState({
    address1: "",
    address2: "",
    city: "",
    company: "",
    country: "",
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    zip: "",
  });
  const [cardDetails, setCardDetails] = React.useState({
    number: "",
    first_name: "",
    last_name: "",
    month: "",
    year: "",
    verification_value: "",
  });

  const [billingAddressToggle, setBillingAddressToggle] = React.useState(false);
  const [shippingAddressToggle, setShippingAddressToggle] =
    React.useState(false);
  const [cardDetailsToggle, setCardDetailsToggle] = React.useState(false);

  function renderAddressForm() {
    return (
      <>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            }
            label="First Name"
          />
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            }
            label="Last Name"
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 20px",
              width: "100%",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                fullWidth
                value={address1}
                onChange={(e) => {
                  setAddress1(e.target.value);
                }}
              />
            }
            label="Address 1"
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 20px",
              width: "100%",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={address2}
                fullWidth
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
              />
            }
            label="Address 2"
          />
        </FormGroup>

        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 20px",
              width: "100%",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                fullWidth
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            }
            label="Company"
          />
        </FormGroup>

        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            }
            label="Country"
          />{" "}
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            }
            label="City"
          />{" "}
        </FormGroup>

        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                }}
              />
            }
            label="Province"
          />
          <FormControlLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px auto",
              padding: "0px 5px",
              "& .MuiFormControlLabel-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            control={
              <OutlinedInput
                size="small"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value);
                }}
              />
            }
            label="ZIP"
          />
        </FormGroup>
      </>
    );
  }

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <List
        sx={{
          padding: "10px",
          width: "100%",
          margin: "auto",
          backgroundColor: palette.secondary,
          display: { xs: "flex", lg: "none" },
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "10px auto",
              width: "100%",
            }}
          >
            <ListSubheader
              component="div"
              sx={{
                fontSize: heading.h4,
                color: palette.primary,
                width: "100%",
                textAlign: "center",
              }}
              id="nested-list-subheader"
            >
              Checkout Details
            </ListSubheader>
            <Button
              onClick={() => setMobileToggle(!mobileToggle)}
              sx={{
                fontSize: body.smallBold,
                width: "80%",
                margin: "10px auto",
                padding: "5px 7px",
                backgroundColor: palette.primary,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: palette.accentLight,
                  color: palette.primary,
                },
              }}
            >
              {!mobileToggle ? "Open Menu" : "Close Menu"}
            </Button>
            {/* <Button
              sx={{
                fontSize: body.smallBold,
                width: "80%",
                margin: "0 auto",
                padding: "5px 7px",
                backgroundColor: palette.accentDark,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: message.warning,
                  color: palette.secondary,
                },
              }}
              onClick={handleClear}
            >
              Clear Filters
            </Button> */}
          </Box>
        }
      >
        <Collapse
          in={mobileToggle}
          component="div"
          sx={{
            padding: "10px",
            backgroundColor: palette.accentLight,
            margin: "0 10px 10px 10px",
          }}
          timeout="auto"
          unmountOnExit
        >
          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
              padding: "10px",
            }}
            onClick={() => setBillingAddressToggle(!billingAddressToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Billing Address
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {billingAddressToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={billingAddressToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                // padding: "5px",
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              {renderAddressForm()}
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px auto 0 auto",
            }}
            onClick={() => setCardDetailsToggle(!cardDetailsToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Card Details
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {cardDetailsToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={cardDetailsToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.first_name}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.first_name = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label={"First Name"}
                />
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.last_name}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.last_ame = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label={"Last Name"}
                />
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.month}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.month = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label={"Month"}
                />
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.number}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.number = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label="Number"
                />
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.verification_value}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.verification_value = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label="Verification Value"
                />
                <FormControlLabel
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: "10px auto",
                    padding: "0px 5px",
                    width: "100%",
                    "& .MuiFormControlLabel-label": {
                      fontSize: body.defaultBold,
                      fontWeight: 800,
                      textAlign: "start",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    },
                  }}
                  control={
                    <OutlinedInput
                      size="small"
                      value={cardDetails.year}
                      onChange={(e) => {
                        const cardData = cardDetails;
                        cardData.year = e.target.value;
                        setCardDetails(cardData);
                      }}
                    />
                  }
                  label="Year"
                />
              </FormGroup>
            </List>
          </Collapse>

          <Button
            size="small"
            // onClick={handleApply}
            sx={{
              padding: "5px 20px",
              width: "100%",
              margin: "0 auto",
              fontWeight: 800,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              backgroundColor: palette.primary,
              color: palette.secondary,
            }}
          >
            Checkout
          </Button>
        </Collapse>
      </List>
      <List
        sx={{
          padding: "10px",
          width: "100%",
          margin: "auto",
          backgroundColor: palette.secondary,
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            sx={{
              fontSize: heading.h4,
              color: palette.primary,
              width: "100%",
              textAlign: "start",
            }}
            id="nested-list-subheader"
          >
            Checkout Details
          </ListSubheader>
        }
      >
        <Collapse
          in={true}
          component="div"
          sx={{
            padding: "10px",
            backgroundColor: palette.accentLight,
            margin: "0 10px 10px 10px",
          }}
          timeout="auto"
          unmountOnExit
        >
          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
              padding: "10px",
            }}
            onClick={() => setBillingAddressToggle(!billingAddressToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Billing Address
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {billingAddressToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={billingAddressToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                // padding: "5px",
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              {renderAddressForm()}
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px 10px 0 10px",
              padding: "10px",
            }}
            onClick={() => setShippingAddressToggle(!shippingAddressToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Shipping Address
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {shippingAddressToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={shippingAddressToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                // padding: "5px",
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              {renderAddressForm()}
            </List>
          </Collapse>

          <ListItemButton
            sx={{
              backgroundColor: palette.accentLight,
              margin: "10px auto 0 auto",
            }}
            onClick={() => setCardDetailsToggle(!cardDetailsToggle)}
          >
            <ListItemText
              sx={{}}
              primary={
                <Typography
                  sx={{
                    padding: "5px 20px",
                    fontSize: body.defaultBold,
                    fontWeight: 800,
                  }}
                >
                  Credit Card Details
                </Typography>
              }
            />
            <Typography
              sx={{
                padding: "10px",
                fontSize: body.extraLargeBold,
                fontWeight: 800,
              }}
            >
              {cardDetailsToggle ? <ExpandLess /> : <ExpandMore />}
            </Typography>
          </ListItemButton>
          <Collapse
            in={cardDetailsToggle}
            sx={{
              padding: "0px",
              backgroundColor: palette.accentLight,
              margin: "0 0px 10px 0px",
            }}
            timeout="auto"
            unmountOnExit
          >
            <List
              component="div"
              sx={{
                backgroundColor: palette.secondary,
                // padding: "10px",
              }}
            >
              <>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.first_name}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.first_name = e.target.value;
                          setCardDetails(cardData);
                        }}
                      />
                    }
                    label={"First Name"}
                  />
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.last_name}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.last_ame = e.target.value;
                          setCardDetails(cardData);
                        }}
                        label={"Last Name"}
                      />
                    }
                  />{" "}
                </FormGroup>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    width: "100%",
                  }}
                >
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.month}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.month = e.target.value;
                          setCardDetails(cardData);
                        }}
                      />
                    }
                    label={"Month"}
                  />
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.number}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.number = e.target.value;
                          setCardDetails(cardData);
                        }}
                      />
                    }
                    label="Number"
                  />{" "}
                </FormGroup>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.verification_value}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.verification_value = e.target.value;
                          setCardDetails(cardData);
                        }}
                      />
                    }
                    label="Verification Value"
                  />
                  <FormControlLabel
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      margin: "10px auto",
                      padding: "0px 5px",
                      "& .MuiFormControlLabel-label": {
                        fontSize: body.defaultBold,
                        fontWeight: 800,
                        textAlign: "start",
                      },
                    }}
                    control={
                      <OutlinedInput
                        size="small"
                        value={cardDetails.year}
                        onChange={(e) => {
                          const cardData = cardDetails;
                          cardData.year = e.target.value;
                          setCardDetails(cardData);
                        }}
                      />
                    }
                    label="Year"
                  />
                </FormGroup>{" "}
              </>
            </List>
          </Collapse>

          <Button
            size="small"
            // onClick={handleApply}
            sx={{
              padding: "5px 20px",
              width: "100%",
              margin: "0 auto",
              fontWeight: 800,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              backgroundColor: palette.primary,
              color: palette.secondary,
            }}
          >
            Save Details
          </Button>
        </Collapse>
      </List>
    </Grid>
  );
}

import React from "react";

import {
  bodyTypographyStyles as body,
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../../assets/styles/typography";

import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { palette } from "../../../assets/styles/colors";

export default function CheckoutCreditCard(props) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [verificationValue, setVerificationValue] = React.useState("");

  const [hasErrors, setHasErrors] = React.useState(undefined);
  const [formErrors, setFormErrors] = React.useState({});

  const missingData = React.useCallback(
    function (type) {
      const error = formErrors || {};
      switch (type) {
        case "firstName":
          error.firstName = "firstName cannot be empty";
          break;

        case "lastName":
          error.lastName = "lastName cannot be empty";
          break;

        case "month":
          error.month = "month cannot be empty";
          break;

        case "number":
          error.number = "number cannot be empty";
          break;

        case "verificationValue":
          error.verificationValue = "verificationValue cannot be empty";
          break;

        case "year":
          error.year = "year Name cannot be empty";
          break;

        default:
          break;
      }

      if (error) {
        setFormErrors(error);
        setHasErrors(true);
      } else {
        setHasErrors(false);
      }
    },
    [formErrors]
  );

  const validateForm = React.useCallback(
    function () {
      const newCard = {};
      setFormErrors({});

      if (!firstName) {
        missingData("firstName");
      } else {
        newCard.firstName = firstName;
      }
      if (!lastName) {
        missingData("lastName");
      } else {
        newCard.lastName = lastName;
      }
      if (!month) {
        missingData("month");
      } else {
        newCard.month = month;
      }
      if (!number) {
        missingData("number");
      } else {
        newCard.number = number;
      }
      if (!verificationValue) {
        missingData("verificationValue");
      } else {
        newCard.verificationValue = verificationValue;
      }

      if (hasErrors && formErrors.length > 0) {
        console.log(formErrors);
      } else {
        return newCard;
      }
    },
    [
      firstName,
      formErrors,
      hasErrors,
      lastName,
      missingData,
      month,
      number,
      verificationValue,
    ]
  );

  function processForm(e) {
    e.preventDefault();

    // console.log("error", formErrors);

    setHasErrors(false);

    let card = validateForm();

    if (!hasErrors && card.number) {
      props.saveCard(card);

      props.handleCreditModalClose();
    }
  }

  const formatCardNumber = React.useCallback(function (cardNumber) {
    const cardValue = cardNumber
      .replace(/\D/g, "")
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);

    cardNumber = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]} ${cardValue[2]}${`${
          cardValue[3] ? ` ${cardValue[3]}` : ""
        }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`;

    cardNumber.replaceAll("(?<!^..).(?=.{3})", "*");

    setNumber(cardNumber);
  }, []);

  React.useEffect(() => {
    formatCardNumber(number);

    return () => {};
  }, [formatCardNumber, number]);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        marginTop: "40px",
        backgroundColor: palette.secondary,
        padding: { xs: "20px", lg: "20px 30px" },
      }}
    >
      <Typography
        sx={{
          fontSize: headingTypographyStyles.h3,
          width: "100%",
          textAlign: "start",
          marginBottom: "10px",
        }}
      >
        Card Details
      </Typography>
      <Box
        sx={{
          height: { xs: "50vh", lg: "100%" },
          width: "100%",
          overflowY: "auto",
        }}
      >
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          <TextField
            // size="small"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
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
            value={firstName}
            label="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            error={formErrors && formErrors.firstName}
          />
          <TextField
            // size="small"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
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
            value={lastName}
            label="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            error={formErrors && formErrors.lastName}
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: { xs: "wrp", lg: "nowrap" },
          }}
        >
          <TextField
            // size="small"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
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
            value={number}
            label="Number"
            // ref={inputCard}
            onChange={(e) => setNumber(e.target.value)}
            error={formErrors && formErrors.month}
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: { xs: "wrp", lg: "nowrap" },
          }}
        >
          <TextField
            // size="small"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
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
            value={month}
            label="Expiry Date"
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            error={formErrors && formErrors.number}
          />

          <TextField
            // size="small"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
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
            value={verificationValue}
            label="CVC"
            onChange={(e) => {
              setVerificationValue(e.target.value);
            }}
            error={formErrors && formErrors.verificationValue}
          />
        </FormGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button
          sx={{
            fontSize: bodyTypographyStyles.defaultBold,
            backgroundColor: palette.primary,
            color: palette.secondary,
            "&:hover": {
              backgroundColor: palette.primary,
              color: palette.secondary,
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
          onClick={processForm}
        >
          Add Card
        </Button>{" "}
        <Button
          sx={{
            fontSize: bodyTypographyStyles.defaultBold,
            backgroundColor: palette.secondary,
            color: palette.primary,
            "&:hover": {
              backgroundColor: palette.primary,
              color: palette.secondary,
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
          onClick={props.handleCreditModalClose}
          // disabled={!shippingAddress && !cardDetails}
        >
          Cancel
        </Button>{" "}
      </Box>
    </Grid>
  );
}

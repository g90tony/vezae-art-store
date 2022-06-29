import React from "react";

import {
  bodyTypographyStyles as body,
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../../assets/styles/typography";

import { TextField, FormGroup, Grid, Typography, Button } from "@mui/material";
import { palette } from "../../../assets/styles/colors";
import { Box } from "@mui/system";

export default function CheckoutShippingAddress(props) {
  const [address1, setAddress1] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [city, setCity] = React.useState(undefined);
  const [company, setCompany] = React.useState(undefined);
  const [country, setCountry] = React.useState(undefined);
  const [firstName, setFirstName] = React.useState(undefined);
  const [lastName, setLastName] = React.useState(undefined);
  const [province, setProvince] = React.useState(undefined);
  const [zip, setZip] = React.useState();

  const [hasErrors, setHasErrors] = React.useState(undefined);
  const [formErrors, setFormErrors] = React.useState({});

  const missingData = React.useCallback(
    function (type) {
      const error = formErrors || {};
      switch (type) {
        case "address1":
          error.address1 = "Address1 cannot be empty";
          break;

        case "email":
          error.email = "Email cannot be empty";
          break;

        case "city":
          error.city = "City cannot be empty";
          break;

        case "company":
          error.company = "Company cannot be empty";
          break;

        case "country":
          error.country = "Country cannot be empty";
          break;

        case "firstName":
          error.firstName = "First Name cannot be empty";
          break;

        case "lastName":
          error.lastName = "Last Name cannot be empty";
          break;

        case "province":
          error.province = "Province cannot be empty";
          break;

        case "zip":
          error.zip = "Zip cannot be empty";
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
      const newShippingAddress = {};
      setFormErrors({});

      if (!address1) {
        missingData("address1");
      } else {
        newShippingAddress.address1 = address1;
      }
      if (!email) {
        missingData("email");
      } else {
        newShippingAddress.email = email;
      }
      if (!city) {
        missingData("city");
      } else {
        newShippingAddress.city = city;
      }
      if (!company) {
        missingData("company");
      } else {
        newShippingAddress.company = company;
      }
      if (!country) {
        missingData("country");
      } else {
        newShippingAddress.country = country;
      }
      if (!firstName) {
        missingData("firstName");
      } else {
        newShippingAddress.firstName = firstName;
      }
      if (!lastName) {
        missingData("lastName");
      } else {
        newShippingAddress.lastName = lastName;
      }
      if (!province) {
        missingData("province");
      } else {
        newShippingAddress.province = province;
      }
      if (!zip) {
        missingData("zip");
      } else {
        newShippingAddress.zip = zip;
      }

      if (hasErrors || formErrors.length > 0) {
        console.log(formErrors);
      } else {
        return newShippingAddress;
      }
    },
    [
      address1,
      city,
      company,
      country,
      email,
      firstName,
      formErrors,
      hasErrors,
      lastName,
      missingData,
      province,
      zip,
    ]
  );

  function processForm(e) {
    e.preventDefault();

    console.log("error", formErrors);

    setHasErrors(false);

    let address = validateForm();

    if (!hasErrors && address.email) {
      props.saveAddress(address);

      props.handleCloseShippingModal();
    }
  }

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
        padding: "20px 30px",
      }}
    >
      {" "}
      <Typography
        sx={{
          fontSize: headingTypographyStyles.h2,
          width: "100%",
          textAlign: "start",
          marginBottom: "10px",
        }}
      >
        Enter Your Shipping Address
      </Typography>
      <Box
        sx={{
          height: { xs: "50vh", lg: "100%" },
          overflowY: "auto",
          width: "100%",
        }}
      >
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label="First Name"
            error={formErrors.firstName}
            helperText={formErrors.firstName}
          />
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label="Last Name"
            error={formErrors.lastName}
            helperText={formErrors.lastName}
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            error={formErrors.email}
            helperText={formErrors.email}
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={address1}
            onChange={(e) => {
              setAddress1(e.target.value);
            }}
            label="Address 1"
            error={formErrors.address1}
            helperText={formErrors.address1}
          />
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            label="Company"
            error={formErrors.company}
            helperText={formErrors.company}
          />
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            label="Country"
            error={formErrors.country}
            helperText={formErrors.country}
          />{" "}
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            label="City"
            error={formErrors.city}
            helperText={formErrors.city}
          />{" "}
        </FormGroup>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            width: "100%",
            overflowY: "auto",
          }}
        >
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
            label="Province"
            error={formErrors.province}
            helperText={formErrors.province}
          />
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "10px ",
              // padding: "0px 20px",
              width: "100%",
              "& .MuiTextField-label": {
                fontSize: body.defaultBold,
                fontWeight: 800,
                textAlign: "start",
              },
            }}
            fullWidth
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            label="ZIP"
            error={formErrors.zip}
            helperText={formErrors.zip}
          />
        </FormGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "flex-end",
          padding: "20px",
        }}
      >
        <Button
          onClick={processForm}
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
        >
          Save Shipping Address
        </Button>{" "}
        <Button
          onClick={props.handleCloseShippingModal}
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
        >
          Cancel
        </Button>
      </Box>
    </Grid>
  );
}

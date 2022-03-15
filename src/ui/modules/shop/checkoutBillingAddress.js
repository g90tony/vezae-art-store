import React from "react";

import {
  bodyTypographyStyles as body,
  headingTypographyStyles,
} from "../../../assets/styles/typography";

import {
  FormControlLabel,
  FormGroup,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { palette } from "../../../assets/styles/colors";

export default function CheckoutBillingAddress() {
  // filters data

  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [zip, setZip] = React.useState("");

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
          fontSize: headingTypographyStyles.h3,
          width: "100%",
          textAlign: "start",
          marginBottom: "10px",
        }}
      >
        Billing Address
      </Typography>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          label="First Name"
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
          size="small"
          fullWidth
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          label="Last Name"
        />{" "}
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value);
          }}
          label="Address 1"
        />{" "}
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={address2}
          onChange={(e) => {
            setAddress2(e.target.value);
          }}
          label="Address 2"
        />
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          label="Company"
        />
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          label="Country"
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
          size="small"
          fullWidth
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          label="City"
        />{" "}
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
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
          size="small"
          fullWidth
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
          }}
          label="Province"
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
          size="small"
          fullWidth
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
          label="ZIP"
        />
      </FormGroup>
    </Grid>
  );
}

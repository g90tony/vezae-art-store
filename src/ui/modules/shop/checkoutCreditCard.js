import React from "react";

import {
  bodyTypographyStyles as body,
  headingTypographyStyles,
} from "../../../assets/styles/typography";

import { FormGroup, Grid, TextField, Typography } from "@mui/material";
import { palette } from "../../../assets/styles/colors";

export default function CheckoutCreditCard() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [verificationValue, setVerificationValue] = React.useState("");
  const [year, setYear] = React.useState("");

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
      <Typography
        sx={{
          fontSize: headingTypographyStyles.h3,
          width: "100%",
          textAlign: "start",
          marginBottom: "10px",
        }}
      >
        Credit Card Details
      </Typography>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "nowrap",
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
        />{" "}
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "nowrap",
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
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />{" "}
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "nowrap",
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
          label="Month"
          onChange={(e) => {
            setMonth(e.target.value);
          }}
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
          label="Verification Value"
          onChange={(e) => {
            setVerificationValue(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "nowrap",
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
          value={year}
          label="Year"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </FormGroup>
    </Grid>
  );
}

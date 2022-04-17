import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function PriceConverter(props) {
  const selectedCurrency = useSelector(
    (state) => state.currencySelector.selectedCurrency
  );

  const shopStyle = {
    fontSize: bodyTypographyStyles.defaultBold,
    textAlign: "start",
  };

  const viewStyle = { fontSize: headingTypographyStyles.h4, fontWeight: 700 };

  return (
    <Typography sx={props.view ? viewStyle : shopStyle}>
      {`${selectedCurrency.symbol}`}{" "}
      {props.selectedSize
        ? Math.round(props.selectedSize.price * selectedCurrency.rate * 100) /
          100
        : "----.--"}
    </Typography>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { bodyTypographyStyles } from "../../assets/styles/typography";
import { Typography } from "@mui/material";

export default function PriceSlider(props) {
  return (
    <Box sx={{ width: 300 }}>
      <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
        Price Range : {props.value[0] * 100} - {props.value[1] * 100}
      </Typography>
      <Slider
        getAriaLabel={() => "Price Slider"}
        value={props.value}
        onChange={props.updatePrice}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}

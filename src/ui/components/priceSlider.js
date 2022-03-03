import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { bodyTypographyStyles } from "../../assets/styles/typography";
import { Typography } from "@mui/material";

export default function PriceSlider() {
  const [value, setValue] = React.useState([0, 10000]);

  const updatePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue(newValue);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography sx={{ fontSize: bodyTypographyStyles.defaultBold }}>
        Price Range : {value[0] * 100} - {value[1] * 100}
      </Typography>
      <Slider
        getAriaLabel={() => "Price Slider"}
        value={value}
        onChange={updatePrice}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}

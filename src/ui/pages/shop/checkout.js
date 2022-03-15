import { Grid } from "@mui/material";
import React from "react";
import CheckoutStepper from "../../modules/shop/checkoutStepper";

export default function ShopCheckoutPage() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
        height: "100%",
        overflowY: "hidden",
      }}
    >
      <CheckoutStepper />
    </Grid>
  );
}

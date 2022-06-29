import { Grid } from "@mui/material";
import React from "react";
import CartCheckout from "../../components/cartCheckout";

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
      <CartCheckout width="80%" />
    </Grid>
  );
}

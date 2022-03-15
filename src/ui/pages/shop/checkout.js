import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import { cart } from "../../../helpers/data/dummyData";
import CartCheckout from "../../components/cartCheckout";
import CartPopup from "../../components/cartPopup";
import CheckoutDetailsCard from "../../modules/shop/checkoutBillingAddress";
import CheckoutStepper from "../../modules/shop/checkoutStepper";
import FilterProductsCard from "../../modules/shop/filterProductsCard";

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

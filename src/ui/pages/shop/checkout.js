import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import { cart } from "../../../helpers/data/dummyData";
import CartCheckout from "../../components/cartCheckout";
import CartPopup from "../../components/cartPopup";
import CheckoutDetailsCard from "../../modules/shop/checkoutDetailsCard";
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
        height: "80vh",
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "100%", lg: "30.33%" },
          margin: "0 auto 20px auto",
          height: "75vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <CheckoutDetailsCard />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: { xs: "100%", lg: "66.67%" },
          height: "100%",
          backgroundColor: palette.secondary,
          // padding: "0 20px",
        }}
      >
        <CartCheckout cart={cart} width="100%" />
      </Box>
    </Grid>
  );
}

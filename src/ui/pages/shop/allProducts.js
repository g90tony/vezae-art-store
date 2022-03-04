import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
        minHeight: "100vh",
        width: "100%",
        marginTop: "10px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "25%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FilterProductsCard />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "75%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <ProductsSearchBar />
      </Box>
    </Grid>
  );
}

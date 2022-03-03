import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FilterProductsCard from "../../modules/shop/filterProductsCard";

export default function ShopAllProductsPage() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "25%" },
          height: "100%",
          display: "flex",
          flexDirection: "columns",
          justifyContent: "flex-start",
        }}
      >
        <FilterProductsCard />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "75%" },
          height: "100%",
          display: "flex",
          flexDirection: "columns",
          justifyContent: "flex-start",
        }}
      ></Box>
    </Grid>
  );
}

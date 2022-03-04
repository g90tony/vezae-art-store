import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductItemCard from "../../components/productItemCard";

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
        marginTop: "00px",
        padding: "10px",
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "10px",
          }}
        >
          {dummyProducts.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <ProductItemCard product={product} />
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
}

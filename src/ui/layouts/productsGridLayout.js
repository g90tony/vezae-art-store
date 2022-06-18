/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid } from "@mui/material";
import React from "react";
import ProductItemCard from "../components/productItemCard";

export default function ProductsGridLayout(props) {
  const [loadingImages, setLoadingImages] = React.useState([]);

  React.useEffect(() => {
    const productImages = props.products.map((item) => {
      return {
        product_id: item.product_id,
        hasLoaded: false,
      };
    });

    setLoadingImages(productImages);

    return setLoadingImages([]);
  }, []);

  function handleHasLoaded(product) {
    const updatedList = loadingImages.map((item) => {
      if (item.product_id === product.product_id) {
        item.hasLoaded = true;
      }

      return item;
    });

    setLoadingImages(updatedList);

    const loadedImages = loadingImages.map((item) => {
      if (item.hasLoaded === true) {
        return item;
      }
    });

    if (loadedImages.length === loadingImages.length) {
      setTimeout(() => {
        props.loadingController(true);
      }, 1500);
    }
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
        justifyContent: { xs: "center", lg: "space-between" },
        minHeight: "100vh",
        width: "100%",
        // marginTop: "00px",
        padding: "10px",
      }}
    >
      {/* <Box
        sx={{
          width: { xs: "100%", lg: "25%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {props.child1}
      </Box> */}
      <Box
        sx={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {props.child2}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "center" },
            alignItems: "flex-start",
            width: { xs: "100%", md: "80%", lg: "100%" },
            padding: "10px",
            margin: "0 auto",
          }}
        >
          {props.products.map((product) => {
            return (
              <ProductItemCard
                key={props.products.indexOf(product)}
                product={product}
                index={props.products.indexOf(product)}
                width={props.width}
                isLoading={() => handleHasLoaded(product)}
              />
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
}

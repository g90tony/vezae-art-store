import { Box, Grid } from "@mui/material";
import React from "react";
import CollectionItemCard from "../components/collectionItemCard";

export default function CollectionsGridLayout(props) {
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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
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
            width: "100%",
            padding: "10px",
            margin: "0 auto",
          }}
        >
          {props.collections.map((product) => {
            return (
              <CollectionItemCard
                key={props.collections.indexOf(product)}
                product={product}
                width={props.width}
                index={props.collections.indexOf(product)}
              />
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
}

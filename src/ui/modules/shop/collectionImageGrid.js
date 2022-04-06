import { Box, Grid } from "@mui/material";
import React from "react";
import CollectionGridItem from "../../components/collectionGridItem";

export default function CollectionImageGrid(props) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "100%", lg: "50% 50%" },
          gridTemplateRows: "auto",
          columnGap: { xs: "2.5px", lg: "5px" },
          rowGap: { xs: "2.5px", lg: "5px" },
        }}
      >
        {props.images.map((piece) => {
          return (
            <CollectionGridItem
              key={props.images.indexOf(piece) + 1}
              index={props.images.indexOf(piece) + 1}
              product={piece}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

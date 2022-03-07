import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { headingTypographyStyles } from "../../../assets/styles/typography";

import RelatedProductItem from "../../components/relatedProductItem";

export default function ProductRelatedSection(props) {
  const [relatedItemWidth, setRelatedItemWidth] = React.useState("350px");

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "10px",
        margin: "20px auto",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontWeight: headingTypographyStyles.h1,
          width: "100%",
          textAlign: "start",
          margin: "20px auto",
        }}
      >
        Related Pieces
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          xs: () => setRelatedItemWidth("80%"),
          lg: () => setRelatedItemWidth("350px"),
          width: "100%",
          height: "100%",
          overflowX: { xs: "hidden", lg: "auto" },
          margin: "10px auto",
        }}
      >
        {props.related.map((piece) => {
          return (
            <RelatedProductItem
              product={piece}
              selectedSize={props.selectedSize}
              width={relatedItemWidth}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../../assets/styles/typography";
import CollectionGridItem from "../../components/collectionGridItem";
import ProductItemCard from "../../components/productItemCard";
import RelatedProductItem from "../../components/relatedProductItem";

export default function ProductRelatedSection(props) {
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
          flexDirection: "row",
          flexWrap: "nowrap",
          //   width: "100%",
          height: "100%",
          overflowX: "auto",
          margin: "10px auto",
        }}
      >
        {props.related.map((piece) => {
          return (
            <RelatedProductItem
              product={piece}
              selectedSize={props.selectedSize}
              width="350px"
            />
          );
        })}
      </Box>
    </Grid>
  );
}

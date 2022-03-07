import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { headingTypographyStyles } from "../../../assets/styles/typography";

import RelatedProductItem from "../../components/relatedProductItem";

export default function RelatedSection(props) {
  const [relatedItemWidth, setRelatedItemWidth] = React.useState();

  React.useEffect(() => {
    setRelatedItemWidth("350px");

    return () => {
      setRelatedItemWidth();
    };
  }, []);

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
        {props.sectionHeader}
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
          return props.itemButtonText === "View Collection" ? (
            <RelatedProductItem
              key={piece.id}
              product={piece}
              width={relatedItemWidth}
              buttonText={props.itemButtonText}
            />
          ) : (
            <RelatedProductItem
              key={piece.id}
              product={piece}
              selectedSize={props.selectedSize}
              width={relatedItemWidth}
              buttonText={props.itemButtonText}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

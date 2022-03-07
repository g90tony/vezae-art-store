import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import {
  marketingTypographyStyles as marketing,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";
import CollectionGridItem from "../../components/collectionGridItem";

export default function LandingCollectionSection(props) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          lg: props.isAlternate ? "row-reverse" : "row",
        },
        width: { lg: "80%", xs: "100%" },
        margin: { xs: "0", lg: "0 auto 10px auto" },
        padding: "40px 20px",
        backgroundColor: props.darkBg ? palette.primary : palette.accentLight,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" },
          justifyContent: "center",
          alignItems: "center",
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
          {props.collection.pieces.map((piece) => {
            return <CollectionGridItem product={piece} />;
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" },
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          textAlign: props.isAlternate ? "end" : "start",
        }}
      >
        <Typography
          sx={{
            padding: "20px",
            fontSize: marketing.title,
            color: props.darkBg ? palette.secondary : palette.primary,
            textAlign: props.isAlternate ? "end" : "start",
            width: "100%",
          }}
        >
          {props.sectionTitle}
        </Typography>
        <Box sx={{ padding: "40px" }}>
          <Typography
            sx={{
              fontSize: marketing.subTitle,
              alignText: "start",
              marginBottom: "20px",
              color: props.darkBg ? palette.secondary : palette.primary,
              textAlign: props.isAlternate ? "end" : "start",
            }}
          >
            {props.collection.title}
          </Typography>
          <Typography
            sx={{
              fontSize: body.defaultExtraLight,
              color: props.darkBg ? palette.secondary : palette.primary,
              textAlign: props.isAlternate ? "end" : "start",
            }}
          >
            {props.collection.description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: props.isAlternate ? "flex-end" : "flex-start",
              padding: { xs: "0", lg: "20px" },
              marginTop: "10px",
              width: "100%",
            }}
          >
            <Button
              href="/"
              sx={{
                "&:hover": {
                  backgroundColor: props.darkBg
                    ? palette.primary
                    : palette.secondary,
                  color: props.darkBg ? palette.secondary : palette.primary,
                },
                backgroundColor: props.darkBg
                  ? palette.secondary
                  : palette.primary,
                color: props.darkBg ? palette.primary : palette.secondary,
                padding: "10px",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: body.defaultBold,
                margin: { xs: "20px", lg: "0 20px 0 0" },
                borderRadius: 0,
                width: { xs: "100%", lg: "fit-content" },
              }}
            >
              View Collection
            </Button>
            <Button
              href="/"
              sx={{
                backgroundColor: props.darkBg
                  ? palette.secondary
                  : palette.primary,
                "&:hover": {
                  backgroundColor: props.darkBg
                    ? palette.primary
                    : palette.secondary,
                  color: props.darkBg ? palette.secondary : palette.primary,
                },
                color: props.darkBg ? palette.primary : palette.secondary,
                padding: "10px",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: body.defaultBold,
                margin: { xs: "20px ", lg: "0 20px 0 0" },
                borderRadius: 0,
                width: { xs: "100%", lg: "fit-content" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

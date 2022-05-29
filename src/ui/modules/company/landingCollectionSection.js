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
  const [currentCollection, setCurrentCollection] = React.useState();
  const [loadingImages, setLoadingImages] = React.useState();

  React.useEffect(() => {
    if (props.collection.products) {
      setCurrentCollection(props.collection);

      const imagesArr = props.collection.products.map((img) => {
        return {
          product_id: img.product_id,
          hasLoaded: false,
        };
      });

      setLoadingImages(imagesArr);
    }
  }, [props.collection, currentCollection]);

  function handleHasLoaded(product) {
    const updatedImages = loadingImages.map((img) => {
      if (product.product_id === img.product_id) {
        img.hasLoaded = true;
      }
      return img;
    });

    setLoadingImages(updatedImages);

    // eslint-disable-next-line array-callback-return
    const completedImages = loadingImages.map((img) => {
      if (img.hasLoaded === true) {
        return img;
      }
    });

    if (completedImages.length === loadingImages.length) {
      props.loadingManager(true);
    }
  }

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
      {" "}
      {currentCollection && (
        <>
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
                justifyContent: props.isAlternate ? "flex-end" : "flex-start",
                gridTemplateColumns: "50% 50%",
                gridTemplateRows: "auto",
                columnGap: { xs: "2.5px", lg: "5px" },
                rowGap: { xs: "2.5px", lg: "5px" },
              }}
            >
              {currentCollection.products &&
                currentCollection.products.map((piece) => {
                  return (
                    <CollectionGridItem
                      product={piece}
                      index={currentCollection.products.indexOf(piece) + 1}
                      key={currentCollection.products.indexOf(piece)}
                      hasLoaded={() => handleHasLoaded(piece)}
                    />
                  );
                })}
            </Box>
            <Typography
              sx={{
                display: { xs: "initial", lg: "none" },
                fontSize: body.defaultExtraLight,
                color: props.darkBg ? palette.secondary : palette.primary,
                textAlign: {
                  xs: "start",
                  lg: props.isAlternate ? "end" : "start",
                },
                height: "15em",
                overflowY: "hidden",
              }}
              dangerouslySetInnerHTML={{
                __html: currentCollection.description,
              }}
            />
            <Button
              href={`/shop/collections/view/${currentCollection.collection_id}`}
              sx={{
                display: { xs: "flex", lg: "none" },
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
                margin: { xs: "20px auto", lg: "0 20px 0 0" },
                borderRadius: 0,
                width: { xs: "80%", lg: "fit-content" },
              }}
            >
              View Collection
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", lg: "50%" },
              margin: "auto",
              justifyContent: "center",
              alignItems: "flex-start",
              textAlign: {
                xs: "start",
                lg: props.isAlternate ? "end" : "start",
              },
            }}
          >
            <Typography
              sx={{
                padding: "10px",
                fontSize: marketing.title,
                color: props.darkBg ? palette.secondary : palette.primary,
                textAlign: {
                  xs: "start",
                  lg: props.isAlternate ? "end" : "start",
                },
                width: "100%",
              }}
            >
              {props.sectionTitle}
            </Typography>
            <Box sx={{ padding: "20px" }}>
              <Typography
                sx={{
                  fontSize: marketing.subTitle,
                  alignText: "start",
                  marginBottom: "20px",
                  color: props.darkBg ? palette.secondary : palette.primary,
                  textAlign: {
                    xs: "start",
                    lg: props.isAlternate ? "end" : "start",
                  },
                }}
              >
                {currentCollection.title}
              </Typography>
              <Typography
                sx={{
                  display: { xs: "none", lg: "initial" },
                  fontSize: body.defaultExtraLight,
                  color: props.darkBg ? palette.secondary : palette.primary,
                  textAlign: {
                    xs: "start",
                    lg: props.isAlternate ? "end" : "start",
                  },
                  height: "15em",
                  overflowY: "hidden",
                }}
                dangerouslySetInnerHTML={{
                  __html: currentCollection.description,
                }}
              />

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
                  href={`/shop/collections/view/${currentCollection.collection_id}`}
                  sx={{
                    display: { xs: "none", lg: "flex" },
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
                {/* <Button
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
                </Button> */}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Grid>
  );
}

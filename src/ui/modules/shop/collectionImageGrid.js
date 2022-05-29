/* eslint-disable array-callback-return */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { marketingTypographyStyles } from "../../../assets/styles/typography";
import CollectionGridItem from "../../components/collectionGridItem";

export default function CollectionImageGrid(props) {
  const [loadingImages, setLoadingImage] = React.useState();

  React.useEffect(() => {
    if (props.images) {
      const imagesArr = props.images.map((item) => {
        return {
          image_src: item.url,
          hasLoaded: false,
        };
      });

      setLoadingImage(imagesArr);
    }
    return () => {
      setLoadingImage([]);
    };
  }, [props.images]);

  function hasLoaded(image) {
    const updatedImages = loadingImages.map((img) => {
      if (img.image_src === image.url) {
        img.hasLoaded = true;
      }

      return img;
    });

    setLoadingImage(updatedImages);

    const completedImages = loadingImages.map((img) => {
      if (img.hasLoaded === true) {
        return img;
      }
    });

    if (completedImages.length === loadingImages.length) {
      setTimeout(() => {
        props.manageLoader(true);
      }, 1500);
    }
  }

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
          display: { xs: "none", lg: "grid" },
          gridTemplateColumns: { xs: "100%", lg: "50% 50%" },
          gridTemplateRows: "auto",
          columnGap: { xs: "2.5px", lg: "5px" },
          rowGap: { xs: "2.5px", lg: "5px" },
        }}
      >
        {props.images.map((piece) => {
          return (
            <CollectionGridItem
              key={props.images.indexOf(piece)}
              index={props.images.indexOf(piece) + 1}
              hasLoaded={() => hasLoaded(piece)}
              product={piece}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          flexDirection: "row",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: marketingTypographyStyles.subTitle }}>
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {props.images.map((piece) => {
          return (
            <Box sx={{ width: "50%" }}>
              <CollectionGridItem
                key={props.images.indexOf(piece)}
                index={props.images.indexOf(piece) + 1}
                hasLoaded={() => hasLoaded(piece)}
                product={piece}
              />
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}

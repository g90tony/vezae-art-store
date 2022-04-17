/* eslint-disable array-callback-return */
import { Box, Grid } from "@mui/material";
import React from "react";
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
              hasLoaded={() => hasLoaded(piece)}
              product={piece}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

/* eslint-disable array-callback-return */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { marketingTypographyStyles } from "../../../assets/styles/typography";

export default function ProductImageGrid(props) {
  const [selectedImage, setSelectedImage] = React.useState();
  const [loadingImages, setLoadingImage] = React.useState();

  React.useEffect(() => {
    setSelectedImage(undefined);
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
      props.manageLoader(true);
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
          display: { xs: "none", lg: "flex" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "fit-content", lg: "500px" },
          width: { xs: "100%", lg: "500px" },
          marginBottom: "20px",
        }}
      >
        {selectedImage ? (
          <img
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
            src={selectedImage.url}
            alt="product"
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Select an Image to view
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          width: "100%",
          overflowX: "auto",
        }}
      >
        {props.images &&
          props.images.map((image) => {
            return (
              <img
                key={props.images.indexOf(image)}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  margin: "10px",
                  objectPosition: "center",
                }}
                src={image.url}
                alt="product preview"
                onClick={() => setSelectedImage(image)}
                onLoad={() => hasLoaded(image)}
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
          {props.productTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          flexDirection: "row-reverse",
          flexWrap: "nowrap",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          width: "100%",
          height: { xs: "400px", md: "500px" },
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            maxWidth: "20%",
            margin: "auto",
            maxHeight: { xs: "350px", md: "500px" },
            overflowY: "auto",
          }}
        >
          {props.images &&
            props.images.map((image) => {
              return (
                <img
                  key={props.images.indexOf(image)}
                  style={{
                    width: { xs: "50px", md: "75px" },
                    height: { xs: "50px", md: "75px" },
                    objectFit: "cover",
                    margin: { xs: "5px", md: "20px 10px" },
                    objectPosition: "center",
                  }}
                  src={image.url}
                  alt="product preview"
                  onClick={() => setSelectedImage(image)}
                  onLoad={() => hasLoaded(image)}
                />
              );
            })}
        </Box>
        <Box
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {selectedImage ? (
            <img
              style={{
                objectFit: { xs: "contain", md: "cover" },
                objectPosition: "center",
                maxWidth: "500px",
                maxHeight: "500px",
              }}
              src={selectedImage.url}
              alt="product"
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Select an Image to view
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

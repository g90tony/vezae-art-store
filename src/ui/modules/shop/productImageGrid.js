import { Box, Grid } from "@mui/material";
import React from "react";

export default function ProductImageGrid(props) {
  const [selectedImage, setSelectedImage] = React.useState();

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
          display: "flex",
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
          display: "flex",
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
              />
            );
          })}
      </Box>
    </Grid>
  );
}

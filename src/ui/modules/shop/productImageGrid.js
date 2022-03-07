import { Box, Grid } from "@mui/material";
import React from "react";

export default function ProductImageGrid(props) {
  const [selectedImage, setSelectedImage] = React.useState(props.images[0]);
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
          height: { xs: "100%", lg: "500px" },
          width: { xs: "100%", lg: "500px" },
          margin: { xs: "10px auto", lg: "0 auto 20px auto" },
        }}
      >
        <img
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={selectedImage}
          alt="product"
        />
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
        {props.images.map((image) => {
          return (
            <img
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                margin: "10px",
                objectPosition: "center",
              }}
              src={image}
              alt="product preview"
              onClick={() => setSelectedImage(image)}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

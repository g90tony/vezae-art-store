import { Box, Grid } from "@mui/material";
import React from "react";
import CollectionItemCard from "../components/collectionItemCard";

export default function CollectionsGridLayout(props) {
  const [loadingImages, setLoadingImages] = React.useState([]);

  React.useEffect(() => {
    const collectionImages = props.collections.map((item) => {
      return {
        collection_id: item.collection_id,
        hasLoaded: false,
      };
    });

    setLoadingImages(collectionImages);

    return setLoadingImages([]);
  }, []);

  function handleHasLoaded(collection) {
    const updatedList = loadingImages.map((item) => {
      if (item.collection_id === collection.collection_id) {
        item.hasLoaded = true;
      }

      return item;
    });

    setLoadingImages(updatedList);

    const loadedImages = loadingImages.map((item) => {
      if (item.hasLoaded === true) {
        return item;
      }
    });

    if (loadedImages.length === loadingImages.length) {
      setTimeout(() => {
        props.loadingController(true);
      }, 1500);
    }
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { xs: "wrap", lg: "nowrap" },
        minHeight: "100vh",
        width: "100%",
        marginTop: "00px",
        padding: "10px",
      }}
    >
      {/* <Box
        sx={{
          width: { xs: "100%", lg: "25%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {props.child1}
      </Box> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {props.child2}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "center" },
            alignItems: "flex-start",
            width: "100%",
            padding: "10px",
            margin: "0 auto",
          }}
        >
          {props.collections.map((product) => {
            return (
              <CollectionItemCard
                key={props.collections.indexOf(product)}
                product={product}
                width={props.width}
                index={props.collections.indexOf(product)}
                isLoading={() => handleHasLoaded(product)}
              />
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
}

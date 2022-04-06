import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function ProductItemCard(props) {
  const [selectedSize, setSelectedSize] = React.useState();

  function handleChange(e) {
    setSelectedSize(e.target.value);
  }

  return (
    <Grid
      container
      sx={{
        width: props.width,
        backgroundColor: palette.secondary,
        margin: { xs: "10px auto", lg: "10px 20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ margin: "0 0 5px 0", width: "100%", maxHeight: "55%" }}>
        <img
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={props.product.images[0].url}
          alt={""}
        />
      </Box>
      <Box sx={{ padding: "5px", margin: "auto 5px " }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: headingTypographyStyles.h5,
              fontWeight: 800,
              textAlign: "start",
            }}
          >
            {props.product.title}
          </Typography>
          <Typography
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              //   fontWeight: 800,
              textAlign: "start",
            }}
          >
            {selectedSize && selectedSize.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "none",
            alignItems: "center",
            width: "100%",
            heigh: "100%",
            marginBottom: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: bodyTypographyStyles.largeLight,
              //   fontWeight: 800,
              textAlign: "start",
            }}
          >
            {"  " + props.product.collection.collection_name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "none",
            alignItems: "center",
            width: "100%",
            heigh: "100%",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: bodyTypographyStyles.defaultBold,
              //   fontWeight: 800,
              textAlign: "start",
              marginLeft: "5px",
            }}
          >
            Select canvas size:
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              margin: { xs: "10px auto", lg: "5px 0" },
            }}
          >
            <Select
              size="small"
              labelId="orderSelectLabel"
              id="demo-simple-select"
              sx={{
                fontSize: bodyTypographyStyles.defaultLight,
                fontWeight: 400,
              }}
              value={selectedSize}
              onChange={handleChange}
            >
              {props.product.variants.map((size) => {
                return (
                  <MenuItem
                    key={props.product.variants.indexOf(size)}
                    value={size}
                  >
                    {size.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 0,
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <Button
            fullWidth
            href={`/shop/pieces/view/${props.product.product_id}`}
            sx={{
              textDecoration: "none",
              backgroundColor: palette.primary,
              color: palette.secondary,
              fontSize: bodyTypographyStyles.smallBold,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              margin: "5px 0",
              borderRadius: "0",
            }}
          >
            View Piece
          </Button>
          <Button
            fullWidth
            onClick={props.handleAddToCart}
            sx={{
              backgroundColor: palette.primary,
              color: palette.secondary,
              fontSize: bodyTypographyStyles.smallBold,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              margin: "5px 5px",
              borderRadius: "0",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

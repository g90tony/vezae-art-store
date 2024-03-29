import {
  Button,
  FormControl,
  Grid,
  Link,
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
import PriceConverter from "./priceConverter";

export default function ProductItemCard(props) {
  const [selectedSize, setSelectedSize] = React.useState();

  function handleChange(e) {
    setSelectedSize(e.target.value);
  }

  return (
    <Grid
      container
      sx={{
        maxWidth: { lg: "350px", xs: "100%" },
        backgroundColor: palette.secondary,
        margin: { xs: "10px auto", lg: "10px 20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ margin: "0 0 5px 0", width: "100%", maxHeight: "55%" }}>
        <Box
          component="img"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={props.product.images[0].url}
          alt={""}
          onLoad={props.isLoading}
        />
      </Box>
      <Box sx={{ padding: "5px 20px", margin: "auto 5px " }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "space-evenly",
            width: "100%",
            marginBottom: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: headingTypographyStyles.h5,
              width: "75%",
              height: "50px",
              fontWeight: 800,
              textAlign: "start",
            }}
          >
            {props.product.title}
          </Typography>
          <Typography>
            <PriceConverter view={false} selectedSize={selectedSize} />
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
          <Link
            href={`/shop/collections/view/${props.product.collection.collection_id}`}
            sx={{
              fontSize: bodyTypographyStyles.defaultExtraLight,
              color: palette.primary,
              textDecoration: "none",
              "&:hover": {
                fontWeight: 600,
                textDecoration: "none",
                transitionDuration: "ease-in-out",
              },
              textAlign: "start",
            }}
          >
            {"  " + props.product.collection.collection_name} Collection
          </Link>
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
              // marginLeft: "5px",
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
              defaultValue={"none"}
              onChange={handleChange}
              placeholder="Select size to view price"
            >
              <MenuItem value="none">Select size to view price</MenuItem>;
              {props.product.variants.map((size) => {
                return (
                  <MenuItem
                    key={props.product.variants.indexOf(size) + 1}
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
          {/* <Button
            disabled={selectedSize ? false : true}
            fullWidth
            onClick={() => handleAddToCart(props.product, selectedSize)}
            sx={{
              backgroundColor: selectedSize
                ? palette.primary
                : palette.accentDark,
              color: palette.secondary,
              fontSize: bodyTypographyStyles.smallBold,
              "&:hover": {
                backgroundColor: selectedSize
                  ? palette.secondary
                  : palette.accentDark,
                color: palette.primary,
              },
              margin: "5px 5px",
              borderRadius: "0",
            }}
          >
            Add to Cart
          </Button> */}
        </Box>
      </Box>
    </Grid>
  );
}

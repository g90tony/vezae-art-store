import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
  marketingTypographyStyles,
} from "../../../assets/styles/typography";

export default function ProductDetailsSection(props) {
  const [selectedSize, setSelectedSize] = React.useState({ price: "90" });

  React.useEffect(() => {
    setSelectedSize(props.productDetails.variants[0]);
  }, []);

  function handleChange(e) {
    props.changeSize(e.target.value);
    setSelectedSize(e.target.value);
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "75%" },
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: marketingTypographyStyles.title }}>
          {props.productDetails.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          href={`/shop/collections/view/${props.productDetails.collection.collection_id}`}
          sx={{
            fontSize: headingTypographyStyles.h3,
            "&.MuiLink-root": {
              textDecoration: "none",
              color: palette.primary,
            },
          }}
        >
          {props.productDetails.collection.collection_name}
        </Link>{" "}
        <Typography
          sx={{ fontSize: headingTypographyStyles.h4, fontWeight: 700 }}
        >
          {selectedSize.price} KES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: bodyTypographyStyles.defaultBold,
            fontWeight: 400,
            marginTop: "20px",
            maxHeight: "30vh",
            overflowX: "auto",
          }}
          component="div"
          dangerouslySetInnerHTML={{ __html: props.productDetails.description }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            margin: { xs: "10px auto", lg: "20px 0 10px 0" },
          }}
        >
          <InputLabel sx={{ width: "100%" }} id="sizeSelectLabel">
            Canvas Sizes
          </InputLabel>

          <Select
            sx={{
              backgroundColor: palette.secondary,
              borderColor: palette.secondary,
              borderRadius: 0,
              padding: "10px",
            }}
            labelId="sizeSelectLabel"
            id="sizeSelect"
            value={selectedSize}
            label="Canvas Sizes"
            onChange={handleChange}
          >
            {props.productDetails.variants.map((size) => {
              return (
                <MenuItem
                  key={props.productDetails.variants.indexOf(size)}
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
          width: "100%",
        }}
      >
        <Button
          sx={{
            fontSize: bodyTypographyStyles.defaultBold,
            backgroundColor: palette.secondary,
            color: palette.primary,
            "&:hover": {
              backgroundColor: palette.primary,
              color: palette.secondary,
            },
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          Add to Cart
        </Button>
        <Button
          sx={{
            fontSize: bodyTypographyStyles.defaultBold,
            backgroundColor: palette.primary,
            color: palette.secondary,
            "&:hover": {
              backgroundColor: palette.secondary,
              color: palette.primary,
            },
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          Visit Gallery
        </Button>
      </Box>
    </Grid>
  );
}

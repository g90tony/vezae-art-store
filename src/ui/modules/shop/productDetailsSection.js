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
import { useSelector, useDispatch } from "react-redux";
import { palette } from "../../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
  marketingTypographyStyles,
} from "../../../assets/styles/typography";
import { addCart, updateCart } from "../../../state/slices/cartSlice";
import AddedToCartAlert from "../../components/addedToCartAlert";

import PriceConverter from "../../components/priceConverter";

export default function ProductDetailsSection(props) {
  const [selectedSize, setSelectedSize] = React.useState();
  const [addedToCart, setAddedToCart] = React.useState(false);

  const cartState = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleAddToCart(product, selectedSize) {
    let currentState = cartState;

    let foundItem = undefined;

    currentState.forEach((item) => {
      if (
        item.product_id === product.product_id &&
        item.size === selectedSize.title
      ) {
        item.count++;
        foundItem = item;
      }
    });

    if (foundItem === undefined) {
      const new_cart_item = {
        image: product.images[0].url,
        title: product.title,
        product_id: product.product_id,
        size: selectedSize.title,
        price: selectedSize.price,
        count: 1,
      };

      console.log("new cart item", new_cart_item);

      dispatch(addCart(new_cart_item));

      setAddedToCart(true);

      setTimeout(() => {
        setAddedToCart(false);
      }, 5000);
    } else {
      dispatch(updateCart(foundItem));
    }
  }
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
          display: { xs: "none", lg: "flex" },
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
        </Link>
        <PriceConverter selectedSize={selectedSize} view={true} />
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
            defaultValue={"none"}
            value={selectedSize}
            label="Canvas Sizes"
            onChange={handleChange}
            placeholder="Select a size to view price"
          >
            <MenuItem disabled value="none">
              Select a size to view price
            </MenuItem>
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
          disabled={selectedSize ? false : true}
          onClick={(e) => handleAddToCart(props.productDetails, selectedSize)}
        >
          Add to Cart
        </Button>
        {/* <Button
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
        </Button> */}
      </Box>

      {addedToCart && (
        <AddedToCartAlert
          productAdded={addedToCart}
          productHandled={setAddedToCart}
        />
      )}
    </Grid>
  );
}

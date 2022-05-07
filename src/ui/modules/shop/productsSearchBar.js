import {
  Breadcrumbs,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { palette } from "../../../assets/styles/colors";

import { headingTypographyStyles } from "../../../assets/styles/typography";
import { filterProducts } from "../../../state/slices/productsSlice";
import SearchInput from "../../components/searchInput";

const OrderOptions = [
  { text: "Most Popular", value: "popular" },
  { text: "Latest", value: "newest" },
  { text: "Name Ascending", value: "nasc" },
  { text: "Name Descending", value: "ndes" },
  { text: "Price Ascending", value: "cheap" },
  { text: "Price Descending", value: "expensive" },
  // { text: "Created Date Ascending", value: "oldest" },
];

export default function ProductsSearchBar(props) {
  const dispatch = useDispatch();

  const [sort, setSort] = React.useState("popular");

  function handleChange(e) {
    dispatch(filterProducts(e.target.value));
    setSort(e.target.value);
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: "none",
        justifyContent: { xs: "center", lg: "space-between" },
        alignItems: "center",
        padding: "10px",
        margin: "10px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "auto",
        }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color: palette.primary,
            fontSize: headingTypographyStyles.h4,
            marginLeft: "10px",
          }}
        >
          <Link
            underline="hover"
            sx={{
              color: palette.primary,
              fontSize: headingTypographyStyles.h4,
            }}
            href="/"
          >
            Home
          </Link>
          <Typography
            underline="hover"
            sx={{
              color: palette.primary,
              fontSize: headingTypographyStyles.h5,
            }}
          >
            Art Pieces
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "flex-end" },
          width: { xs: "100%", lg: "auto" },
        }}
      >
        <SearchInput searchType="products" />
        <FormControl
          sx={{
            width: {
              xs: "80%",
              lg: "250px",
            },
            margin: { xs: "10px auto", lg: "10px" },
          }}
        >
          <InputLabel sx={{ width: "100%" }} id="orderSelectLabel">
            Sort by
          </InputLabel>

          <Select
            size="small"
            labelId="orderSelectLabel"
            id="demo-simple-select"
            value={sort}
            label="sort by"
            onChange={handleChange}
          >
            {OrderOptions.map((option) => {
              return (
                <MenuItem
                  key={OrderOptions.indexOf(option)}
                  value={option.value}
                >
                  {option.text}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

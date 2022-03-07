import {
  Breadcrumbs,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";

import { headingTypographyStyles } from "../../../assets/styles/typography";

const OrderOptions = [
  { text: "Most Recent", value: "most_recent" },
  { text: "Alphabetic Ascending", value: "alpha_asc" },
  { text: "Alphabetic Descending", value: "alpha_dsc" },
  { text: "Price Ascending", value: "price_asc" },
  { text: "Price Descend", value: "price_dsc" },
];

export default function ProductsSearchBar() {
  const [sort, setSort] = React.useState("most_recent");

  function handleChange(e) {
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
            Shop
          </Link>
          <Link
            underline="hover"
            sx={{
              color: palette.primary,
              fontSize: headingTypographyStyles.h5,
            }}
            href="/shop/pieces/all"
          >
            All Pieces
          </Link>
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
        <TextField
          size="small"
          id="pieceSearchInput"
          variant="outlined"
          label="Search Pieces"
          sx={{
            width: { xs: "80%", lg: "250px" },
            margin: { xs: "10px auto", lg: "10px" },
          }}
        />
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

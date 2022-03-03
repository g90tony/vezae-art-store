import {
  Autocomplete,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import { headingTypographyStyles } from "../../../assets/styles/typography";

export default function ProductsSearchBar() {
  const [sort, setSort] = React.useState("Most Recent");

  function handleChange(e) {
    setSort(e.target.value);
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        width: { xs: "100%", lg: "90%" },
        display: "flex",
        flexDirection: { xs: "column", lg: "column" },
        justifyContent: { xs: "flex-start", lg: "space-between" },
        alignItems: "center",
        padding: "0 10px",
        margin: "10px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "flex-start",
          padding: "10px",
        }}
      >
        {/* <Box
          sx={{
            width: { xs: "100%", lg: "100%" },
            marginTop: "10px",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontSize: headingTypographyStyles.h4,
              color: palette.primary,
            }}
          >
            Search Bar
          </Typography>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            justifyContent: { xs: "flex-start", lg: "space-between" },
            alignItems: "center",
            padding: "10px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "flex-start" },
              justifyContent: "center",
              padding: "10px",
              width: { xs: "100%", lg: "100%" },
            }}
          >
            <Autocomplete
              id="free-solo-demo"
              sx={{ width: { xs: "100%", lg: "80%" } }}
              freeSolo
              //   options={}

              renderInput={(params) => (
                <TextField {...params} label="Search Pieces" />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "flex-end" },
              padding: "10px",
              width: { xs: "100%", lg: "100%" },
            }}
          >
            <FormControl
              sx={{
                margin: "0px 10px",
                padding: "10px",
                width: { xs: "100%", lg: "80%" },
              }}
            >
              <InputLabel sx={{ width: "100%" }} id="demo-simple-select-label">
                Sort by
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="sort by"
                sx={{ width: "100%" }}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

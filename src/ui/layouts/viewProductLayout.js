import { Box, Breadcrumbs, Button, Grid } from "@mui/material";
import React from "react";
import { palette } from "../../assets/styles/colors";
import { headingTypographyStyles } from "../../assets/styles/typography";
import ChevronLeft from "@mui/icons-material/ChevronLeft";

export default function ViewProductLayout(props) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
        width: "100%",
        padding: "10px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          margin: "0 10px 10px 10px",
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
          <Button
            underline="hover"
            sx={{
              color: palette.primary,
              fontSize: headingTypographyStyles.h4,
            }}
            onClick={() => props.history(-1)}
          >
            <ChevronLeft
              sx={{ margin: "auto", fontSize: headingTypographyStyles.h5 }}
            />{" "}
          </Button>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          flexWrap: "nowrap",
          width: "100%",
          padding: "10px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ width: "100%", margin: "0 auto" }}>{props.child1}</Box>
        <Box sx={{ width: "100%" }}>{props.child2}</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          width: "100%",
          margin: "0 10px 10px 10px",
        }}
      >
        {props.child3}
      </Box>
    </Grid>
  );
}

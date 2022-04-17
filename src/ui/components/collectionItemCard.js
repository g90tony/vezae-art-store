import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function CollectionItemCard(props) {
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
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={props.product.image}
          alt={""}
          onLoad={props.isLoading}
        />
      </Box>
      <Box sx={{ padding: "10px", margin: "auto 5px " }}>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "none",
            alignItems: "center",
            width: "80%",
            heigh: "100%",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: bodyTypographyStyles.defaultExtraLight,
              //   fontWeight: 800,
              textAlign: "start",
              height: "4rem",
              overflow: "clip",
              textOverflow: "ellipsis",
              lineBreak: "strict",
            }}
            dangerouslySetInnerHTML={{ __html: props.product.description }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            padding: 0,
            marginTop: "5px",
            marginBottom: "10px",
          }}
        >
          <Button
            href={`/shop/collections/view/${props.product.collection_id}`}
            sx={{
              textDecoration: "none",
              backgroundColor: palette.primary,
              color: palette.secondary,
              fontSize: bodyTypographyStyles.smallBold,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              width: "100%",
              margin: "auto 0",
              borderRadius: "0",
            }}
          >
            View Collection
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

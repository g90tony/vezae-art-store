import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

import "../../assets/styles/landingGridStyle.css";

export default function CollectionGridItem(props) {
  return (
    <div
      className={`collection-grid-photo${props.index}`}
      style={{
        padding: "20px",
        maxWidth: { xs: "100%", lg: "300px" },
        maxHeight: { xs: "100%", lg: "300px" },
        margin: { xs: "10px", lg: "auto" },
        position: "relative",
      }}
    >
      <Box
        component="img"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
        src={props.product.image}
        alt={props.product.title}
        onLoad={() => props.hasLoaded()}
      />
      <div className="collection-grid-info">
        <Typography
          sx={{
            fontSze: headingTypographyStyles.h3,
            color: palette.secondary,
            fontWeight: 900,
          }}
        >
          {props.product.title}
        </Typography>
        {/* <Typography
          sx={{
            fontSze: headingTypographyStyles.h5,
            width: "80%",
            margin: "5px auto",
            textAlign: "center",
            maxheight: "50%",
            color: palette.secondary,
          }}
        >
          {props.product.price}
        </Typography> */}
        <Button
          href={`/shop/pieces/view/${props.product.product_id}`}
          sx={{
            color: props.darkBg ? palette.secondary : palette.primary,
            backgroundColor: props.darkBg ? palette.primary : palette.secondary,
            "&:hover": {
              color: props.darkBg ? palette.primary : palette.secondary,
              backgroundColor: props.darkBg
                ? palette.secondary
                : palette.primary,
            },
            borderRadius: 0,
            fontSize: bodyTypographyStyles.smallBold,
            textDecoration: "none",
            textAlign: "center",
            padding: "10px",
            marginTop: "5px",
            fontWeight: 900,
          }}
        >
          View Piece
        </Button>
      </div>
    </div>
  );
}

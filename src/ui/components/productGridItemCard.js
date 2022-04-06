import { Button, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../assets/styles/colors";
import { bodyTypographyStyles } from "../../assets/styles/typography";
import "../../assets/styles/landingGridStyle.css";

export default function ProductGridItemCard(props) {
  return (
    <div
      className={`landing-grid-image${props.piece.index}`}
      styles={{ width: props.width }}
      key={props.piece.index}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={props.piece.image}
        alt={props.piece.title}
      />
      <div className="landing-grid-image-info">
        <Typography
          sx={{ fontSize: bodyTypographyStyles.largeBold, textAlign: "center" }}
        >
          {props.piece.title}
        </Typography>
        <Typography
          sx={{
            fontSize: bodyTypographyStyles.defaultLight,
            marginTop: "10px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {props.piece.price}
        </Typography>
        <Button
          href={`/shop/pieces/view/${props.piece.product_id}`}
          sx={{
            backgroundColor: palette.secondary,
            color: palette.primary,
            "&:hover": {
              backgroundColor: palette.primary,
              color: palette.secondary,
            },
            borderRadius: 0,
            fontSize: bodyTypographyStyles.smallBold,
            textDecoration: "none",
            textAlign: "center",
            padding: "5px",
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

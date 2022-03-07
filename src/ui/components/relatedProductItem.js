import { Button, Typography } from "@mui/material";
import React from "react";
import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

export default function RelatedProductItem(props) {
  return (
    <React.Fragment key={props.product.id}>
      <div
        className={`collection-grid-photo${props.product.id}`}
        style={{
          padding: "10px",
          width: props.width,
          height: props.width,
          margin: props.width === "350px" ? "auto 10px" : "10px auto",
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
          src={
            props.buttonText === "View Collection"
              ? props.product.sizes[0].images[0]
              : props.selectedSize.images[0]
          }
          alt={props.product.title}
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
          <Typography
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
          </Typography>
          <Button
            href={
              props.buttonText === "View Collection"
                ? `/shop/collections/view/${props.product.id}`
                : `/shop/pieces/view/${props.product.id}`
            }
            sx={{
              color: props.darkBg ? palette.secondary : palette.primary,
              backgroundColor: props.darkBg
                ? palette.primary
                : palette.secondary,
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
            {props.buttonText}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

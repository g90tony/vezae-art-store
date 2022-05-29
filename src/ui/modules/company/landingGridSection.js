import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import {
  marketingTypographyStyles as marketing,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";

import ProductGridItemCard from "../../components/productGridItemCard";

import { getLandingGrid } from "../../../api/landing";

export default function LandingGridSection() {
  const [gridImages, setGridImages] = React.useState([]);

  async function loadGrid() {
    const data = await getLandingGrid();

    const gridItems = data.map((dataItem) => {
      dataItem.index = data.indexOf(dataItem);

      return dataItem;
    });
    setGridImages(gridItems);
  }

  React.useEffect(() => {
    loadGrid();
  }, []);

  return (
    <>
      <Grid
        sx={{
          width: "90%",
          margin: "0 auto",
          display: { xs: "none", md: "grid" },
          gridTemplateColumns:
            "repeat(6, [col-start] minmax(100px, 300px) [col-end])",
          gridTemplateRows: "auto auto auto auto",
          gridTemplateAreas: `"thumbnail1 thumbnail2 thumbnail3 thumbnail4 thumbnail5 thumbnail6"
    "hero_text hero_text hero_text thumbnail7 thumbnail8 thumbnail9"
    "hero_text hero_text hero_text thumbnail10 thumbnail11 thumbnail12"
    "thumbnail13 thumbnail14 thumbnail15 thumbnail16 thumbnail17 thumbnail18"`,
        }}
      >
        <div className="landing-grid-hero">
          <Typography
            sx={{
              fontFamily: marketing.subHero,
              fontSize: { md: "3rem", lg: "4rem" },
              width: "100%",
            }}
          >
            Adding a splash of AI onto every wall
          </Typography>
          <Typography
            sx={{
              fontSize: body.extraLargeExtraLight,
              width: { md: "100%", lg: "70%" },
              textAlign: "start",
              marginTop: "10px",
            }}
          >
            We are committed to delivering aesthetically appealing artworks,
            created by AI, for any and every wall or space
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              marginTop: "10px",
              width: "100%",
              flexWrap: "nowrap",
            }}
          >
            <Button
              href="/shop/collections/all"
              sx={{
                backgroundColor: palette.primary,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: palette.secondary,
                  color: palette.primary,
                  borderColor: palette.primary,
                },
                fontSize: body.largeBold,
                textDecoration: "none",
                height: "fit-content",
                padding: "15px",
                marginRight: "5px",
                fontWeight: 900,
                borderRadius: 0,
              }}
            >
              View Art Collections
            </Button>
            <Button
              href="/shop/pieces/all"
              sx={{
                backgroundColor: palette.primary,
                color: palette.secondary,
                "&:hover": {
                  backgroundColor: palette.secondary,
                  color: palette.primary,
                  borderColor: palette.primary,
                },
                fontSize: body.largeBold,
                textDecoration: "none",
                height: "fit-content",
                padding: "15px",
                marginRight: "5px",
                fontWeight: 900,
                borderRadius: 0,
              }}
            >
              View Art Peices
            </Button>
          </Box>
        </div>

        {gridImages.map((image) => {
          return (
            <ProductGridItemCard
              key={gridImages.indexOf(image)}
              piece={image}
              index={gridImages.indexOf(image)}
            />
          );
        })}
      </Grid>

      <Grid
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          padding: "20px",
          width: "100%",
          height: "100%",
          margin: "auto",
        }}
        maxWidth="md"
      >
        <Typography sx={{ fontSize: marketing.title, width: "100%" }}>
          Adding a splash of AI onto every wall
        </Typography>
        <Typography sx={{ fontSize: body.extraLargeExtraLight, width: "100%" }}>
          We are committed to delivering aesthetically appealing artworks,
          created by AI, for any and every wall or space
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            flexWrap: "nowrap",
          }}
        >
          <Button
            href="/shop/collections/all"
            sx={{
              backgroundColor: palette.primary,
              color: palette.secondary,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              fontSize: body.largeBold,
              textDecoration: "none",
              height: "fit-content",
              padding: "10px",
              margin: "5px",
            }}
          >
            View Art Collections
          </Button>
          <Button
            href="/shop/pieces/all"
            sx={{
              backgroundColor: palette.primary,
              color: palette.secondary,
              "&:hover": {
                backgroundColor: palette.secondary,
                color: palette.primary,
              },
              fontSize: body.largeBold,
              textDecoration: "none",
              height: "fit-content",
              padding: "10px",
              margin: "5px",
            }}
          >
            View Art Pieces
          </Button>
        </Box>
      </Grid>
    </>
  );
}

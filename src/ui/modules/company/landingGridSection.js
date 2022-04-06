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
          width: "80%",
          margin: "0 auto",
          display: { xs: "none", lg: "grid" },
          gridTemplateColumns: "250px 250px 250px 250px 250px 250px",
          gridTemplateRows: "250px 250px 250px 250px",
          gridTemplateAreas: `"thumbnail1 thumbnail2 thumbnail3 thumbnail4 thumbnail5 thumbnail6"
    "hero_text hero_text hero_text thumbnail7 thumbnail8 thumbnail9"
    "hero_text hero_text hero_text thumbnail10 thumbnail11 thumbnail12"
    "thumbnail13 thumbnail14 thumbnail15 thumbnail16 thumbnail17 thumbnail18"`,
        }}
      >
        <div className="landing-grid-hero">
          <Typography sx={{ fontSize: marketing.subHero, width: "100%" }}>
            Adding a splash of AI onto every wall
          </Typography>
          <Typography
            sx={{
              fontSize: body.extraLargeExtraLight,
              width: "70%",
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
              Visit Shop
            </Button>
            <Button
              href="/gallery"
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
              Visit Gallery
            </Button>
          </Box>
        </div>

        {gridImages.map((image) => {
          return (
            <ProductGridItemCard
              key={gridImages.indexOf(image)}
              piece={image}
            />
          );
        })}
      </Grid>

      <Grid
        sx={{
          display: { xs: "flex", lg: "none" },
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
            href="/"
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
            Visit Shop
          </Button>
          <Button
            href="/gallery"
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
            Visit Gallery
          </Button>
        </Box>
      </Grid>
    </>
  );
}

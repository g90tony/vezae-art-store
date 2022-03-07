import React from "react";

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import {
  marketingTypographyStyles as marketing,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";
import ProductGridItemCard from "../../components/productGridItemCard";

export default function LandingGridSection() {
  const gridImages = [
    {
      id: "1",
      url: "https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 1",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/1",
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/1606591/pexels-photo-1606591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 2",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/2",
    },
    {
      id: "3",
      url: "https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 3",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/3",
    },
    {
      id: "4",
      url: "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 4",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/4",
    },
    {
      id: "5",
      url: "https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 5",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/5",
    },
    {
      id: "6",
      url: "https://images.pexels.com/photos/4175054/pexels-photo-4175054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 6",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/6",
    },
    {
      id: "7",
      url: "https://images.pexels.com/photos/3045825/pexels-photo-3045825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 7",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/7",
    },
    {
      id: "8",
      url: "https://images.pexels.com/photos/2860810/pexels-photo-2860810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 8",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/8",
    },
    {
      id: "9",
      url: "https://images.pexels.com/photos/2983141/pexels-photo-2983141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 9",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/9",
    },
    {
      id: "10",
      url: "https://images.pexels.com/photos/3219951/pexels-photo-3219951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Test Image 10",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/10",
    },
    {
      id: "11",
      url: "https://images.pexels.com/photos/3753025/pexels-photo-3753025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 11",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/11",
    },
    {
      id: "12",
      url: "https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 12",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/12",
    },
    {
      id: "13",
      url: "https://images.pexels.com/photos/5603660/pexels-photo-5603660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 13",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/13",
    },
    {
      id: "14",
      url: "https://images.pexels.com/photos/7004737/pexels-photo-7004737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 14",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/14",
    },
    {
      id: "15",
      url: "https://images.pexels.com/photos/3961199/pexels-photo-3961199.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 15",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/15",
    },
    {
      id: "16",
      url: "https://images.pexels.com/photos/3156125/pexels-photo-3156125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 16",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/16",
    },
    {
      id: "17",
      url: "https://images.pexels.com/photos/971546/pexels-photo-971546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 17",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/17",
    },
    {
      id: "18",
      url: "https://images.pexels.com/photos/2728587/pexels-photo-2728587.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Test Image 18",
      description: "This is a test artwork, very beautiful for any page",
      price: "$23.95",
      path: "/shop/pieces/view/18",
    },
  ];

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
          return <ProductGridItemCard piece={image} />;
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

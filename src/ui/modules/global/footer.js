import React from "react";

import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";

import { palette } from "../../../assets/styles/colors";
import { bodyTypographyStyles as body } from "../../../assets/styles/typography";
import footerLogo from "../../../assets/images/footer_logo.png";
import { Link } from "react-router-dom";

export default function FooterBar() {
  const topCollections = [
    {
      id: 1,
      path: "/shop/collection/HorsesCollection",
      text: "Horses Collection",
    },
    {
      id: 2,
      path: "/shop/collection/lifeOnWater",
      text: "Life on Water Collection",
    },
    {
      id: 3,
      path: "/shop/collection/seasonsInFrance",
      text: "Seasons in France Collection",
    },
    {
      id: 3,
      path: "/shop/collection/outInNature",
      text: "Out in Nature Collection",
    },
    {
      id: 4,
      path: "/shop/collection/coupleActivities",
      text: "Couple Activities Collection",
    },
  ];

  const categories = [
    {
      id: 1,
      path: "/shop/pieces/category=disco+diffusion",
      text: "Disco Diffusion ",
    },
    {
      id: 2,
      path: "/shop/pieces/category=speed+painting",
      text: "Speed Painting",
    },
    {
      id: 3,
      path: "/shop/pieces/category=concept+art",
      text: "Concept Art",
    },
    {
      id: 4,
      path: "/shop/pieces/category=romanticism+art",
      text: "Romanticism Art",
    },
  ];

  const quickLinks = [
    {
      id: 1,
      path: "/about-us",
      text: "About us",
    },
    {
      id: 1,
      path: "/shipping-policies",
      text: "Shipping Policies",
    },
    {
      id: 1,
      path: "/gallery",
      text: "Gallery",
    },
    {
      id: 1,
      path: "/contact-us",
      text: "Contact us",
    },
  ];

  return (
    <Grid
      container
      sx={{
        height: { xs: "auto", lg: "300px" },
        backgroundColor: palette.primary,
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        flexWrap: "nowrap",
        padding: "20px 50px",
        position: "static",
        bottom: 0,
      }}
    >
      <Box
        sx={{
          width: "auto",
          margin: "10px 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "150px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={footerLogo}
          alt="footer logo"
        />
        <Typography
          sx={{
            fontSize: body.defaultExtraLight,
            marginTop: "20px",
            color: palette.secondary,
          }}
        >
          Showcasing AI’s artistic creativity
        </Typography>
      </Box>
      <Box
        sx={{
          width: "200px",
          margin: "10px 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: body.extraLargeBold, color: palette.secondary }}
        >
          Our Mission
        </Typography>

        <Typography
          sx={{
            fontSize: body.defaultLight,
            marginTop: "20px",
            color: palette.secondary,
          }}
        >
          We are committed to delivering aesthetically appealing artworks,
          created by AI, for any and every room
        </Typography>
      </Box>
      <Box
        sx={{
          width: "auto",
          margin: "10px 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: body.extraLargeBold, color: palette.secondary }}
        >
          Category
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {categories.map((collection) => {
            return (
              <Link
                to={collection.path}
                style={{
                  textDecoration: "none",
                  fontSize: body.smallLight,
                  marginBottom: "5px",
                  color: palette.secondary,
                }}
              >
                <Typography
                  sx={{ color: palette.secondary, fontSize: body.smallLight }}
                >
                  {collection.text}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: "auto",
          margin: "10px 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: body.extraLargeBold, color: palette.secondary }}
        >
          Top Collections
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {topCollections.map((collection) => {
            return (
              <Link
                to={collection.path}
                style={{
                  textDecoration: "none",
                  fontSize: body.smallLight,
                  marginBottom: "5px",
                }}
              >
                <Typography
                  sx={{ color: palette.secondary, fontSize: body.smallLight }}
                >
                  {collection.text}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          width: "auto",
          margin: "10px 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "start",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: body.extraLargeBold, color: palette.secondary }}
        >
          Quick Links
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          {quickLinks.map((link) => {
            return (
              <Link
                to={link.path}
                style={{
                  textDecoration: "none",
                  fontSize: body.smallLight,
                  marginBottom: "5px",
                }}
              >
                <Typography
                  sx={{ color: palette.secondary, fontSize: body.smallLight }}
                >
                  {link.text}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Grid>
  );
}

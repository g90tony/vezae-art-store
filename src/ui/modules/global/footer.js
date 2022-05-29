import React from "react";

import { Grid, Link, Typography } from "@mui/material";

import { Box } from "@mui/system";

import { palette } from "../../../assets/styles/colors";
import { bodyTypographyStyles as body } from "../../../assets/styles/typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import footerLogo from "../../../assets/images/logo.svg";

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

  const socials = [
    {
      id: 1,
      path: "https://www.facebook.com/vazae.art/",
      text: () => (
        <FacebookIcon sx={{ color: palette.secondary, fontSize: "1.5rem" }} />
      ),
    },
    {
      id: 2,
      path: "https://www.instagram.com/vezae.art/",
      text: () => (
        <InstagramIcon sx={{ color: palette.secondary, fontSize: "1.5rem" }} />
      ),
    },
    {
      id: 3,
      path: "https://twitter.com/VezaeArt/",
      text: () => (
        <TwitterIcon sx={{ color: palette.secondary, fontSize: "1.5rem" }} />
      ),
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
        // height: { xs: "auto", lg: "300px" },
        backgroundColor: palette.primary,
        display: "flex",
        // position: "absolute",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        padding: "20px 40px",
        bottom: 0,
      }}
    >
      <Box
        sx={{
          width: "auto",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          style={{
            width: "125px",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={footerLogo}
          alt="footer logo"
        />
        <Typography
          sx={{
            fontSize: body.largeLight,
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
            fontSize: body.defaultExtraLight,
            marginTop: "20px",
            width: "100%",
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
          Social Links
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: { xs: "space-evenly", lg: "space-between" },
            marginTop: "20px",
            textAlign: "start",
          }}
        >
          {socials.map((collection) => {
            return (
              <Link
                key={socials.indexOf(collection)}
                href={collection.path}
                target="_blank"
                style={{
                  textDecoration: "none",
                  fontSize: body.smallLight,
                  marginBottom: "5px",
                  color: palette.secondary,
                }}
              >
                {collection.text()}
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
                key={topCollections.indexOf(collection)}
                href={collection.path}
                target="_blank"
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
                key={quickLinks.indexOf(link)}
                href={link.path}
                target="_blank"
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

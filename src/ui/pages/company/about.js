import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import logoWaterMark from "../../../assets/images/logo_watermark.png";
import {
  headingTypographyStyles as headings,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";

export default function AboutPage() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "20px",
        margin: "0 20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: { xs: "none", lg: "flex" },
            position: "relative",
          }}
        >
          <img
            src={logoWaterMark}
            style={{
              width: "80%",
              heigh: "fit-content",
              objectFit: "contain",
            }}
            alt=""
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: { xs: "100%", lg: "75%" },
            height: "100%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignText: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: headings.h1,
              color: palette.primary,
              marginBottom: "20px",
              textAlign: "start",
            }}
          >
            Our Story
          </Typography>
          <Typography
            sx={{
              fontSize: body.largeExtraLight,
              color: palette.primary,
              marginBottom: "20px",
              marginLeft: "10px",
              textAlign: "start",
            }}
          >
            King Tony Art is a revolutionary new art company on the internet,
            specializing in using artificial intelligence to generate unique
            artworks that bring life to any wall or room. Our artists are not
            humans, rather they are advanced AI systems that can create
            beautiful art peices from a short simple description. <br />
            <br />
            King Tony Art was started by Caleb Tony, after stummbling on the
            VQGAN+CLIP model while doing preparing for an AI side project. After
            weeks of testing and perfecting the art of “promp-based” image
            generation on the model, he decided it would an injustice keep such
            artistic creativity to himself and opted to instead to showcase
            these beauties to the world. <br />
            <br />
            We exisist to showcase AI’s creativity to the world, through canvas
            art, one wall at a time.
          </Typography>
          <Typography
            sx={{
              fontSize: headings.h1,
              color: palette.primary,
              marginBottom: "20px",
              textAlign: "start",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: body.largeExtraLight,
              color: palette.primary,
              marginBottom: "20px",
              marginLeft: "10px",
              textAlign: "start",
            }}
          >
            We want more of the world to know and interact with Artifical
            Intelligence because we belive its the future. AI has been
            expontially growing in the couple of years and can do so much more
            that just create art master pieces, but there is a way to go before
            it is adopted and interated to everyday life.
            <br />
            <br />
            Caleb Tony, sees this as a necessary first step to bring AI into
            everyday conversations. Hopefully, through this people can not only
            get familliar with the technology but get involved in exploring and
            harnesing it’s true potential
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

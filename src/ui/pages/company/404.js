import React from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

import {
  marketingTypographyStyles as marketing,
  headingTypographyStyles as headings,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";
import logoWaterMark from "../../../assets/images/logo_watermark.png";

export default function Error404Page() {
  let history = useNavigate();

  const handleRedirect = (e) => {
    history(-1);
  };

  React.useEffect(() => {
    let timer1 = setTimeout(() => history(-1), 3000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, [history]);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            display: { xs: "none", lg: "flex" },
          }}
        >
          <img
            src={logoWaterMark}
            style={{
              width: "100%",
              heigh: "fit-content",
              objectFit: "contain",
            }}
            alt=""
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "50%" },
            backgroundImage: {
              xs: `url(${logoWaterMark}) center center`,
              lg: "none",
            },

            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignText: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: headings.h4,
              color: palette.primary,
              marginBottom: "20px",
            }}
          >
            404 - Page not found
          </Typography>
          <Typography
            sx={{
              fontSize: marketing.hero,
              color: palette.primary,
              marginBottom: "20px",
            }}
          >
            You seem to be lost...
          </Typography>
          <Typography
            sx={{
              fontSize: body.largeExtraLight,
              color: palette.primary,
              marginBottom: "20px",
            }}
          >
            We will shortly redirect you to your previous page. If you are not
            redirected in the next 30 seconds,
            <Button
              onClick={handleRedirect}
              sx={{
                backgroundColor: palette.accentLight,
                border: "0px",
                fontWeight: 800,
                color: palette.primary,
              }}
            >
              CLICK HERE
            </Button>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

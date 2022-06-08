import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

// import logoWaterMark from "../../../assets/images/watermark_logo.svg";
import {
  headingTypographyStyles as headings,
  bodyTypographyStyles as body,
} from "../../../assets/styles/typography";
import { palette } from "../../../assets/styles/colors";

export default function ContactsPage() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            width: { xs: "100%", lg: "30%" },
            display: { xs: "none", lg: "flex" },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/images/watermark_logo.svg"
            style={{
              width: "100%",
              opacity: "30%",
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
            Talk to us
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
            Do you have something to say? Reach out to us, we would love to
            better serve you or in the very least, get to know about you.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              padding: { xs: "0px", lg: "20px" },
              margin: "auto",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: { xs: "center", lg: "space-between" },
                width: { xs: "100%", lg: "80%" },
                margin: "auto",
              }}
            >
              <TextField
                label="Names"
                sx={{
                  backgroundColor: palette.secondary,
                  borderColor: palette.accentLight,
                  width: "100%",
                  margin: "10px ",
                }}
              />
              <TextField
                label="Email Address"
                sx={{
                  backgroundColor: palette.secondary,
                  borderColor: palette.accentLight,
                  width: "100%",
                  margin: "10px ",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" },
                margin: "auto",
              }}
            >
              <TextField
                label="Subject"
                sx={{
                  backgroundColor: palette.secondary,
                  borderColor: palette.accentLight,
                  width: "100%",
                  margin: "10px ",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "space-between",
                width: { xs: "100%", lg: "80%" },
                margin: "auto",
              }}
            >
              <TextField
                label="Message"
                sx={{
                  backgroundColor: palette.secondary,
                  borderColor: palette.accentLight,
                  width: "100%",
                  margin: "10px ",
                }}
                multiline
                rows={5}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", lg: "80%" },
                margin: { xs: "auto", lg: "10px auto" },
              }}
            >
              <Button
                sx={{
                  backgroundColor: palette.primary,
                  color: palette.secondary,
                  fontSize: body.largeBold,
                  width: "100%",
                  height: "auto",
                  margin: { xs: "auto", lg: "10px auto" },
                  padding: "10px",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

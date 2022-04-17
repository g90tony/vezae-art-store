import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
import footerLogo from "../../../assets/images/footer_logo.png";
import { LinearProgress } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: "100",
        backgroundColor: palette.primary,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <img src={footerLogo} width="15%" alt="" />

      <Box sx={{ width: "25%", marginTop: "50px" }}>
        <LinearProgress
          sx={{
            backgroundColor: palette.primary,
            "& .MuiLinearProgress-bar": {
              backgroundColor: palette.secondary,
            },
          }}
        />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/system";
import React from "react";
import { palette } from "../../../assets/styles/colors";
// import footerLogo from "../../../assets/images/footer_logo.svg";
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
      <Box
        component="img"
        src="/images/footer_logo.svg"
        alt=""
        sx={{
          width: { xs: "50%", lg: "15%" },
          marginTop: { xs: "20px", lg: "5px" },
        }}
      />

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

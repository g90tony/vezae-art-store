import { Grid } from "@mui/material";
import React from "react";
import LandingGridSection from "../../modules/company/landingGridSection";

export default function LandingPage() {
  return (
    <Grid container sx={{ display: "flex", flexDisplay: "column" }}>
      <LandingGridSection />
    </Grid>
  );
}

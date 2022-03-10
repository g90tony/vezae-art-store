import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollToTop from "./helpers/scrollToTop";

import { palette } from "./assets/styles/colors";
import { RoutingTable } from "./Routes";
import { Grid } from "@mui/material";

import NavBar from "./ui/modules/global/navbar";
import FooterBar from "./ui/modules/global/footer";
function App(props) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        overFlowX: "hidden",
        backgroundColor: palette.accentLight,
      }}
      className="App"
    >
      <Router>
        <ScrollToTop />
        <NavBar />
        <Grid container sx={{ marginTop: "100px", padding: "20px" }}>
          <RoutingTable />
        </Grid>
        <FooterBar />
      </Router>
    </Grid>
  );
}

export default App;

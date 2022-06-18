/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import ScrollToTop from "./helpers/scrollToTop";

import { palette } from "./assets/styles/colors";
import { RoutingTable } from "./Routes";
import { Grid } from "@mui/material";

import NavBar from "./ui/modules/global/navbar";
import FooterBar from "./ui/modules/global/footer";

import { loadCurrenciesData } from "./state/slices/currencyRates";
import {
  getConversionRates,
  getPopularCurrencyInfo,
} from "./api/currencyConverter";
import { getUseLocation } from "./api/useLocation";
import { loadPopular, updateSelected } from "./state/slices/currencySelector";
import { setUserLocation } from "./state/slices/userLocation";

function App() {
  const dispatch = useDispatch();

  const loadData = React.useCallback(async () => {
    try {
      const currencies = await getConversionRates();
      const popularCurrencies = await getPopularCurrencyInfo();
      const userLocationData = await getUseLocation();

      popularCurrencies.push(userLocationData);

      if (userLocationData !== null) {
        dispatch(updateSelected(userLocationData));
      }
      dispatch(loadPopular(popularCurrencies));
      if (userLocationData !== null) {
        dispatch(setUserLocation(userLocationData));
      }
      dispatch(loadCurrenciesData(currencies));
    } catch (err) {
      console.error("There was a problem setting up currencies", err);
    }
  }, []);

  React.useEffect(() => {
    loadData();
    return () => {};
  }, []);

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

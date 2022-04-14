/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React from "react";

import LandingCollectionSection from "../../modules/company/landingCollectionSection";
import LandingGridSection from "../../modules/company/landingGridSection";

import {
  getFeaturedCollection,
  getLatestCollection,
  getTrendingCollection,
} from "../../../api/landing";
import {
  getConversionRates,
  getPopularCurrencyInfo,
} from "../../../api/currencyConverter";
import { useDispatch } from "react-redux";
import { loadCurrenciesData } from "../../../state/slices/currencyRates";
import { getUseLocation } from "../../../api/useLocation";
import { setUserLocation } from "../../../state/slices/userLocation";
import {
  loadPopular,
  updateSelected,
} from "../../../state/slices/currencySelector";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [featuredCollection, setFeaturedCollection] = React.useState({});
  const [trendingCollection, setTrendingCollection] = React.useState({});
  const [latestCollection, setLatestCollection] = React.useState({});

  React.useEffect(() => {
    async function loadData() {
      try {
        const featuredCollection = await getFeaturedCollection();
        const latestCollection = await getLatestCollection();
        const trendingCollection = await getTrendingCollection();
        const currencies = await getConversionRates();
        const popularCurrencies = await getPopularCurrencyInfo();

        if (featuredCollection && latestCollection && trendingCollection) {
          setFeaturedCollection(featuredCollection);
          setTrendingCollection(trendingCollection);
          setLatestCollection(latestCollection);
        }
        const userLocationData = await getUseLocation();

        popularCurrencies.push(userLocationData);

        dispatch(updateSelected(userLocationData));
        dispatch(loadPopular(popularCurrencies));
        dispatch(setUserLocation(userLocationData));
        dispatch(loadCurrenciesData(currencies));
      } catch (error) {
        console.error(error);

        alert("There was a problem loading the landing collection section");
      }
    }

    loadData();
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        marginBottom: "20px",
      }}
    >
      <LandingGridSection />
      {latestCollection && (
        <LandingCollectionSection
          isAlternate={false}
          darkBg={false}
          collection={latestCollection}
          sectionTitle="Latest Collection"
        />
      )}
      {featuredCollection && (
        <LandingCollectionSection
          isAlternate={true}
          darkBg={true}
          collection={featuredCollection}
          sectionTitle="Featured Collection"
        />
      )}
      {trendingCollection && (
        <LandingCollectionSection
          isAlternate={false}
          darkBg={false}
          collection={trendingCollection}
          sectionTitle="Trending Collection"
        />
      )}
    </Grid>
  );
}

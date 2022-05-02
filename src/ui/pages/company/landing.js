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

import LoadingScreen from "../../modules/global/loading";

export default function LandingPage() {
  const [featuredCollection, setFeaturedCollection] = React.useState({});
  const [trendingCollection, setTrendingCollection] = React.useState({});
  const [latestCollection, setLatestCollection] = React.useState({});
  const [featuredHasLoaded, setFeaturedHasLoaded] = React.useState(false);
  const [trendingHasLoaded, setTrendingHasLoaded] = React.useState(false);
  const [latestHasLoaded, setLatestHasLoaded] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  const loadData = React.useCallback(async () => {
    try {
      const featuredCollection = await getFeaturedCollection();
      const latestCollection = await getLatestCollection();
      const trendingCollection = await getTrendingCollection();

      if (featuredCollection && latestCollection && trendingCollection) {
        setFeaturedCollection(featuredCollection);
        setTrendingCollection(trendingCollection);
        setLatestCollection(latestCollection);
      }
    } catch (error) {
      console.error(error);

      alert("There was a problem loading the landing collection section");
    }
  }, []);

  React.useEffect(() => {
    loadData();
  }, []);

  function handleFeaturedHasLoaded() {
    setFeaturedHasLoaded(true);

    if (featuredHasLoaded && trendingHasLoaded && latestHasLoaded) {
      setHasLoaded(true);
    }
  }
  function handleTrendingHasLoaded() {
    setTrendingHasLoaded(true);

    if (featuredHasLoaded && trendingHasLoaded && latestHasLoaded) {
      setHasLoaded(true);
    }
  }
  function handleLatestHasLoaded() {
    setLatestHasLoaded(true);

    if (featuredHasLoaded && trendingHasLoaded && latestHasLoaded) {
      setHasLoaded(true);
    }
  }

  return (
    <>
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
            loadingManager={handleLatestHasLoaded}
          />
        )}
        {featuredCollection && (
          <LandingCollectionSection
            isAlternate={true}
            darkBg={true}
            collection={featuredCollection}
            sectionTitle="Featured Collection"
            loadingManager={handleFeaturedHasLoaded}
          />
        )}
        {trendingCollection && (
          <LandingCollectionSection
            isAlternate={false}
            darkBg={false}
            collection={trendingCollection}
            sectionTitle="Trending Collection"
            loadingManager={handleTrendingHasLoaded}
          />
        )}
      </Grid>
      {hasLoaded === false && <LoadingScreen />}
    </>
  );
}

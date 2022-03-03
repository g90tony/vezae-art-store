import { Grid } from "@mui/material";
import React from "react";

import LandingCollectionSection from "../../modules/company/landingCollectionSection";
import LandingGridSection from "../../modules/company/landingGridSection";

import { dummyFeaturedCollection as featuredCollection } from "../../../helpers/data/dummyData";

export default function LandingPage() {
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
      <LandingCollectionSection
        isAlternate={false}
        darkBg={false}
        collection={featuredCollection}
        sectionTitle="Latest Collection"
      />
      <LandingCollectionSection
        isAlternate={true}
        darkBg={true}
        collection={featuredCollection}
        sectionTitle="Featured Collection"
      />
      <LandingCollectionSection
        isAlternate={false}
        darkBg={false}
        collection={featuredCollection}
        sectionTitle="Trending Collection"
      />
    </Grid>
  );
}

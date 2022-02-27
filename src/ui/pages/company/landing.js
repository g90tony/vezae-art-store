import { Grid } from "@mui/material";
import React from "react";

import LandingCollectionSection from "../../modules/company/landingCollectionSection";
import LandingGridSection from "../../modules/company/landingGridSection";
import NewestCollectionSection from "../../modules/company/newestCollectoinSection";
import PopularCollectionSection from "../../modules/company/popularCollectionSection";

export default function LandingPage() {
  const featuredCollection = {
    title: "Horses on a sunset beach",
    description: `You're looking at a digital painting of a horse on the beach. It
            features sunset colors and speed painting techniques, this painting
            best fits bright warm colored rooms well as any large bare wall in a
            room with plenty of sunlight.`,
    price: "$27.95",
    collectionURL: "/shop/collections/horses+on+a+sunset+beach",
    pieces: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "collection item #1",
        price: "$27.95",
        path: "/shops/product/123",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/1606591/pexels-photo-1606591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "collection item #2",
        price: "$27.95",
        path: "/shops/product/123",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "collection item #3",
        price: "$27.95",
        path: "/shops/product/123",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "collection item #4",
        price: "$27.95",
        path: "/shops/product/123",
      },
    ],
  };
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
      {/* <FeaturedCollectionSection /> */}
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

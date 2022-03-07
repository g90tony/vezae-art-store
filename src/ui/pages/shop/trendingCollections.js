import React from "react";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopTrendingCollectionsPage() {
  return (
    <CollectionsGridLayout
      child1={<FilterCollectionsCard />}
      child2={<CollectionsSearchBar pageName="Trending Collections" />}
      collections={dummyProducts}
      width="350px"
      pageName="All Pieces"
    />
  );
}
import React from "react";
import { useParams } from "react-router-dom";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopAllCollectionsPage(props) {
  const { filter } = useParams();

  return (
    <CollectionsGridLayout
      child1={<FilterCollectionsCard />}
      child2={<CollectionsSearchBar pageName={filter} />}
      collections={dummyProducts}
      width="350px"
      pageName={filter}
    />
  );
}

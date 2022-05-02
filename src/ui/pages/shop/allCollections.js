/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";

import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import LoadingScreen from "../../modules/global/loading";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
// import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopAllCollectionsPage(props) {
  const ALL_COLLECTIONS_STATE = useSelector((state) => state.collections);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  return (
    <>
      <CollectionsGridLayout
        loadingController={setHasLoaded}
        child2={<CollectionsSearchBar />}
        collections={ALL_COLLECTIONS_STATE}
        width="350px"
      />
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

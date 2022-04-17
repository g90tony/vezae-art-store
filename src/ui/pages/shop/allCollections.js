/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { getAllCollections } from "../../../api/collections";

import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import LoadingScreen from "../../modules/global/loading";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
// import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopAllCollectionsPage(props) {
  const [collections, setCollections] = React.useState([]);
  const [hasLoaded, setHasLoaded] = React.useState(false);

  const loadData = React.useCallback(async () => {
    try {
      const data = await getAllCollections();

      if (data) {
        setCollections(data);
        // setTimeout(setHasLoaded(true), 1500);
      }
    } catch (error) {
      console.error("There was a problem loading all the collections", error);
    }
  }, []);

  React.useEffect(() => {
    loadData();
    return () => {
      setCollections([]);
    };
  }, []);

  return (
    <>
      <CollectionsGridLayout
        loadingController={setHasLoaded}
        child2={<CollectionsSearchBar />}
        collections={collections}
        width="350px"
      />
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

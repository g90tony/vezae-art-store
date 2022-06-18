import React from "react";
import { getAllCollections } from "../../../api/collections";

import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import LoadingScreen from "../../modules/global/loading";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
// import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopAllCollectionsPage(props) {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [collections, setCollections] = React.useState();

  const loadData = React.useCallback(async () => {
    try {
      const fetchedData = await getAllCollections();

      console.log(fetchedData);

      if (fetchedData.length > 0) {
        setCollections(fetchedData);
      }
    } catch (error) {
      console.error("There was a problem loading the collections", error);
    }
  }, []);

  React.useEffect(() => {
    loadData();

    return () => {
      setCollections([]);
    };
  }, [loadData]);

  return (
    <>
      {collections && (
        <CollectionsGridLayout
          loadingController={setHasLoaded}
          child2={<CollectionsSearchBar />}
          collections={collections}
          width="350px"
        />
      )}
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

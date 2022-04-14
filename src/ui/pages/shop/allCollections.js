/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { getAllCollections } from "../../../api/collections";

import CollectionsGridLayout from "../../layouts/collectionGridLayout";
import CollectionsSearchBar from "../../modules/shop/collectionsSearchBar";
// import FilterCollectionsCard from "../../modules/shop/filterCollectionsCard";

export default function ShopAllCollectionsPage(props) {
  const [collections, setCollections] = React.useState([]);

  const loadData = React.useCallback(async () => {
    try {
      const data = await getAllCollections();

      if (data) {
        setCollections(data);
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
    <CollectionsGridLayout
      // child1={<FilterCollectionsCard />}
      child2={<CollectionsSearchBar />}
      collections={collections}
      width="350px"
    />
  );
}

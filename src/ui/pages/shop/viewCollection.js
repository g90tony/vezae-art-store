/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

// import RelatedSection from "../../modules/shop/relatedSection";
import CollectionDetailsSection from "../../modules/shop/collectionDetailsSection";
import CollectionImageGrid from "../../modules/shop/collectionImageGrid";
import LoadingScreen from "../../modules/global/loading";
import { getSingleCollection } from "../../../api/collections";

export default function ShopViewCollectionPage(props) {
  let { id } = useParams();
  let history = useNavigate();

  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [collection, setCollection] = React.useState();
  const [collectionPieces, setCollectionPieces] = React.useState();

  const loadData = React.useCallback(async () => {
    try {
      const fetchedData = await getSingleCollection(id);

      if (fetchedData) {
        setCollection(fetchedData);
        setCollectionPieces(fetchedData.products);
      }
    } catch (error) {
      console.error("There was a problem loading the collections", error);
    }
  }, []);

  React.useEffect(() => {
    loadData();

    return () => {
      setCollection([]);
    };
  }, [loadData]);

  return (
    <>
      {collectionPieces && (
        <ViewProductLayout
          history={history}
          child1={
            <CollectionImageGrid
              images={collectionPieces}
              manageLoader={setHasLoaded}
              title={collection.title}
            />
          }
          child2={<CollectionDetailsSection productDetails={collection} />}
          // child3={
          //   <RelatedSection
          //     sectionHeader="Related Collections"
          //     itemButtonText="View Collection"
          //     related={relatedPieces}
          //   />
          // }
        />
      )}

      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

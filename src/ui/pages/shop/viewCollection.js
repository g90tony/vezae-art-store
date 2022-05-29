/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

// import RelatedSection from "../../modules/shop/relatedSection";
import CollectionDetailsSection from "../../modules/shop/collectionDetailsSection";
import CollectionImageGrid from "../../modules/shop/collectionImageGrid";
import LoadingScreen from "../../modules/global/loading";
import { useSelector } from "react-redux";

export default function ShopViewCollectionPage(props) {
  let { id } = useParams();
  let history = useNavigate();

  const ALL_COLLECTIONS_STATE = useSelector((state) => state.collections);
  const ALL_PRODUCTS_STATE = useSelector((state) => state.products);

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [currentCollection, setCurrentCollection] = React.useState({});
  const [collectionPieces, setCollectionPieces] = React.useState([]);

  // const [relatedPieces, setRelatedPieces] = React.useState();

  React.useEffect(() => {
    if (id === undefined || !id) {
      history(-1);
    }

    const current_collection = ALL_COLLECTIONS_STATE.filter(
      (collection) => collection.collection_id === id
    );

    let collection;

    if (current_collection) {
      collection = current_collection[0];

      const collection_products = ALL_PRODUCTS_STATE.filter(
        (product) => product.collection.collection_id === id
      );

      if (collection && collection_products) {
        setCurrentCollection(collection);
        setCollectionPieces(collection_products);
      } else {
        history(-1);
      }
    } else {
      history(-1);
    }
    return () => {
      setCurrentCollection(null);
    };
  }, [id]);

  return (
    <>
      <ViewProductLayout
        history={history}
        child1={
          <CollectionImageGrid
            images={collectionPieces}
            manageLoader={setHasLoaded}
            title={currentCollection.title}
          />
        }
        child2={<CollectionDetailsSection productDetails={currentCollection} />}
        // child3={
        //   <RelatedSection
        //     sectionHeader="Related Collections"
        //     itemButtonText="View Collection"
        //     related={relatedPieces}
        //   />
        // }
      />

      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

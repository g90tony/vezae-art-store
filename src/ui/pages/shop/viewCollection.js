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
    const current_collection = ALL_COLLECTIONS_STATE.filter(
      (collection) => collection.collection_id === id
    );

    const collection = current_collection[0];

    const collection_products = [];

    ALL_PRODUCTS_STATE.forEach((product) => {
      if (product.collection.collection_id === `${id}`) {
        collection_products.push(product);
      }
    });

    setCurrentCollection(collection);
    setCollectionPieces(collection_products);

    return () => {
      setCurrentCollection(null);
    };
  }, []);

  return (
    <>
      <ViewProductLayout
        history={history}
        child1={
          <CollectionImageGrid
            images={collectionPieces}
            manageLoader={setHasLoaded}
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

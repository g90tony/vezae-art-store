import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

import {
  dummyFeaturedCollection as featuredCollection,
  dummyProductsData as dummyProducts,
} from "../../../helpers/data/dummyData";

import RelatedSection from "../../modules/shop/relatedSection";
import CollectionDetailsSection from "../../modules/shop/collectionDetailsSection";
import CollectionImageGrid from "../../modules/shop/collectionImageGrid";

export default function ShopViewCollectionPage(props) {
  let { id } = useParams();
  let history = useNavigate();

  const [currentCollection, setCurrentCollection] = React.useState({});
  const [collectionPieces, setCollectionPieces] = React.useState([]);

  const [relatedPieces, setRelatedPieces] = React.useState();

  React.useEffect(() => {
    setCurrentCollection(featuredCollection);
    setCollectionPieces(featuredCollection.pieces);
    setRelatedPieces(dummyProducts.slice(0, 4));

    // if (found === false) {
    //   history(-1);
    // } else {
    //   const related = dummyProducts.slice(0, 4);
    //   setRelatedPieces(related);
    // }

    return () => {
      setCurrentCollection(null);
    };
  }, [history, id]);

  return (
    <ViewProductLayout
      history={history}
      child1={<CollectionImageGrid images={collectionPieces} />}
      child2={<CollectionDetailsSection productDetails={currentCollection} />}
      child3={
        <RelatedSection
          sectionHeader="Related Collections"
          itemButtonText="View Collection"
          related={relatedPieces}
        />
      }
    />
  );
}

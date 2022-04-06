import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";

// import RelatedSection from "../../modules/shop/relatedSection";
import CollectionDetailsSection from "../../modules/shop/collectionDetailsSection";
import CollectionImageGrid from "../../modules/shop/collectionImageGrid";
import { getSingleCollection } from "../../../api/collections";

export default function ShopViewCollectionPage(props) {
  let { id } = useParams();
  let history = useNavigate();

  const [currentCollection, setCurrentCollection] = React.useState({});
  const [collectionPieces, setCollectionPieces] = React.useState([]);

  const [relatedPieces, setRelatedPieces] = React.useState();

  const loadData = React.useCallback(async (id) => {
    try {
      const data = await getSingleCollection(id);

      setCurrentCollection(data);
      setCollectionPieces(data.products);
      setRelatedPieces(dummyProducts.slice(0, 4));
    } catch (error) {
      alert("There was a problem fetching the collection");
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    loadData(parseInt(id));

    // if (found === false) {
    //   history(-1);
    // } else {
    //   const related = dummyProducts.slice(0, 4);
    //   setRelatedPieces(related);
    // }

    return () => {
      setCurrentCollection(null);
    };
  }, [history, id, loadData]);

  return (
    <ViewProductLayout
      history={history}
      child1={<CollectionImageGrid images={collectionPieces} />}
      child2={<CollectionDetailsSection productDetails={currentCollection} />}
      // child3={
      //   <RelatedSection
      //     sectionHeader="Related Collections"
      //     itemButtonText="View Collection"
      //     related={relatedPieces}
      //   />
      // }
    />
  );
}

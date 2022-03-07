import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewLayout from "../../layouts/viewLayout";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductDetailsSection from "../../modules/shop/productDetailsSection";
import ProductImageGrid from "../../modules/shop/productImageGrid";
import ProductRelatedSection from "../../modules/shop/productRelatedSection";

export default function ShopViewProductPage(props) {
  let { id } = useParams();
  let history = useNavigate();

  const [currentPiece, setCurrentPiece] = React.useState();
  const [currentSize, setCurrentSize] = React.useState();
  const [currentSizeImages, setCurrentSizeImages] = React.useState();
  const [relatedPieces, setRelatedPieces] = React.useState();

  React.useEffect(() => {
    let found = false;
    dummyProducts.forEach((product) => {
      if (product.id === parseInt(id)) {
        setCurrentPiece(product);

        if (!found) {
          setCurrentSize(product.sizes[0]);
          setCurrentSizeImages(product.sizes[0].images);
        }

        found = true;
      }
    });

    if (found === false) {
      history(-1);
    } else {
      const related = dummyProducts.slice(0, 4);
      setRelatedPieces(related);
    }

    return () => {
      setCurrentPiece(null);
    };
  }, [history, id]);

  function changeSizes(size) {
    setCurrentSize(size);
    setCurrentSizeImages(size.images);
  }

  return (
    <>
      {currentPiece && (
        <ViewLayout
          history={history}
          child1={<ProductImageGrid images={currentSizeImages} />}
          child2={
            <ProductDetailsSection
              productDetails={currentPiece}
              selectedSize={currentSize}
              changeSize={changeSizes}
            />
          }
          child3={
            <ProductRelatedSection
              related={relatedPieces}
              selectedSize={currentSize}
            />
          }
        />
      )}
    </>
  );
}

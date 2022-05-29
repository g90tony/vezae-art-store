/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

import ProductDetailsSection from "../../modules/shop/productDetailsSection";
import ProductImageGrid from "../../modules/shop/productImageGrid";
// import RelatedSection from "../../modules/shop/relatedSection";

import LoadingScreen from "../../modules/global/loading";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

export default function ShopViewProductPage(props) {
  const ALL_PRODUCTS_STATE = useSelector((state) => state.products);

  const product_id = useParams().id;

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [currentPiece, setCurrentPiece] = React.useState();
  const [currentVariant, setCurrentVariant] = React.useState();

  const [productImages, setProductImages] = React.useState();

  let history = useNavigate();

  React.useEffect(() => {
    const current_product = ALL_PRODUCTS_STATE.filter(
      (product) => product.product_id === product_id
    );

    if (current_product.length > 0) {
      const product = current_product[0];
      setCurrentPiece(product);
      setProductImages(product.images);
      setCurrentVariant(product.variants[0]);
    }
  }, [product_id]);

  // const [relatedPieces, setRelatedPieces] = React.useState();

  return (
    <>
      {currentPiece && (
        <ViewProductLayout
          history={history}
          child1={
            <ProductImageGrid
              manageLoader={setHasLoaded}
              images={productImages}
              productTitle={currentPiece.title}
            />
          }
          child2={
            <ProductDetailsSection
              productDetails={currentPiece}
              selectedSize={currentVariant}
              changeSize={(value) => setCurrentVariant(value)}
            />
          }
        />
      )}
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

import ProductDetailsSection from "../../modules/shop/productDetailsSection";
import ProductImageGrid from "../../modules/shop/productImageGrid";
// import RelatedSection from "../../modules/shop/relatedSection";

import LoadingScreen from "../../modules/global/loading";
import { getSingleProduct } from "../../../api/products";

export default function ShopViewProductPage(props) {
  const { id } = useParams();

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [currentVariant, setCurrentVariant] = React.useState();

  const [product, setProduct] = React.useState();
  const [productImages, setProductImages] = React.useState();

  let history = useNavigate();

  const loadData = React.useCallback(async () => {
    try {
      const fetchedData = await getSingleProduct(id);

      if (fetchedData) {
        setProduct(fetchedData);
        setProductImages(fetchedData.images);
        setCurrentVariant(fetchedData.variants[0]);
      }
    } catch (error) {
      console.error("There was a problem loading the collections", error);
    }
  }, []);

  React.useEffect(async () => {
    await loadData();

    return () => {
      setProduct({});
      setProductImages([]);
    };
  }, [loadData]);

  // const [relatedPieces, setRelatedPieces] = React.useState();

  return (
    <>
      {" "}
      {product && (
        <ViewProductLayout
          history={history}
          child1={
            <ProductImageGrid
              manageLoader={setHasLoaded}
              images={productImages}
              productTitle={product.title}
            />
          }
          child2={
            <ProductDetailsSection
              productDetails={product}
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

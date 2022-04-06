import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ViewProductLayout from "../../layouts/viewProductLayout";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductDetailsSection from "../../modules/shop/productDetailsSection";
import ProductImageGrid from "../../modules/shop/productImageGrid";
import RelatedSection from "../../modules/shop/relatedSection";
import { getSingleProduct } from "../../../api/products";

export default function ShopViewProductPage(props) {
  const product_id = useParams().id;
  let history = useNavigate();

  const [currentPiece, setCurrentPiece] = React.useState();
  const [currentVariant, setCurrentVariant] = React.useState();

  const [productImages, setProductImages] = React.useState();
  const [relatedPieces, setRelatedPieces] = React.useState();

  React.useEffect(() => {
    async function loadData() {
      try {
        const fetchedProduct = await getSingleProduct(product_id);

        if (fetchedProduct.status === 200) {
          setCurrentPiece(fetchedProduct.data);
          setCurrentVariant(fetchedProduct.data.variants[0]);
          setProductImages(fetchedProduct.data.images);
        } else {
          history(-1);
        }
      } catch (error) {
        console.error(error);
        console.log("there was a problem loading the product", error);
      }
    }

    loadData();

    return () => {
      setCurrentPiece(null);
    };
  }, []);

  return (
    <>
      {currentPiece && (
        <ViewProductLayout
          history={history}
          child1={<ProductImageGrid images={productImages} />}
          child2={
            <ProductDetailsSection
              productDetails={currentPiece}
              selectedSize={currentVariant}
              changeSize={(value) => setCurrentVariant(value)}
            />
          }
          child3={
            <RelatedSection
              related={relatedPieces}
              // selectedSize={currentVariant}
              sectionHEader="Related Pieces"
              itemButtonText="View Piece"
            />
          }
        />
      )}
    </>
  );
}

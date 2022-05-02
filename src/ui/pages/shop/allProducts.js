import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getAllProducts } from "../../../api/products";

import ProductsGridLayout from "../../layouts/productsGridLayout";
import LoadingScreen from "../../modules/global/loading";
// import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage(props) {
  let { filter } = useParams();

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const ALL_PRODUCTS_STATE = useSelector((state) => state.products);

  return (
    <>
      <ProductsGridLayout
        products={ALL_PRODUCTS_STATE}
        width="350px"
        pageName={filter}
        loadingController={setHasLoaded}
        child2={<ProductsSearchBar pageName={filter} />}
      />
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

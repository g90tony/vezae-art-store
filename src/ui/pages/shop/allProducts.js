import React from "react";
import { useParams } from "react-router-dom";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductsGridLayout from "../../layouts/productsGridLayout";
import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage(props) {
  let { filter } = useParams();
  return (
    <ProductsGridLayout
      products={dummyProducts}
      width="350px"
      pageName={filter}
      child1={<FilterProductsCard />}
      child2={<ProductsSearchBar pageName={filter} />}
    />
  );
}

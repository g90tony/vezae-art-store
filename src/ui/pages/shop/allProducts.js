import React from "react";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductsGridLayout from "../../layouts/productsGridLayout";
import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage() {
  return (
    <ProductsGridLayout
      products={dummyProducts}
      width="350px"
      pageName="All Pieces"
      child1={<FilterProductsCard />}
      child2={<ProductsSearchBar pageName="All Pieces" />}
    />
  );
}

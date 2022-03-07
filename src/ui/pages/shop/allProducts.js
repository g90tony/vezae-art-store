import React from "react";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductsGridLayout from "../../layouts/productsGridLayout";

export default function ShopAllProductsPage() {
  return (
    <ProductsGridLayout
      products={dummyProducts}
      width="350px"
      pageName="All Pieces"
    />
  );
}

import React from "react";

import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import AllProductsLayout from "../../layouts/allProductsLayout";

export default function ShopTrendingProductsPage() {
  return (
    <AllProductsLayout
      products={dummyProducts}
      width="350px"
      pageName="Trending Pieces"
    />
  );
}
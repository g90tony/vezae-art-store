import React from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../api/products";

import ProductsGridLayout from "../../layouts/productsGridLayout";
import FilterProductsCard from "../../modules/shop/filterProductsCard";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage(props) {
  let { filter } = useParams();

  const [products, setProducts] = React.useState([]);

  const loadData = React.useCallback(async () => {
    try {
      const data = await getAllProducts();

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    loadData();

    return () => {
      setProducts([]);
    };
  }, [loadData]);

  return (
    <ProductsGridLayout
      products={products}
      width="350px"
      pageName={filter}
      // child1={<FilterProductsCard />}
      child2={<ProductsSearchBar pageName={filter} />}
    />
  );
}

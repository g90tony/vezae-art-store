import React from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../api/products";

import ProductsGridLayout from "../../layouts/productsGridLayout";
import LoadingScreen from "../../modules/global/loading";
import ProductsSearchBar from "../../modules/shop/productsSearchBar";

export default function ShopAllProductsPage(props) {
  let { filter } = useParams();

  const [hasLoaded, setHasLoaded] = React.useState(false);

  const [products, setProducts] = React.useState([]);

  const loadData = React.useCallback(async () => {
    try {
      const fetchedData = await getAllProducts();

      if (fetchedData) {
        setProducts(fetchedData);
      }
    } catch (error) {
      console.error("There was a problem loading the collections", error);
    }
  }, []);

  React.useEffect(() => {
    loadData();

    return () => {
      setProducts([]);
    };
  }, [loadData]);

  return (
    <>
      <ProductsGridLayout
        products={products}
        width="350px"
        pageName={filter}
        loadingController={setHasLoaded}
        child2={<ProductsSearchBar pageName={filter} />}
      />
      {hasLoaded !== true && <LoadingScreen />}
    </>
  );
}

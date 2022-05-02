import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}`;
const headers = {
  "Access-Control-Allow-Origin": "*",
};

async function getAllProducts() {
  try {
    const url = `${BASE_URL}/shop/products`;
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);

    alert("There was a problem loading all the products");
  }
}

async function getSingleProduct(productID) {
  try {
    const url = `${BASE_URL}/view/product/${productID}`;

    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error);

    alert("There was a problem loading the product");
  }
}

export { getAllProducts, getSingleProduct };

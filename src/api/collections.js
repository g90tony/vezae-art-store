import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}`;
const headers = {
  "Access-Control-Allow-Origin": "*",
};

async function getAllCollections() {
  try {
    const url = `${BASE_URL}shop/collections`;
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);

    alert("There was a problem loading the collections");
  }
}

async function getSingleCollection(collection_id) {
  try {
    const url = `${BASE_URL}view/collection/${collection_id}`;

    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);

    alert("There was a problem loading the collection");
  }
}
export { getAllCollections, getSingleCollection };

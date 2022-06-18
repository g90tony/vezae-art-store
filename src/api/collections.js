import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}`;
const headers = {
  "Access-Control-Allow-Origin": `${process.env.REACT_APP_ALLOW_HEADER}`,
};

async function getAllCollections() {
  try {
    const url = `${BASE_URL}collections`;
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

async function getSingleCollection(collection_id) {
  try {
    const url = `${BASE_URL}collections/${collection_id}`;

    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
export { getAllCollections, getSingleCollection };

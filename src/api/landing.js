import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}landing`;
const headers = {
  "Access-Control-Allow-Origin": process.env.REACT_APP_ALLOW_HEADER,
};

async function getLandingGrid() {
  const url = `${BASE_URL}/landingGrid`;

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(
      "There was a problem loading the landing grid products",
      error
    );
  }
}

async function getFeaturedCollection() {
  const url = `${BASE_URL}/featuredCollection`;
  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("There was a problem fething featured the collection", error);
  }
}

async function getLatestCollection() {
  const url = `${BASE_URL}/latestCollection`;

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("There was a problem fetching latest the collection", error);
  }
}
async function getTrendingCollection() {
  const url = `${BASE_URL}/trendingCollection`;

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("There was a problem fetching the trending collection", error);
  }
}

export {
  getLandingGrid,
  getFeaturedCollection,
  getLatestCollection,
  getTrendingCollection,
};

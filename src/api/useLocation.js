import axios from "axios";
import { getCurrencyInfo } from "./currencyConverter";

const getUseLocation = async () => {
  try {
    const url = `https://geolocation-db.com/json/*`;
    const response = await axios.get(url);

    if (response.status === 200) {
      // eslint-disable-next-line eqeqeq
      if (response.data.country_code == "Not found") {
        const currency_info = await getCurrencyInfo("kenya");
        return currency_info;
      } else {
        const currency_info = await getCurrencyInfo(response.data.country_name);
        return currency_info;
      }
    }
  } catch (error) {
    console.error("There was a problem loading the users location", error);
  }
};

export { getUseLocation };

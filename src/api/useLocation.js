import axios from "axios";
import { getCurrencyInfo } from "./currencyConverter";

const getUseLocation = async () => {
  const url = `https://geolocation-db.com/json/"`;
  const response = await axios.get(url);

  if (response.status === 200) {
    const currency_info = await getCurrencyInfo(response.data.country_name);
    return currency_info;
  }
};

export { getUseLocation };

import axios from "axios";

async function getCurrencyInfo(name) {
  const info_url = `https://restcountries.com/v3.1/name/${name}?fields=name,flag,currencies`;
  console.log("new_currency", info_url);
  try {
    const response = await axios.get(info_url);
    const rates = JSON.parse(localStorage.getItem("currencyRates"));
    // const rateKeys = Object.keys(rates);

    if (response.status === 200) {
      const currency_keys = Object.keys(response.data[0].currencies);

      const currency_symbol = currency_keys[0];

      const newCurrency = {
        countryName: response.data[0].name.common,
        currencyName: currency_symbol.toLocaleLowerCase(),
        symbol: response.data[0].currencies[currency_symbol].symbol,
        flag: response.data[0].flag,
        rate: rates[currency_symbol.toLocaleLowerCase()],
      };
      if (newCurrency.countryName !== undefined) {
        return newCurrency;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function getPopularCurrencyInfo() {
  try {
    await getConversionRates();
  } catch (error) {
    console.error(error);
  }
  const popularCountries = [
    "usa",
    "gb",
    "brazil",
    "canada",
    "australia",
    "japan",
  ];

  const countries_data = [];

  popularCountries.forEach(async (country) => {
    try {
      const country_data = await getCurrencyInfo(country);

      countries_data.push(country_data);
    } catch (error) {
      console.error(error);
    }
  });

  return countries_data;
}

async function getConversionRates() {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/kes.json`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const data = response.data.kes;

      return data;
    }
  } catch (error) {
    console.error("There was a problem loading the conversion rates", error);
  }
}

export { getConversionRates, getCurrencyInfo, getPopularCurrencyInfo };

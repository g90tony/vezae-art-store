import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}`;
const headers = {
  "Access-Control-Allow-Origin": `${process.env.REACT_APP_ALLOW_HEADER}`,
};

async function fetchItemsCheckoutIDs(cartItems) {
  const url = `${BASE_URL}checkout/prepare`;

  if (cartItems) {
    const checkoutProductIDs = cartItems.map((item) => {
      return {
        product: item.product_id,
        variant: item.size,
      };
    });

    const payload = {
      checkoutProductIDs,
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status(200)) {
        console.log("Created item IDs", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function createCheckoutSession(
  checkoutItems,
  currencyCode,
  customerEmail
) {
  const url = `${BASE_URL}checkout/create`;

  if (checkoutItems && currencyCode && customerEmail) {
    const lineItems = checkoutItems.map((item) => {
      return {
        quantity: item.count,
        variantId: item.variantId,
      };
    });

    const payload = {
      buyerIdentity: {
        countryCode: currencyCode,
      },
      email: customerEmail,
      lineItems,
    };
    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status(200)) {
        console.log("Created checkout session", response.data);
      }
    } catch (error) {
      console.error("Failed checkout create", error);
    }
  }
}

async function updateCheckoutItems(checkoutItems, checkoutID) {
  const url = `${BASE_URL}checkout/update/items`;

  if (checkoutItems && checkoutID) {
    const lineItems = checkoutItems.map((item) => {
      return {
        variantID: item.variantId,
        quantity: item.count,
      };
    });

    const payload = {
      checkoutId: checkoutID,
      lineItems,
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Failed checkout items update", error);
    }
  }
}

async function updateCheckoutShipping(checkoutID, shippingAddress) {
  const url = `${BASE_URL}checkout/update/shippingAddress`;

  if (checkoutID && shippingAddress) {
    const payload = {
      checkoutId: checkoutID,
      shippingAddress,
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Failed checkout shipping address");
    }
  }
}

export {
  fetchItemsCheckoutIDs,
  createCheckoutSession,
  updateCheckoutItems,
  updateCheckoutShipping,
};

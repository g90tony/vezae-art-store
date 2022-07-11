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
        count: item.count,
      };
    });

    const payload = {
      checkoutProducts: checkoutProductIDs,
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status === 200) {
        return response.data;
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function createCheckoutSession(checkoutItems, currencyCode) {
  const url = `${BASE_URL}checkout/create`;

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
    lineItems,
  };

  let response;

  try {
    response = await axios.post(url, payload, { headers });
  } catch (error) {
    console.error("Failed checkout create", error);
  }
  if (response.status === 200) {
    return response.data.data.checkoutLineItemsAdd;
  }
}

async function updateCheckoutSessionItems(
  checkoutItems,
  checkoutItemsIds,
  checkoutID
) {
  const url = `${BASE_URL}checkout/update/items`;

  if (checkoutItems && checkoutID) {
    const lineItems = checkoutItems.map((item, index) => {
      return {
        id: checkoutItemsIds[index],
        variantId: item.variantId,
        quantity: item.count,
      };
    });

    const payload = {
      checkoutId: checkoutID,
      lineItems,
    };

    let response;

    try {
      response = await axios.post(url, payload, { headers });
    } catch (error) {
      console.error("Failed checkout items update", error);
    }

    if (response.status === 200) {
      return response.data.result.checkoutLineItemsAdd;
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
  updateCheckoutSessionItems,
  updateCheckoutShipping,
};

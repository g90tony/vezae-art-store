import { CreditCard } from "@mui/icons-material";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_VEZAE_API_URL}`;
const headers = {
  "Access-Control-Allow-Origin": `${process.env.REACT_APP_ALLOW_HEADER}`,
};

function generateImpotencyKey() {
  const generatedKeys = [];

  for (let i = 0; i < 100; i++) {
    const key = `${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;
    generatedKeys.push(key);
  }

  const selectedKeyIndex = Math.floor(Math.random() * (100 - 1 + 1) + 1);

  return generatedKeys[selectedKeyIndex];
}

async function processCard(creditCard) {
  const url = `${BASE_URL}payments/process-card`;
  if (CreditCard) {
    const payload = {
      credit_card: creditCard,
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Failed card processing", error);
    }
  }
}

async function processPayment(
  checkoutID,
  totalDue,
  customerEmail,
  billingAddress,
  vaultID
) {
  const url = `${BASE_URL}payments/make-payment`;

  if (checkoutID && totalDue && customerEmail && billingAddress && vaultID) {
    const idempotencyKey = generateImpotencyKey();

    const payload = {
      checkoutId: checkoutID,
      payments: {
        paymentAmount: {
          amount: totalDue.amount,
          currencyCode: totalDue.currency,
        },
        idempotencyKey,
        email: customerEmail,
        billingAddress,
        vaultId: vaultID,
      },
    };

    try {
      const response = await axios.post(url, payload, { headers });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Failed payment processing", error);
    }
  }
}

export { processCard, processPayment };

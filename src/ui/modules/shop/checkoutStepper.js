import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartCheckout from "../../components/cartCheckout";
import { palette } from "../../../assets/styles/colors";
import CheckoutBillingAddress from "./checkoutBillingAddress";
import CheckoutShippingAddress from "./checkoutShippingAddress";
import CheckoutCreditCard from "./checkoutCreditCard";
import { CircularProgress } from "@mui/material";

import { useSelector } from "react-redux";
import { bodyTypographyStyles } from "../../../assets/styles/typography";
const steps = [
  "Confirm Products",
  "Billing Address",
  "Shipping Address",
  "Credit Card Details",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const cartItems = useSelector((state) => state.cart.items);

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  function currentStepper(cart) {
    switch (activeStep) {
      case 0:
        return cart.length > 0 ? (
          <CartCheckout cart={cart} width="100%" />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "50vh",
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: bodyTypographyStyles.smallBold,
                // margin: "auto",
                width: "100%",
                textAlign: "center",
                color: "#a0a0a0",
              }}
            >
              There are no items in your cart
            </Typography>{" "}
          </Box>
        );

      case 1:
        return <CheckoutBillingAddress />;

      case 2:
        return <CheckoutShippingAddress />;

      case 3:
        return <CheckoutCreditCard />;

      default:
        return <CartCheckout />;
    }
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: { xs: "100%", lg: "80%" }, height: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography
            sx={{
              width: "100%",
              heigh: "500px",
              margin: "50px auto",
              textAlign: "center",
              fontSize: "74px",
            }}
          >
            <CircularProgress />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: palette.secondary,
                  color: palette.primary,
                },
                backgroundColor: palette.primary,
                color: palette.secondary,
                borderRadius: 0,
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <Box sx={{ height: "100%" }}>
          {currentStepper(cartItems)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button
              sx={{
                "&:hover": {
                  backgroundColor: palette.secondary,
                  color: palette.primary,
                },
                backgroundColor: palette.primary,
                color: palette.secondary,
                borderRadius: 0,
                width: "100%",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

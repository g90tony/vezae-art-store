import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { palette } from "../../assets/styles/colors";
import {
  bodyTypographyStyles,
  headingTypographyStyles,
} from "../../assets/styles/typography";

import { Fade } from "@mui/material";

export default function AddedToCartAlert(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = React.useCallback(function () {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    setOpen(props.productAdded === true);

    return () => {
      setOpen(false);
    };
  }, [handleClose, props.productAdded]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
  });

  return (
    <Dialog
      PaperProps={{
        sx: {
          position: "fixed",
          top: 100,
          right: 10,
          m: 0,
          backgroundColor: "rgba(0,0,0,0.9)",
          width: { xs: "100%", lg: "500px" },
          color: palette.secondary,
          borderRadius: 0,
        },
      }}
      open={open}
      TransitionComponent={Transition}
      transitionDuration={{ enter: 1000, exit: 1000 }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      hideBackdrop
    >
      <DialogTitle
        sx={{ fontFamily: headingTypographyStyles.h5 }}
        id="alert-dialog-title"
      >
        {"Product successfully added to cart!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontFamily: bodyTypographyStyles.defaultNormal,
            color: palette.secondary,
          }}
          id="alert-dialog-description"
        >
          The product was successfully added to your cart. Would you like to
          review items in your cart?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          href="/shop/checkout"
          sx={{
            width: "100%",
            padding: "10px",
            backgroundColor: palette.secondary,
            color: palette.primary,
            "&:hover": {
              backgroundColor: palette.primary,
              color: palette.secondary,
              border: `1px ${palette.primary} solid`,
            },
            borderRadius: 0,
            fontSize: bodyTypographyStyles.smallBold,
          }}
        >
          Yes, Proceed to Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { palette } from "../../../assets/styles/colors";
import { headingTypographyStyles } from "../../../assets/styles/typography";
import { dummyProductsData as dummyProducts } from "../../../helpers/data/dummyData";
import ProductDetailsSection from "../../modules/shop/productDetailsSection";
import ProductImageGrid from "../../modules/shop/productImageGrid";
import ProductRelatedSection from "../../modules/shop/productRelatedSection";

export default function ShopViewProductPage() {
  let { id } = useParams();
  let history = useNavigate();

  const [currentPiece, setCurrentPiece] = React.useState();
  const [currentSize, setCurrentSize] = React.useState();
  const [currentSizeImages, setCurrentSizeImages] = React.useState();
  const [relatedPieces, setRelatedPieces] = React.useState();

  React.useEffect(() => {
    let found = false;
    dummyProducts.forEach((product) => {
      if (product.id === parseInt(id)) {
        setCurrentPiece(product);

        if (!found) {
          setCurrentSize(product.sizes[0]);
          setCurrentSizeImages(product.sizes[0].images);
        }

        found = true;
      }
    });

    if (found === false) {
      history(-1);
    } else {
      const related = dummyProducts.slice(0, 4);
      setRelatedPieces(related);
    }

    return () => {
      setCurrentPiece(null);
    };
  }, []);

  function changeSizes(size) {
    setCurrentSize(size);
    setCurrentSizeImages(size.images);
  }

  return (
    <>
      {currentPiece && (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "nowrap",
            width: "100%",
            padding: "10px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0 10px 10px 10px",
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                color: palette.primary,
                fontSize: headingTypographyStyles.h4,
                marginLeft: "10px",
              }}
            >
              <Link
                underline="hover"
                sx={{
                  color: palette.primary,
                  fontSize: headingTypographyStyles.h4,
                }}
                href="/"
              >
                Shop
              </Link>
              <Link
                underline="hover"
                sx={{
                  color: palette.primary,
                  fontSize: headingTypographyStyles.h5,
                }}
                href="/shop/pieces/all"
              >
                All Pieces
              </Link>
              <Typography
                underline="hover"
                sx={{
                  color: palette.primary,
                  fontSize: headingTypographyStyles.h5,
                }}
                href="/shop/allPieces"
              >
                {currentPiece.title}
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              flexWrap: "nowrap",
              width: "100%",
              padding: "10px",
              margin: "0 auto",
            }}
          >
            <Box sx={{ width: "100%", margin: "0 auto" }}>
              <ProductImageGrid images={currentSizeImages} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductDetailsSection
                productDetails={currentPiece}
                selectedSize={currentSize}
                changeSize={changeSizes}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              width: "100%",
              margin: "0 10px 10px 10px",
            }}
          >
            <ProductRelatedSection
              related={relatedPieces}
              selectedSize={currentSize}
            />
          </Box>
        </Grid>
      )}
    </>
  );
}

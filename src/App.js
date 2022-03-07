import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";

import LandingPage from "./ui/pages/company/landing";
import AboutPage from "./ui/pages/company/about";
import ContactsPage from "./ui/pages/company/contacts";
import Error404Page from "./ui/pages/company/404";
import NavBar from "./ui/modules/global/navbar";

import { palette } from "./assets/styles/colors";
import ShopAllCollectionsPage from "./ui/pages/shop/allCollections";
import ShopAllProductsPage from "./ui/pages/shop/allProducts";
import GalleryPage from "./ui/pages/company/gallery";
import FooterBar from "./ui/modules/global/footer";
import ScrollToTop from "./helpers/scrollToTop";
import ShopViewProductPage from "./ui/pages/shop/viewProduct";
import ShopTrendingProductsPage from "./ui/pages/shop/trendingProducts";
import ShopLatestProductsPage from "./ui/pages/shop/latestProducts";
import ShopTrendingCollectionsPage from "./ui/pages/shop/trendingCollections";
import ShopLatestCollectionsPage from "./ui/pages/shop/latestCollections";
import ShopViewCollectionPage from "./ui/pages/shop/viewCollection";
function App() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        overFlowX: "hidden",
        backgroundColor: palette.accentLight,
      }}
    >
      <Router>
        <ScrollToTop />
        <NavBar />
        <Grid container sx={{ marginTop: "100px", padding: "20px" }}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<Error404Page />} />
            <Route
              path="/shop/collections/all"
              element={<ShopAllCollectionsPage />}
            />
            <Route
              path="/shop/collections/trending"
              element={<ShopTrendingCollectionsPage />}
            />
            <Route
              path="/shop/collections/latest"
              element={<ShopLatestCollectionsPage />}
            />
            <Route path="/shop/pieces/all" element={<ShopAllProductsPage />} />
            <Route
              path="/shop/pieces/view/:id"
              element={<ShopViewProductPage />}
            />
            <Route
              path="/shop/collections/view/:id"
              element={<ShopViewCollectionPage />}
            />
            <Route
              path="/shop/pieces/trending"
              element={<ShopTrendingProductsPage />}
            />
            <Route
              path="/shop/pieces/latest"
              element={<ShopLatestProductsPage />}
            />
          </Routes>
        </Grid>
        <FooterBar />
      </Router>
    </Grid>
  );
}

export default App;

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
import ShopFilteredProductsPage from "./ui/pages/shop/filteredProducts";
import ShopFilteredCollectionsPage from "./ui/pages/shop/filteredCollections";
import GalleryPage from "./ui/pages/company/gallery";
import FooterBar from "./ui/modules/global/footer";
function App() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        backgroundColor: palette.accentLight,
      }}
    >
      <Router>
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
              element={<ShopFilteredCollectionsPage />}
            />
            <Route
              path="/shop/collections/latest"
              element={<ShopFilteredCollectionsPage />}
            />
            <Route path="/shop/pieces/all" element={<ShopAllProductsPage />} />
            <Route
              path="/shop/pieces/trending"
              element={<ShopFilteredProductsPage />}
            />
            <Route
              path="/shop/pieces/latest"
              element={<ShopFilteredProductsPage />}
            />
          </Routes>
        </Grid>
        <FooterBar />
      </Router>
    </Grid>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";

import LandingPage from "./ui/pages/company/landing";
import AboutPage from "./ui/pages/company/about";
import ContactsPage from "./ui/pages/company/contacts";
import Error404Page from "./ui/pages/company/404";
import NavBar from "./ui/modules/global/navbar";

import { palette } from "./assets/styles/colors";
function App() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: palette.accentLight,
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactsPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;

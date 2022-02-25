import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./ui/pages/company/landing";
import AboutPage from "./ui/pages/company/about";
import ContactsPage from "./ui/pages/company/contacts";
import Error404Page from "./ui/pages/company/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactsPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;

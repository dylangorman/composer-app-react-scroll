import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import ContactPage from "./pages/Contact";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/testimonials" element={<TestimonialPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;

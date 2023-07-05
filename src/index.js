import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./ContactPage/Contact";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();

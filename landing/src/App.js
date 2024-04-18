import React from "react";
import Home from "./pages/home";
import Auth from "./pages/login";
import "./common/styles/utilities.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

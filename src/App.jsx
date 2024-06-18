import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";
import WarehousePage from "./pages/WarehousePage/WarehousePage";

function App() {
  const port = import.meta.env.VITE_PORT || "http://localhost:8080";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/warehouses" element={<WarehousePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

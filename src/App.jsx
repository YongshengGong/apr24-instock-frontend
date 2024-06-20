import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Inventory from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./App.scss";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  const port = import.meta.env.VITE_PORT || "http://localhost:8080";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WarehousePage button="warehousesButton" />}
        ></Route>
        <Route
          path="/details"
          element={<WarehouseDetailsPage button="warehousesButton" />}
        ></Route>
        <Route
          path="/inventory"
          element={<Inventory button="inventoryButton" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

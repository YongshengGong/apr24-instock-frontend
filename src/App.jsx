import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Inventory from "./pages/Inventory/Inventory";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./App.scss";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddNewWarehousePage from "./pages/AddNewWarehousePage/AddNewWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage.jsx";

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
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage button="warehousesButton" />}
        ></Route>
        <Route
          path="/inventoryDetails"
          element={<InventoryItemDetailsPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/editInventory"
          element={<EditInventoryItemPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/inventory"
          element={<Inventory button="inventoryButton" />}
        ></Route>
        <Route
          path="/addNewWarehouse"
          element={<AddNewWarehousePage button="warehousesButton" />}
        ></Route>
        <Route
          path="/EditWarehouse"
          element={<EditWarehousePage button="warehousesButton" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

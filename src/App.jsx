import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./App.scss";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import AddNewWarehousePage from "./pages/AddNewWarehousePage/AddNewWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryItemDetailsPage from "./pages/InventoryItemDetailsPage/InventoryItemDetailsPage";
import EditInventoryItemPage from "./pages/EditInventoryItemPage/EditInventoryItemPage.jsx";
import AddInventoryItemPage from "./pages/AddInventoryItemPage/AddInventoryItemPage.jsx";
import Deletewarehousepage from "./pages/Deletewarehousepage/Deletewarehousepage.jsx";
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
          path="/editInventoryItem"
          element={<EditInventoryItemPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/inventory"
          element={<InventoryPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/addNewWarehouse"
          element={<AddNewWarehousePage button="warehousesButton" />}
        ></Route>
        <Route
          path="/EditWarehouse"
          element={<EditWarehousePage button="warehousesButton" />}
        ></Route>
        <Route
          path="/addInventory"
          element={<AddInventoryItemPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/deleteWarehouse"
          element={<Deletewarehousepage button="" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

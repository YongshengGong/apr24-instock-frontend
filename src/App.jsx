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
import axios from "axios";
function App() {
  const [warehouses, setWarehouses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ID, setID] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouses(response.data);
      } catch (error) {
        console.log(`Looks like there is an error fetching: ${error}`);
      }
    };
    fetchData();
  }, []);
  function passId(id) {
    setID(id)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WarehousePage button="warehousesButton" warehouses={warehouses} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        ></Route>
        <Route
          path="/warehouses/:warehouseId"
          element={<WarehouseDetailsPage button="warehousesButton" warehouses={warehouses} passId={passId} />}
        ></Route>
        <Route
          path="/inventoryDetails"
          element={<InventoryItemDetailsPage button="inventoryButton" />}
        ></Route>
        <Route
          path="/editInventoryItem/:inventoryId"
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
          element={<EditWarehousePage button="warehousesButton" ID={ID} />}
        ></Route>
        <Route
          path="/addInventory"
          element={<AddInventoryItemPage button="inventoryButton" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

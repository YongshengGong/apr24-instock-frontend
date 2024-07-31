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
  const [inventory, setInventory] = useState([]);
  const [searchQueryInv, setSearchQueryInv] = useState("");
  const [ID, setID] = useState(null);
  const [ID1, setID1] = useState(null);
  const [test, setTest] = useState("");
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
  }, [test]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/inventory");
        setInventory(response.data);
      } catch (error) {
        console.log(`Looks like there is an error fetching: ${error}`);
      }
    };
    fetchData();
  }, []);

  function passId(id) {
    setID(id);
  }
  async function addNewWarehouse(newWarehouse) {
    try {
      const res = await axios.post(`http://localhost:8080/warehouses/addNewWarehouse`, newWarehouse);
      setTest(res.data);
    }
    catch (error) {
      console.log("error caught in the catch block:", error);
    }
  }

  async function deleteWarehouse(passedID) {
    const res = await axios.delete(`http://localhost:8080/warehouses/${passedID}`);
    setTest(res.data);
  }
  function passID1(id) {
    setID1(id);
  }
  async function editWarehouse(ID, newWarehouse) {
    try {
      const res = await axios.put(`http://localhost:8080/warehouses/${ID}`, newWarehouse);
      setTest(res.data);
    }
    catch (error) {
      console.log("error caught in the catch block:", error);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <WarehousePage
              button="warehousesButton"
              warehouses={warehouses}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              deleteWarehouse={deleteWarehouse}
              passID1={passID1}
            />
          }
        ></Route>
        <Route
          path="/warehouses/:warehouseId"
          element={
            <WarehouseDetailsPage
              button="warehousesButton"
              warehouses={warehouses}
              passId={passId}
            />
          }
        ></Route>
        <Route
          path="/inventoryDetails/:inventoryId"
          element={
            <InventoryItemDetailsPage
              button="inventoryButton"
              inventory={inventory}
              passId={passId}
            />
          }
        ></Route>
        <Route
          path="/editInventoryItem/:inventoryId"
          element={
            <EditInventoryItemPage
              button="inventoryButton"
              inventory={inventory}
              warehouses={warehouses}
              passId={passId}
            />
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <InventoryPage
              button="inventoryButton"
              inventory={inventory}
              searchQueryInv={searchQueryInv}
              setSearchQueryInv={setSearchQueryInv}
            />
          }
        ></Route>
        <Route
          path="/addNewWarehouse"
          element={<AddNewWarehousePage button="warehousesButton" addNewWarehouse={addNewWarehouse} />}
        ></Route>
        <Route
          path="/EditWarehouse/:warehouseId"
          element={
            <EditWarehousePage
              button="warehousesButton"
              ID1={ID1}
              warehouses={warehouses}
              editWarehouse={editWarehouse}
            />
          }
        ></Route>
        <Route
          path="/addInventory"
          element={
            <AddInventoryItemPage
              button="inventoryButton"
              ID={ID}
              warehouses={warehouses}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

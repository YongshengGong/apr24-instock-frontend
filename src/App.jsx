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
  const [test,setTest]=useState('');
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
      console.log(res.data);
      setTest(res.data)
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
              setWarehouses={setWarehouses}
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
              // passId={passId}
            />
          }
        ></Route>
        <Route
          path="/editInventoryItem/:inventoryId"
          element={
            <EditInventoryItemPage
              button="inventoryButton"
              inventory={inventory}
              // warehouses={warehouses}
              // passId={passId}
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
          element={<AddNewWarehousePage button="warehousesButton" addNewWarehouse={addNewWarehouse}/>}
        ></Route>
        <Route
          path="/EditWarehouse/:warehouseId"
          element={
            <EditWarehousePage
              button="warehousesButton"
              ID={ID}
              warehouses={warehouses} 
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

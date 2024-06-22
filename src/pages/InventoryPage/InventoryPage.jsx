import "./InventoryPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState,useEffect } from "react";
import InventoryFullList from "../../components/InventoryFullList/InventoryFullList";
import axios from "axios";
function InventoryPage({ button }) {
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredInventory = inventory.filter((warehouse) =>
    warehouse.warehouse_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Header button={button} />
      <InventoryFullList inventory={filteredInventory}
        searchQuery={searchQuery}
        handleSearch={handleSearch} />
      <Footer />
    </>
  );
}
export default InventoryPage;

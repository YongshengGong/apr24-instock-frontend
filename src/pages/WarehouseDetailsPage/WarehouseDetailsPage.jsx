import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseDetailsPage({ button }) {
  const [warehouseInv, setWarehouseInv] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/inventory");
        setWarehouseInv(response.data);
      } catch (error) {
        console.log(`Looks like there is an error fetching: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header button={button} />
      <main>
        <WarehouseDetails />
        <WarehouseInventoryList warehouseInv={warehouseInv} />
      </main>
      <Footer />
    </>
  );
}

export default WarehouseDetailsPage;

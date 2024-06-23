import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { useParams } from "react-router-dom";
function WarehouseDetailsPage({ button, warehouses, passId }) {

  const { warehouseId } = useParams();
  passId(warehouseId);
  const selectedWarehouse = warehouses.find(warehouse => warehouse.id == warehouseId);

  return (
    <>
      <Header button={button} />
      <main>
        <WarehouseDetails selectedWarehouse={selectedWarehouse} />
        <WarehouseInventoryList warehouseId={warehouseId} />
      </main>
      <Footer />
    </>
  );
}

export default WarehouseDetailsPage;

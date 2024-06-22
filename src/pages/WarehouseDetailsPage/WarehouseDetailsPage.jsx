import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { useParams } from "react-router-dom";
function WarehouseDetailsPage({button}) {
 const {warehouseId}=useParams();
  return (
    <>
      <Header button={button}/>
      <main>
        <WarehouseDetails />
        <WarehouseInventoryList warehouseId={warehouseId}/>
      </main>
      <Footer />
    </>
  );
}

export default WarehouseDetailsPage;

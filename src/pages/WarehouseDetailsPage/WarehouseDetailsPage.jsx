import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

function WarehouseDetailsPage() {
  return (
    <>
      <Header />
      <WarehouseDetails />
      <WarehouseInventoryList />
      <Footer />
    </>
  );
}

export default WarehouseDetailsPage;

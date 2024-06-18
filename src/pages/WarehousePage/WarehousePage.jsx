import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function WarehousePage() {
  return (
    <>
      <Header />
      <WarehouseList />
      <Footer />
    </>
  );
}

export default WarehousePage;

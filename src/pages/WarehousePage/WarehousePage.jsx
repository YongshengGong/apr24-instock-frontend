import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehousePage.scss";
import WarehouseList from "../../components/TablesWarehouses/TablesWarehouses";

function WarehousePage({button}) {
  return (
    <>
      <Header button={button}/>
      <WarehouseList />
      <Footer />
    </>
  );
}

export default WarehousePage;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
function EditWarehousePage({ button, ID, warehouses }) {
  localStorage.setItem("warehouseID",ID||localStorage.getItem("warehouseID"));
  const selectedWarehouseID=localStorage.getItem("warehouseID");
  
  return (
    <>
      <Header button={button} />
      <EditWarehouse ID={selectedWarehouseID} warehouses={warehouses}/>
      <Footer />
    </>
  );
}
export default EditWarehousePage;

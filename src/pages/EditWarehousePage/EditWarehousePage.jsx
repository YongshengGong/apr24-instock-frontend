import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
function EditWarehousePage({ button, ID1, warehouses,editWarehouse }) {
  localStorage.setItem("warehouseID",ID1||localStorage.getItem("warehouseID"));
  const selectedWarehouseID=localStorage.getItem("warehouseID");
  console.log(selectedWarehouseID)
  return (
    <>
      <Header button={button} />
      <EditWarehouse ID={selectedWarehouseID} warehouses={warehouses} editWarehouse={editWarehouse}/>
      <Footer />
    </>
  );
}
export default EditWarehousePage;

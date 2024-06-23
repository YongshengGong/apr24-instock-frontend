import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import { useParams } from "react-router-dom";
function EditWarehousePage({ button, passId, warehouses }) {
  const { warehouseId } = useParams();
  passId(warehouseId);
  const selectedWarehouse = warehouses.find(
    (warehouse) => warehouse.id == warehouseId
  );
  // console.log(ID);
  // console.log(selectedWarehouse);
  return (
    <>
      <Header button={button} />
      <EditWarehouse selectedWarehouses={selectedWarehouse} />
      <Footer />
    </>
  );
}
export default EditWarehousePage;

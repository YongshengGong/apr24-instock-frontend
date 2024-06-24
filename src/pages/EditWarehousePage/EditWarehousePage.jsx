import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
function EditWarehousePage({ button, ID, warehouses }) {

  return (
    <>
      <Header button={button} />
      <EditWarehouse warehouses={warehouses} />
      <Footer />
    </>
  );
}
export default EditWarehousePage;

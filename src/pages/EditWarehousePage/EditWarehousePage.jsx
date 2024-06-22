import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
function EditWarehousePage({button}) {
  return (
    <>
      <Header button={button}/>
        <EditWarehouse />
      <Footer />
    </>
  );
}
export default EditWarehousePage;

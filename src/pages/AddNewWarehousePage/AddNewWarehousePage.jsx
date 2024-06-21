import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddNewWarehouse from "../../components/AddNewWarehouse/AddNewWarehouse";
function AddNewWarehousePage({button}) {
  return (
    <>
      <Header button={button}/>
        <AddNewWarehouse />
      <Footer />
    </>
  );
}
export default AddNewWarehousePage;

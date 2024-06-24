import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddNewWarehouse from "../../components/AddNewWarehouse/AddNewWarehouse";
function AddNewWarehousePage({button,addNewWarehouse}) {
  return (
    <>
      <Header button={button}/>
        <AddNewWarehouse addNewWarehouse={addNewWarehouse} />
      <Footer />
    </>
  );
}
export default AddNewWarehousePage;

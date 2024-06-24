import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddNewWarehouse from "../../components/AddNewWarehouse/AddNewWarehouse";
import { addNewInventory } from "../../../../apr24-instock-backend/controllers/controllers";
function AddNewWarehousePage({button,addNewWarehouse}) {
  return (
    <>
      <Header button={button}/>
        <AddNewWarehouse addNewWarehouse={addNewWarehouse}/>
      <Footer />
    </>
  );
}
export default AddNewWarehousePage;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
function AddInventoryItemPage({button,warehouses}) {
  return (
    <>
      <Header button={button}/>
        <AddInventoryItem warehouses={warehouses}/>
      <Footer />
    </>
  );
}
export default AddInventoryItemPage;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
function AddInventoryItemPage({button}) {
  return (
    <>
      <Header button={button}/>
        <AddInventoryItem />
      <Footer />
    </>
  );
}
export default AddInventoryItemPage;

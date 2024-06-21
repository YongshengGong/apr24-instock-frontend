import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
function AddInventoryItemPage() {
  return (
    <>
      <Header />
      <main>
        <AddInventoryItem />
      </main>
      <Footer />
    </>
  );
}
export default AddInventoryItemPage;

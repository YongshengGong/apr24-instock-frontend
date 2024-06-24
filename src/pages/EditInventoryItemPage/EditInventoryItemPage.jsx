import "../EditInventoryItemPage/EditInventoryItemPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import { useParams } from "react-router-dom";
function EditInventoryItemPage({ button, inventory, passId, warehouses }) {
  const { inventoryId } = useParams();
  passId(inventoryId);
  const selectedItem = inventory.find((inv) => inv.id == inventoryId);
  return (
    <>
      <Header button={button} />
      <EditInventoryItem
        selectedItem={selectedItem}
        inventory={inventory}
        warehouses={warehouses}
      />
      <Footer />
    </>
  );
}
export default EditInventoryItemPage;

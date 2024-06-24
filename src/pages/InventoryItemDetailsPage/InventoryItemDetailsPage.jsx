import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./InventoryItemDetailsPage.scss";
import { useParams } from "react-router-dom";

import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";

function InventoryItemDetailsPage({ button, passId, inventory }) {
  const { inventoryId } = useParams();
  passId(inventoryId);
  const selectedInventory = inventory.find((inv) => inv.id == inventoryId);

  return (
    <>
      <Header button={button} />
      <main className="main">
        <InventoryItemDetails
          inventoryId={inventoryId}
          selectedInventory={selectedInventory}
        />
      </main>
      <Footer />
    </>
  );
}

export default InventoryItemDetailsPage;

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./InventoryItemDetailsPage.scss";

import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";

function InventoryItemDetailsPage({button}) {
  return (
    <>
      <Header button={button}/>
      <main className="main">
        <InventoryItemDetails />
      </main>
      <Footer />
    </>
  );
}

export default InventoryItemDetailsPage;

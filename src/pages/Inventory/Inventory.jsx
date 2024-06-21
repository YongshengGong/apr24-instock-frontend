import "./Inventory.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import AddInventoryItem from "../../components/AddInventoryItem/AddInventoryItem";
function Inventory({ button }) {
  return (
    <>
      <Header button={button} />
      <AddInventoryItem />
      <Footer />
    </>
  );
}
export default Inventory;

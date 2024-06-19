import "./Inventory.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
function Inventory({ button }) {
  return (
    <>
      <Header button={button} />
      <EditInventoryItem />
      <main>inventory</main>
      <Footer />
    </>
  );
}
export default Inventory;

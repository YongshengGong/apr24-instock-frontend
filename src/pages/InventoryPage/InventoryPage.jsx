import "./InventoryPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryFullList from "../../components/InventoryFullList/InventoryFullList";

function InventoryPage({
  button,
  inventory,
  searchQueryInv,
  setSearchQueryInv,
}) {
  const handleSearch = (event) => {
    setSearchQueryInv(event.target.value);
  };

  const filteredInventory = inventory.filter((inventory) =>
    inventory.item_name.toLowerCase().includes(searchQueryInv.toLowerCase())
  );
  return (
    <>
      <Header button={button} />
      <InventoryFullList
        inventory={filteredInventory}
        searchQueryInv={searchQueryInv}
        handleSearch={handleSearch}
      />
      <Footer />
    </>
  );
}
export default InventoryPage;

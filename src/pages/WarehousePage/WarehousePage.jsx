import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WarehousePage.scss";
import WarehouseList from "../../components/TablesWarehouses/TablesWarehouses";

function WarehousePage({ button, warehouses, searchQuery, setSearchQuery,setWarehouses }) {

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredWarehouses = warehouses.filter((warehouse) =>
    warehouse.warehouse_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header button={button} />
      <WarehouseList
        warehouses={filteredWarehouses}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        setWarehouses={setWarehouses}
      />
      <Footer />
    </>
  );
}

export default WarehousePage;

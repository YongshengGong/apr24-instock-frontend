import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
function EditWarehousePage({ button, ID }) {
  console.log(ID)
  return (
    <>
      <Header button={button} />
      <EditWarehouse ID={ID} />
      <Footer />
    </>
  );
}
export default EditWarehousePage;

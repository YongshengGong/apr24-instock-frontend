import "../EditInventoryItemPage/EditInventoryItemPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
function EditInventoryItemPage({button}) {
  return (
    <>
      <Header button={button}/>
        <EditInventoryItem />
      <Footer />
    </>
  );
}
export default EditInventoryItemPage;

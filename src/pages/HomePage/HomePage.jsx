import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";

function HomePage({ button }) {
  return (
    <>
      <Header button={button} />
      <EditInventoryItem />
      <main>main</main>
      <Footer />
    </>
  );
}
export default HomePage;

import "./Inventory.scss"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function Inventory({button}) {
    return (
        <>
            <Header button={button} />
            <main>
                inventory
            </main>
            <Footer />
        </>
    )
}
export default Inventory;
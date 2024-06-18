import "./HomePage.scss"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function HomePage({ button }) {
    return (
        <>
            <Header button={button} />
            <main>
                main
            </main>
            <Footer />
        </>
    )
}
export default HomePage;
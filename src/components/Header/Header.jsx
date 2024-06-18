import "./Header.scss"
import logo from "../../assets/images/logos/inStock-Logo.svg"
import { Link } from "react-router-dom";
function Header({ button }) {
    return (
        <header className="header">
            <img className="header__logo" src={logo}></img>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-warehouses">
                        <button className={button === "warehousesButton" ? "activeButton" : "inactiveButton"}>
                            <Link to="/">Warehouses</Link>
                        </button>
                    </li>
                    <li className="header__nav-list-inventory">
                        <button className={button === "inventoryButton" ? "activeButton" : "inactiveButton"}>
                            <Link to="/inventory">Inventory</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
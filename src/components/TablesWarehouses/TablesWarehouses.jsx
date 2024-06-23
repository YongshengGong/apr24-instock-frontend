import chevron from "../../assets/images/icons/nav/chevron_right-24px.svg";
import trashcan from "../../assets/images/icons/action/delete_outline-24px.svg";
import editicon from "../../assets/images/icons/action/edit-24px.svg";
import filtericon from "../../assets/images/icons/nav/sort-default.svg";
import "./TablesWarehouses.scss";
import PrimaryButton from "../CallToActions/PrimaryButton";
import { Link } from "react-router-dom";

const TablesWarehouses = ({ warehouses, searchQuery, handleSearch }) => {
  return (
    <section className="warehouses">
      <header className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__header-container">
          <input
            type="search"
            name="warehouseSearch"
            className="warehouses__search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <PrimaryButton />
        </div>
      </header>
      <ul className="table-headers__list">
        <li className="table-headers__item">
          <p>WAREHOUSE</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item">
          <p>ADDRESS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact">
          <p>CONTACT NAME</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact-info">
          <p>CONTACT INFORMATION</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--action">
          <p>ACTIONS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
      </ul>

      {/* Had to rewrite entire thing. Was breaking my brain for a second */}
      <ul className="warehouses__list">
        {warehouses.map((warehouse) => (
          <li className="warehouses__item" key={warehouse.id}>
            <div className="warehouses__info-group">
              <div className="warehouses__info-item warehouses__info-item--warehouse">
                <p className="warehouses__sub-title">WAREHOUSE</p>
                <div className="link-arrow">
                  <Link
                    to={`/warehouses/${warehouse.id}`}
                    className="warehouses__info warehouses__info--warehouse"
                  >
                    {warehouse.warehouse_name}
                  </Link>
                  <img src={chevron} alt="Enter Arrow" />
                </div>
              </div>
              <div className="warehouses__info-item warehouses__info-item--address">
                <p className="warehouses__sub-title">ADDRESS</p>
                <p className="warehouses__info warehouses__info--address">
                  {warehouse.address}
                </p>
              </div>
              <div className="warehouses__info-item warehouses__info-item--name">
                <p className="warehouses__sub-title">CONTACT NAME</p>
                <p className="warehouses__info warehouses__info--name">
                  {warehouse.contact_name}
                </p>
              </div>
              <div className="warehouses__info-item warehouses__info-item--contact">
                <p className="warehouses__sub-title">CONTACT INFORMATION</p>
                <p className="warehouses__info">{warehouse.contact_phone}</p>
                <p className="warehouses__info">{warehouse.contact_email}</p>
              </div>
              <div className="warehouses__info-item warehouses__info-item--actions">
                {/* Need to Wrap these in Links! */}
                <img src={trashcan} alt="Delete" className="warehouses__icon" />
                <Link to={`/EditWarehouse/${warehouse.id}`}>
                  <img src={editicon} alt="Edit" className="warehouses__icon" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TablesWarehouses;

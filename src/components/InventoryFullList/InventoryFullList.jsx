import chevron from "../../assets/images/icons/nav/chevron_right-24px.svg";
import trashcan from "../../assets/images/icons/action/delete_outline-24px.svg";
import editicon from "../../assets/images/icons/action/edit-24px.svg";
import filtericon from "../../assets/images/icons/nav/sort-default.svg";
import { PrimaryButtonInventory } from "../CallToActions/PrimaryButton";
import { Link } from "react-router-dom";
import "./InventoryFullList.scss";

const InventoryFullList = ({ inventory, searchQuery, handleSearch }) => {
  return (
    <section className="inventory">
      <header className="inventory__header">
        <h1 className="inventory__title">Inventory</h1>
        <div className="inventory__header-container">
          <input
            type="search"
            name="inventoryearch"
            className="inventory__search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <PrimaryButtonInventory />
        </div>
      </header>
      <ul className="table-headers__list">
        <li className="table-headers__item">
          <p>INVENTORY ITEM</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item">
          <p>CATEGORY</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--status">
          <p>STATUS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--qty">
          <p>QTY</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--warehouse">
          <p>WAREHOUSE</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--action">
          <p>ACTIONS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
      </ul>

      <ul className="inventory__list">
        {inventory.map((inventory) => (
          <li className="inventory__item" key={inventory.id}>
            <div className="inventory__info-group">
              <div className="inventory__info-item inventory__info-item--item">
                <p className="inventory__sub-title">INVENTORY ITEM</p>
                <div className="link-arrow">
                  <Link
                    to={`/inventoryDetails/${inventory.id}`}
                    className="inventory__info inventory__info--item"
                  >
                    {inventory.item_name}
                  </Link>
                  <img src={chevron} alt="Enter Arrow" />
                </div>
              </div>
              <div className="inventory__info-item inventory__info-item--category">
                <p className="inventory__sub-title">CATEGORY</p>
                <p className="inventory__info inventory__info--category">
                  {inventory.category}
                </p>
              </div>
              <div className="inventory__info-item inventory__info-item--status">
                <p className="inventory__sub-title">STATUS</p>
                <p
                  className={
                    inventory.status === "In Stock"
                      ? "inventory__info inventory__info--status inventory__info--status--instock"
                      : "inventory__info inventory__info--status inventory__info--status--outofstock"
                  }
                >
                  {inventory.status.toUpperCase()}
                </p>
              </div>
              <div className="inventory__info-item inventory__info-item--qty">
                <p className="inventory__sub-title">QTY</p>
                <p className="inventory__info inventory__info--qty">
                  {inventory.quantity}
                </p>
              </div>
              <div className="inventory__info-item inventory__info--empty inventory__info-item--empty"></div>
              <div className="inventory__info-item inventory__info-item--warehouse">
                <p className="inventory__sub-title">WAREHOUSE</p>
                <p className="inventory__info inventory__info--warehouse">
                  {inventory.warehouse_name}
                </p>
              </div>
              <div className="inventory__info-item inventory__info-item--actions">
                {/* Need to Wrap these in Links! */}
                <img src={trashcan} alt="Delete" className="inventory__icon" />
                <Link to={`/editInventoryItem/${inventory.id}`}>
                  <img src={editicon} alt="Edit" className="inventory__icon" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InventoryFullList;

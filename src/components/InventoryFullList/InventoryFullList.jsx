import chevron from "../../assets/images/icons/nav/chevron_right-24px.svg";
import trashcan from "../../assets/images/icons/action/delete_outline-24px.svg";
import editicon from "../../assets/images/icons/action/edit-24px.svg";
import filtericon from "../../assets/images/icons/nav/sort-default.svg";
import { PrimaryButtonInventory } from "../CallToActions/PrimaryButton";
import { Link } from "react-router-dom";
import "./InventoryFullList.scss";
import close from "../../assets/images/icons/action/close-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const InventoryFullList = ({ searchQuery, handleSearch }) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    async function fetch() {
      const res = await axios.get(`http://localhost:8080/inventory`);
      setInventory(res.data);
    }
    fetch();
  }, []);
  const [inv, setInv] = useState("");
  const [popup, setPopup] = useState(false);
  const [invID, setInvID] = useState("");
  const handleDelete = (invName, id) => {
    setInv(invName);
    setPopup(true);
    setInvID(id);
  };
  const handleConfirmDelete = async (passedID) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/inventory/${passedID}`
      );
      const res1 = await axios.get(`http://localhost:8080/inventory`);
      setInventory(res1.data);
      const user = confirm(
        "You have just deleted the inventory."
      );
      if (user) {
        setPopup(false);
      } else {
        setPopup(false);
      }
    } catch (error) {
      if (error.response.status == 404) {
        const user = confirm(
          "This inventory has been deleted or doesn't exit."
        );
        if (user) {
          setPopup(false);
        } else {
          setPopup(false);
        }
      }
    }
  };
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
                  <Link to={`/editInventoryItem/${inventory.id}`}
                    className="inventory__info inventory__info--item">
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
                <img
                  src={trashcan}
                  alt="Delete"
                  className="inventory__icon"
                  onClick={() => {
                    handleDelete(inventory.item_name, inventory.id);
                  }}
                />
                <Link to={`/editInventoryItem/${inventory.id}`}>
                  <img src={editicon} alt="Edit" className="inventory__icon" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <section
        className={
          popup == true
            ? "delete-container"
            : "delete-container delete-container--hidden"
        }
      >
        <section className="delete">
          <img
            src={close}
            className="delete__close"
            onClick={() => setPopup(false)}
          />
          <h1 className="delete__title">Delete {inv} inventory item?</h1>
          <p className="delete__paragraph">
            Please confirm that you'd like to delete {inv} from the inventory
            list. You won't be able to undo this action.
          </p>
          <section className="delete__buttons">
            <button
              className="delete__buttons--1"
              onClick={() => setPopup(false)}
            >
              Cancel
            </button>
            <button
              className="delete__buttons--2"
              onClick={() => {
                handleConfirmDelete(invID);
              }}
            >
              Delete
            </button>
          </section>
        </section>
      </section>
    </section>
  );
};

export default InventoryFullList;

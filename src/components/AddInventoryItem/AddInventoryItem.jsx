import "../AddInventoryItem/AddInventoryItem.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";
import QuantityField from "../QuantityField/QuantityField";

const AddInventoryItem = () => {
  const [isInStock, setInStock] = useState(false);

  function toggle() {
    setInStock((isInStock) => !isInStock);
  }
  return (
    <main className="add-inventory">
      <div className="add-inventory__title">
        <Link className="add-inventory__back-button-link" to={"/inventory"}>
          <img
            className="add-inventory__back-button"
            src={backArrowLogo}
            alt="back button"
          />
        </Link>
        <h1 className="add-inventory__title-text">Add Inventory Item</h1>
      </div>
      <form className="add-inventory__form">
        <div className="add-inventory__form-info">
          <div className="item-details">
            <h2 className="item-details__title">Item Details</h2>
            <label className="item-details__name-label">
              Item Name
              <input
                className="item-details__name"
                type="text"
                name="itemName"
                placeholder="Item Name"
              ></input>
            </label>
            <label className="item-details__description-label">
              Description
              <textarea
                className="item-details__description"
                name="descrition"
                placeholder="Please enter a brief item description..."
              ></textarea>
            </label>
            <label className="item-details__category-label">
              Category
              <select className="item-details__category" name="category">
                <option value="">Please select</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="health">Health</option>
                <option value="accessories">Accessories</option>
              </select>
            </label>
          </div>
          <div className="item-availability">
            <h2 className="item-availability__title">Item Availability</h2>
            <div className="item-availability-status">
              <h3 className="item-availability-status__title">Status</h3>
              <div className="item-availability-status__radios">
                <label className="item-availability-status__radio-label">
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="status"
                    value="in stock"
                    onChange={toggle}
                  ></input>
                  In stock
                </label>
                <label className="item-availability-status__radio-label">
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="status"
                    value="out of stock"
                    onChange={toggle}
                  ></input>
                  Out of stock
                </label>
              </div>
              {isInStock && <QuantityField />}
              <label className="item-availability__warehouse-label">
                Warehouse
                <select
                  className="item-availability__warehouse"
                  name="warehouse"
                >
                  <option value="">Please select</option>
                  <option value="manhattan">Manhattan</option>
                  <option value="washington">Washington</option>
                  <option value="jersey">Jersey</option>
                  <option value="sf">SF</option>
                  <option value="santa monica">Santa Monica</option>
                  <option value="seattle">Seattle</option>
                  <option value="miami">Miami</option>
                  <option value="boston">Boston</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="add-inventory__form-buttons">
          <Link
            className="add-inventory__form-cancel-button-link"
            to={"/inventory"}
          >
            <input
              className="add-inventory__form-cancel-button"
              type="submit"
              name="cancel"
              value="Cancel"
            />
          </Link>
          <Link
            className="add-inventory__form-save-button-link"
            to={"/inventory"}
          >
            <input
              className="add-inventory__form-save-button"
              type="submit"
              name="add"
              value="+ Add Item"
            />
          </Link>
        </div>
      </form>
    </main>
  );
};

export default AddInventoryItem;

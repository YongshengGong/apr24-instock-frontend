import "../EditInventoryItem/EditInventoryItem.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EditInventoryItem = () => {
  return (
    <main className="edit-inventory">
      <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      <form className="edit-inventory__form">
        <div className="edit-inventory__form-info">
          <div className="item-details">
            <label className="item-details__name-label">
              Item Name
              <input
                className="item-details__name"
                type="text"
                name="itemName"
                placeholder="type item name"
              ></input>
            </label>
            <label className="item-details__description-label">
              Description
              <textarea
                className="item-details__description"
                name="descrition"
                placeholder="Add a description"
              ></textarea>
            </label>
            <label className="item-details__category-label">
              Category
              <select className="item-details__category" name="category">
                <option value="">--Please choose an option--</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="health">Health</option>
                <option value="accessories">Accessories</option>
              </select>
            </label>
          </div>
          <div className="item-availability">
            <div className="item-availability-status">
              <h2 className="item-availability-status__title">Status</h2>
              <div className="item-availability-status__radios">
                <label className="item-availability-status__radio-label">
                  In stock
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="radioInStock"
                  ></input>
                </label>
                <label className="item-availability-status__radio-label">
                  Out of stock
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="radioOutOfStock"
                  ></input>
                </label>
              </div>
              <label className="item-availability-warehouse-label">
                Warehouse
                <select
                  className="item-availability-warehouse"
                  name="warehouse"
                >
                  <option value="">--Please choose an option--</option>
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
        <div className="edit-inventory__form-buttons">
          <Link className="edit-inventory__form-cancel-button-link" to={"/"}>
            <input
              className="edit-inventory__form-cancel-button"
              type="submit"
              name="cancel"
              value="Cancel"
            />
          </Link>
          <Link className="edit-inventory__form-save-button-link" to={"/"}>
            <input
              className="edit-inventory__form-save-button"
              type="submit"
              name="save"
              value="Save"
            />
          </Link>
        </div>
      </form>
    </main>
  );
};

export default EditInventoryItem;

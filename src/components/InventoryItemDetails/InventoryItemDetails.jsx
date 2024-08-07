import "../InventoryItemDetails/InventoryItemDetails.scss";
import backArrow from "../../assets/images/icons/nav/arrow_back-24px.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import EditButton from "../CallToActions/EditButtonWhite";

function InventoryItemDetails({ selectedInventory }) {
  return (
    <section className="item-details">
      <header className="item-details__header">
        <div className="item-details__arrow-title-container">
          <Link to={`/inventory`} className="item-details__back-arrow-link">
            <img src={backArrow} className="item-details__back-arrow" />
          </Link>
          {/* Replace below with data point based on id clicked */}
          <h1 className="item-details__title">{selectedInventory.item_name}</h1>
        </div>
        {/* Need to update below link once warehouse edit page is created. */}
        <Link
          to={`/editInventoryItem/${selectedInventory.id}`}
          className="item-details__edit-button-link"
        >
          <EditButton />
        </Link>
      </header>

      <section className="info-section">
        <div className="item-details__info-container">
          <h4 className="item-details__sub-title">ITEM DESCRIPTION:</h4>
          {/* ! Replace with Data */}
          <p className="item-details__info">{selectedInventory.description}</p>
          <h4 className="item-details__sub-title">CATEGORY:</h4>
          <p className="item-details__info">{selectedInventory.category}</p>
        </div>
        <div className="item-details__info2-container">
          <div className="item-details__info-container item-details__info-container--info2">
            <h4 className="item-details__sub-title">Status:</h4>
            <p className="item-details__info">In Stock</p>
            <h4 className="item-details__sub-title">WAREHOUSE:</h4>
            <p className="item-details__info">
              {selectedInventory.warehouse_name}
            </p>
          </div>
          <div className="item-details__info-container item-details__info-container--info2-info">
            <h4 className="item-details__sub-title">QUANTITY:</h4>
            <p className="item-details__info">{selectedInventory.quantity}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default InventoryItemDetails;

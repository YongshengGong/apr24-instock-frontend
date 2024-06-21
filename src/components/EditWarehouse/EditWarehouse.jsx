import "./EditWarehouse.scss";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";

function EditWarehouse() {
  return (
    <main className="edit-warehouse">
      <div className="edit-warehouse__title">
        <Link className="edit-warehouse__back-button-link" to={".."}>
          <img
            className="edit-warehouse__back-button"
            src={backArrowLogo}
            alt="back button"
          />
        </Link>
        <h1 className="edit-warehouse__title-text">Edit warehouse</h1>
      </div>
      <form className="edit-warehouse__form">
        <div className="edit-warehouse__form-info">
          <div className="warehouse-details">
            <h2 className="warehouse-details__title">Warehouse Details</h2>
            <label className="warehouse-details__name-label">
              Warehouse Name
              <input
                className="warehouse-details__name"
                type="text"
                name="WarehouseName"
                placeholder="Washington"
              />
            </label>
            <label className="warehouse-details__description-label">
              Street Address
              <input
                className="warehouse-details__streat-address"
                type="text"
                name="Address"
                placeholder="33 Pearl Street SW"
              />
            </label>
            <label className="warehouse-details__description-label">
              City
              <input
                className="warehouse-details__city"
                type="text"
                name="City"
                placeholder="Washington"
              />
            </label>
            <label className="warehouse-details__description-label">
              Country
              <input
                className="warehouse-details__country"
                type="text"
                name="Country"
                placeholder="USA"
              />
            </label>
            <h2 className="contact-details__title">Contact Details</h2>
            <label className="contact-details__description-label">
              Contact Name
              <input
                className="contact-details__name"
                type="text"
                name="name"
                placeholder="John Doe"
              />
            </label>
            <label className="contact-details__description-label">
              Position
              <input
                className="contact-details__position"
                type="text"
                name="position"
                placeholder="Warehouse Manager"
              />
            </label>
            <label className="contact-details__description-label">
              Phone Number
              <input
                className="contact-details__phone-number"
                type="text"
                name="phoneNumber"
                placeholder="123-456-7890"
              />
            </label>
            <label className="contact-details__description-label">
              Email
              <input
                className="contact-details__email"
                type="email"
                name="email"
                placeholder="john.doe@example.com"
              />
            </label>
          </div>
          <div className="edit-warehouse__form-buttons">
            <Link className="edit-warehouse__form-cancel-button-link" to={".."}>
              <input
                className="edit-warehouse__form-cancel-button"
                type="submit"
                name="cancel"
                value="Cancel"
              />
            </Link>
            <Link className="edit-warehouse__form-save-button-link" to={".."}>
              <input
                className="edit-warehouse__form-save-button"
                type="submit"
                name="save"
                value="Save"
              />
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default EditWarehouse;

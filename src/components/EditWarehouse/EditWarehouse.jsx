import "./EditWarehouse.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";

const EditWarehouse = () => {
  return (
    <main className="add-inventory">
      <div className="add-inventory__title">
        <Link className="add-inventory__back-button-link" to={"/details"}>
          <img
            className="add-inventory__back-button"
            src={backArrowLogo}
            alt="back button"
          />
        </Link>
        <h1 className="add-inventory__title-text">Edit Warehouse</h1>
      </div>
      <form className="add-inventory__form">
        <div className="add-warehouse__form-info">
          <div className="warehouse-details">
            <h2 className="warehouse-details__title">Warehouse Details</h2>
            <label className="warehouse-details__name-label">
              Warehouse Name
              <input
                className="warehouse-details__name"
                type="text"
                name="warehouseName"
                // placeholder="Warehouse Name"
              ></input>
            </label>
            <label className="warehouse-details__address-label">
              Street Address
              <input
                className="warehouse-details__address"
                name="address"
                type="text"
                // placeholder="Street Address"
              ></input>
            </label>
            <label className="warehouse-details__city-label">
              City
              <input
                className="warehouse-details__city"
                name="city"
                type="text"
                // placeholder="City"
              ></input>
            </label>
            <label className="warehouse-details__country-label">
              Country
              <input
                className="warehouse-details__country"
                name="country"
                type="text"
                // placeholder="Country"
              ></input>
            </label>
          </div>
          <div className="contact-details">
            <h2 className="contact-details__title">Contact Details</h2>
            <label className="contact-details__name-label">
              Contact Name
              <input
                className="contact-details__name"
                type="text"
                name="contactName"
                // placeholder="Contact Name"
              ></input>
            </label>
            <label className="contact-details__position-label">
              Position
              <input
                className="contact-details__position"
                name="position"
                type="text"
                // placeholder="Position"
              ></input>
            </label>
            <label className="contact-details__phone-label">
              Phone Number
              <input
                className="contact-details__phone"
                name="phone"
                type="text"
                // placeholder="Phone Number"
              ></input>
            </label>
            <label className="contact-details__email-label">
              Email
              <input
                className="contact-details__email"
                name="email"
                type="text"
                // placeholder="Email"
              ></input>
            </label>
          </div>
        </div>
        <div className="add-inventory__form-buttons">
          <Link className="add-inventory__form-cancel-button-link" to={"/details"}>
            <input
              className="add-inventory__form-cancel-button"
              type="button"
              name="cancel"
              value="Cancel"
            />
          </Link>
          <Link className="add-inventory__form-save-button-link" to={"/details"}>
            <input
              className="add-inventory__form-save-button"
              type="submit"
              name="add"
              value="Save"
            />
          </Link>
        </div>
      </form>
    </main>
  );
};

export default EditWarehouse;

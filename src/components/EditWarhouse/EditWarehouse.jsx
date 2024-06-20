import "./EditWarehouse.scss";
import React, { useState } from "react";

const EditWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouseName: "Washington",
    streetAddress: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contactName: "Graeme Lyon",
    position: "Warehouse Manager",
    phoneNumber: "+1 (647) 504-0911",
    email: "glyon@instock.com",
  });
  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
  });

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "phoneNumber" && !validatePhoneNumber(value)) {
      error = "Invalid phone number.";
    } else if (name === "email" && !validateEmail(value)) {
      error = "Invalid email address.";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.phoneNumber && !errors.email) {
      // Submit form data
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="edit-warehouse">
      <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      <form className="edit-warehouse__form" onSubmit={handleSubmit}>
        <div className="edit-warehouse__section">
          <h3>Warehouse Details</h3>
          <div className="edit-warehouse__form-group">
            <label htmlFor="warehouseName" className="edit-warehouse__label">
              Warehouse Name
            </label>
            <div className="edit-warehouse_info">
              <input
                type="text"
                id="warehouseName"
                name="warehouseName"
                value={formData.warehouseName}
                onChange={handleChange}
                className="edit-warehouse__input"
              />
            </div>
            <div className="edit-warehouse__form-group">
              <label htmlFor="streetAddress" className="edit-warehouse__label">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="edit-warehouse__input"
              />
            </div>
            <div className="edit-warehouse__form-group">
              <label htmlFor="city" className="edit-warehouse__label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="edit-warehouse__input"
              />
            </div>
            <div className="edit-warehouse__form-group">
              <label htmlFor="country" className="edit-warehouse__label">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="edit-warehouse__input"
              />
            </div>
          </div>
        </div>
        <div className="edit-warehouse__section">
          <h3>Contact Details</h3>
          <div className="edit-warehouse__form-group">
            <label htmlFor="contactName" className="edit-warehouse__label">
              Contact Name
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="edit-warehouse__input"
            />
          </div>
          <div className="edit-warehouse__form-group">
            <label htmlFor="position" className="edit-warehouse__label">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="edit-warehouse__input"
            />
          </div>
          <div className="edit-warehouse__form-group">
            <label htmlFor="phoneNumber" className="edit-warehouse__label">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="edit-warehouse__input"
            />
            {errors.phoneNumber && (
              <span className="edit-warehouse__error">
                {errors.phoneNumber}
              </span>
            )}
          </div>
          <div className="edit-warehouse__form-group">
            <label htmlFor="email" className="edit-warehouse__label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="edit-warehouse__input"
            />
            {errors.email && (
              <span className="edit-warehouse__error">{errors.email}</span>
            )}
          </div>
        </div>
      </form>
      <div className="edit-warehouse__actions">
        <button
          type="button"
          className="edit-warehouse__button edit-warehouse__button--cancel"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="edit-warehouse__button edit-warehouse__button--save"
        >
          Save
        </button>
      </div>
      ;
    </div>
  );
};

export default EditWarehouse;

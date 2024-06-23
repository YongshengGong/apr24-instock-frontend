import "./EditWarehouse.scss";
import { Link } from "react-router-dom";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const EditWarehouse = ({ ID, warehouses }) => {
  const selectedWarehouse = warehouses.find(warehouse => warehouse.id == ID);
  localStorage.setItem("selectedWarehouse", JSON.stringify(selectedWarehouse) || localStorage.getItem("selectedWarehouse"));
  const ware = JSON.parse(localStorage.getItem("selectedWarehouse"));
  console.log(ware);
  const url = "http://localhost:8080";
  const nav = useNavigate();
  const [warehouse_name, setWarehouse_name] = useState(ware.warehouse_name);
  const [address, setAddress] = useState(ware.address);
  const [city, setCity] = useState(ware.city);
  const [country, setCountry] = useState(ware.country);
  const [contact_name, setContact_name] = useState(ware.contact_name);
  const [contact_position, setContact_position] = useState(ware.contact_position);
  const [contact_phone, setContact_phone] = useState(ware.contact_phone);
  const [contact_email, setContact_email] = useState(ware.contact_email);
  const [errors, setErrors] = useState({
    warehouse_name: false,
    address: false,
    city: false,
    country: false,
    contact_name: false,
    contact_position: false,
    contact_phone: false,
    contact_email: false
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      warehouse_name: false,
      address: false,
      city: false,
      country: false,
      contact_name: false,
      contact_position: false,
      contact_phone: false,
      contact_email: false
    };
    if (!warehouse_name) {
      newErrors.warehouse_name = true;
    }
    if (!address) {
      newErrors.address = true;
    }
    if (!city) {
      newErrors.city = true;
    }
    if (!country) {
      newErrors.country = true;
    }
    if (!contact_name) {
      newErrors.contact_name = true;
    }
    if (!contact_position) {
      newErrors.contact_position = true;
    }
    if (!contact_phone) {
      newErrors.contact_phone = true;
    }
    if (!contact_email) {
      newErrors.contact_email = true;
    }
    setErrors(newErrors);

    if (!newErrors.warehouse_name &&
      !newErrors.address &&
      !newErrors.city &&
      !newErrors.country &&
      !newErrors.contact_name &&
      !newErrors.contact_position &&
      !newErrors.contact_phone &&
      !newErrors.contact_email) {
      const newWarehouse = {
        warehouse_name: warehouse_name,
        address: address,
        city: city,
        country: country,
        contact_name: contact_name,
        contact_position: contact_position,
        contact_phone: contact_phone,
        contact_email: contact_email
      }
      async function addNewWarehouse() {
        try {
          const res = await axios.put(`${url}/warehouses/${ID}`, newWarehouse);
          console.log(res.data);
        }
        catch (error) {
          console.log("error caught in the catch block:", error);
        }
      }
      addNewWarehouse();
      const user = confirm(`This warehouse has been updated successfully✅`);
      if (user === true) {
        nav(`/warehouses/${ID}`);
      }
    }

  }
  return (
    <main className="add-warehouse">
      <div className="add-warehouse__title">
        <Link className="add-warehouse__back-button-link" to={`/warehouses/${ID}`}>
          <img
            className="add-warehouse__back-button"
            src={backArrowLogo}
            alt="back button"
          />
        </Link>
        <h1 className="add-warehouse__title-text">Edit Warehouse</h1>
      </div>
      <form className="add-warehouse__form" onSubmit={e => handleOnSubmit(e)}>
        <div className="add-warehouse__form-info">
          <div className="warehouse-details">
            <h2 className="warehouse-details__title">Warehouse Details</h2>
            <label className="warehouse-details__name-label">
              Warehouse Name
              <input
                className={errors.warehouse_name ?
                  "warehouse-details__name warehouse-details__name--error" :
                  "warehouse-details__name"}
                type="text"
                name="warehouseName"
                onChange={(e) => setWarehouse_name(e.target.value)}
                value={warehouse_name}
                placeholder="Warehouse Name"
              ></input>
            </label>
            <label className="warehouse-details__address-label">
              Street Address
              <input
                className={errors.address ?
                  "warehouse-details__address warehouse-details__address--error" :
                  "warehouse-details__address"}
                name="address"
                type="text"
                placeholder="Street Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              ></input>
            </label>
            <label className="warehouse-details__city-label">
              City
              <input
                className={errors.city ?
                  "warehouse-details__city warehouse-details__city--error" :
                  "warehouse-details__city"}
                name="city"
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              ></input>
            </label>
            <label className="warehouse-details__country-label">
              Country
              <input
                className={errors.country ?
                  "warehouse-details__country warehouse-details__country--error" :
                  "warehouse-details__country"}
                name="country"
                type="text"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              ></input>
            </label>
          </div>
          <div className="contact-details">
            <h2 className="contact-details__title">Contact Details</h2>
            <label className="contact-details__name-label">
              Contact Name
              <input
                className={errors.contact_name ?
                  "contact-details__name contact-details__name--error" :
                  "contact-details__name"}
                type="text"
                name="contactName"
                placeholder="Contact Name"
                onChange={(e) => setContact_name(e.target.value)}
                value={contact_name}
              ></input>
            </label>
            <label className="contact-details__position-label">
              Position
              <input
                className={errors.contact_position ?
                  "contact-details__contact_position contact-details__contact_position--error" :
                  "contact-details__contact_position"}
                name="position"
                type="text"
                placeholder="Position"
                onChange={(e) => setContact_position(e.target.value)}
                value={contact_position}
              ></input>
            </label>
            <label className="contact-details__phone-label">
              Phone Number
              <input
                className={errors.contact_phone ?
                  "contact-details__phone contact-details__phone--error" :
                  "contact-details__phone"}
                name="phone"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setContact_phone(e.target.value)}
                value={contact_phone}
              ></input>
            </label>
            <label className="contact-details__email-label">
              Email
              <input
                className={errors.contact_email ?
                  "contact-details__email contact-details__email--error" :
                  "contact-details__email"}
                name="email"
                type="text"
                placeholder="Email"
                onChange={(e) => setContact_email(e.target.value)}
                value={contact_email}
              ></input>
            </label>
          </div>
        </div>
        <div className="add-warehouse__form-buttons">
          <Link className="add-warehouse__form-cancel-button-link" to={`/warehouses/${ID}`}>
            <input
              className="add-warehouse__form-cancel-button"
              type="button"
              name="cancel"
              value="Cancel"
            />
          </Link>
          <button className="add-warehouse__form-save-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditWarehouse;

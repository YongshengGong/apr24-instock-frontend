import "../AddInventoryItem/AddInventoryItem.scss";
import { Link } from "react-router-dom";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import QuantityField from "../QuantityField/QuantityField";
const AddInventoryItem = ({ warehouses }) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    description: false,
    category: false,
    qty: false,
    warehouse: false,
  });

  const [isInStock, setInStock] = useState(false);
  const convertStatus = () => {
    if (!status === "In Stock") {
      setStatus("Out of Stock");
      setInStock(false);
    } else {
      setStatus("In Stock");
      setInStock(true);
    }
  };
  const handleRadioButton = (value) => {
    setInStock((isInStock) => !isInStock);
    setStatus(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      name: false,
      description: false,
      category: false,
      qty: false,
      warehouse: false,
    };
    if (!name) {
      newErrors.name = true;
    }
    if (!description) {
      newErrors.description = true;
    }
    if (!category) {
      newErrors.category = true;
    }
    if (!qty) {
      newErrors.qty = true;
    }
    if (!warehouse) {
      newErrors.warehouse = true;
    }
    setErrors(newErrors);
    if (
      !newErrors.name &&
      !newErrors.description &&
      !newErrors.category &&
      !newErrors.qty &&
      !newErrors.warehouse
    ) {
      const filteredWarehouse = warehouses.find(
        (ware) => ware.warehouse_name === warehouse
      );
      console.log(filteredWarehouse.id);
      const newInventory = {
        warehouse_id: filteredWarehouse.id,
        item_name: name,
        description: description,
        category: category,
        status: status,
        quantity: qty,
      };
      async function addNewInventory() {
        try {
          const res = await axios.post(
            `http://localhost:8080/inventory`,
            newInventory
          );
          console.log(res.data);
        } catch (error) {
          console.log("error caught in the catch block:", error);
        }
      }
      addNewInventory();
      const user = confirm(`The new inventory has been created successfully✅`);
      if (user === true) {
        nav("/inventory");
      }
    }
  };

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
        <h1 className="add-inventory__title-text">Add New Inventory Item</h1>
      </div>
      <form className="add-inventory__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="add-inventory__form-info">
          <div className="item-details">
            <h2 className="item-details__title">Item Details</h2>
            <label className="item-details__name-label">
              Item Name
              <input
                className={
                  errors.name
                    ? "item-details__name item-details__name--error"
                    : "item-details__name"
                }
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label className="item-details__description-label">
              Description
              <textarea
                className={
                  errors.description
                    ? "item-details__description item-details__description--error"
                    : "item-details__description"
                }
                name="descrition"
                placeholder="Please enter a brief item description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <label className="item-details__category-label">
              Category
              <select
                className={
                  errors.category
                    ? "item-details__category item-details__category--error"
                    : "item-details__category"
                }
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option hidden>Please select</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Health">Health</option>
                <option value="Accessories">Accessories</option>
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
                    name="radio"
                    value="In Stock"
                    onChange={() => handleRadioButton("In Stock")}
                    defaultChecked
                  ></input>
                  In stock
                </label>
                <label className="item-availability-status__radio-label">
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="radio"
                    value="Out of Stock"
                    onChange={() => handleRadioButton("Out of Stock")}
                  ></input>
                  Out of stock
                </label>
              </div>
              {isInStock && (
                <QuantityField quantity={quantity} setQuantity={setQuantity} />
              )}
              <label className="item-availability__warehouse-label">
                Warehouse
                <select
                  className={
                    errors.warehouse
                      ? "item-availability__warehouse item-availability__warehouse--error"
                      : "item-availability__warehouse"
                  }
                  name="warehouse"
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                >
                  <option value="Please select" hidden>
                    Please select
                  </option>
                  {warehouses.map((warehouse) => {
                    return (
                      <option
                        value={warehouse.warehouse_name}
                        key={warehouse.id}
                      >
                        {warehouse.warehouse_name}
                      </option>
                    );
                  })}
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
              type="button"
              value="Cancel"
            />
          </Link>
          <button className="add-inventory__form-save-button" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddInventoryItem;

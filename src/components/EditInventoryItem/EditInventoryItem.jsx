import "../EditInventoryItem/EditInventoryItem.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";
import QuantityField from "../QuantityField/QuantityField";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditInventoryItem = () => {
  const url = "http://localhost:8080";
  const nav = useNavigate();
  const [itemInfo, setItemInfo] = useState({});
  const { inventoryId } = useParams();
  const [item_name, setitem_name] = useState("");
  const [description, setDescription] = useState("");
  const warehouses = [
    { warehouse_name: "Please select", warehouse_id: "" },
    { warehouse_name: "Manhattan", warehouse_id: 1 },
    { warehouse_name: "Washington", warehouse_id: 2 },
    { warehouse_name: "Jersey", warehouse_id: 3 },
    { warehouse_name: "SF", warehouse_id: 4 },
    { warehouse_name: "Santa Monica", warehouse_id: 5 },
    { warehouse_name: "Seattle", warehouse_id: 6 },
    { warehouse_name: "Miami", warehouse_id: 7 },
    { warehouse_name: "Boston", warehouse_id: 8 },
  ];
  const [warehouse, setWarehouse] = useState({
    warehouse_name: "",
    warehouse_id: "",
  });
  const [warehouse_id, setWarehouseId] = useState("");

  const [status, setStatus] = useState(2);
  const [quantity, setQuantity] = useState("");
  const categories = [
    "Please select",
    "Electronics",
    "Gear",
    "Apparel",
    "Health",
    "Accessories",
  ];
  const [category, setCategory] = useState(categories[0]);
  const [errors, setErrors] = useState({
    item_name: false,
    description: false,
    category: false,
    status: false,
    quantity: false,
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

  useEffect(() => {
    const fetchItemInfo = async () => {
      try {
        const response = await axios.get(`${url}/inventory/${inventoryId}`);
        setItemInfo(response.data);
        setitem_name(response.data.item_name);
        setDescription(response.data.description);
        let newWarehouse = {
          warehouse_name: response.data.warehouse_name,
          warehouse_id: response.data.warehouse_id,
        };
        setWarehouseId(response.data.warehouse_id);
        setCategory(response.data.category);
        setQuantity(response.data.quantity);
        setStatus(response.data.status);
        convertStatus();
        setWarehouse(newWarehouse);
      } catch (e) {
        console.error("error getting item data:", e);
      }
    };
    fetchItemInfo();
    convertStatus();
  }, []);

  const handleRadioButton = (value) => {
    setInStock((isInStock) => !isInStock);
    setStatus(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let newErrors = {
      item_name: false,
      description: false,
      category: false,
      status: false,
      quantity: false,
    };
    if (!item_name) {
      newErrors.item_name = true;
    }
    if (!description) {
      newErrors.description = true;
    }
    if (!category) {
      newErrors.category = true;
    }
    if (!status) {
      newErrors.status = true;
    }
    if (!quantity) {
      newErrors.quantity = true;
    }

    setErrors(newErrors);

    if (
      !newErrors.item_name &&
      !newErrors.description &&
      !newErrors.category &&
      !newErrors.status &&
      !newErrors.quantity
    ) {
      const editedItem = {
        warehouse_id: warehouse_id,
        item_name: item_name,
        description: description,
        category: category,
        status: status,
        quantity: quantity,
      };
      async function updateInventoryItem() {
        try {
          const res = await axios.put(
            `${url}/inventory/${inventoryId}`,
            editedItem
          );
        } catch (error) {
          console.error("error caught in the catch block:", error);
        }
      }
      updateInventoryItem();
      const user = confirm(
        `The inventory item has been updated successfully✅`
      );
      if (user === true) {
        nav("/inventory");
      }
    }
  };

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__title">
        <Link
          className="edit-inventory__back-button-link"
          to="/inventoryDetails"
        >
          <img
            className="edit-inventory__back-button"
            src={backArrowLogo}
            alt="back button"
          />
        </Link>
        <h1 className="edit-inventory__title-text">Edit Inventory Item</h1>
      </div>
      <form
        className="edit-inventory__form"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className="edit-inventory__form-info">
          <div className="item-details">
            <h2 className="item-details__title">Item Details</h2>
            <label className="item-details__name-label">
              Item Name
              <input
                className="item-details__name"
                type="text"
                name="item_name"
                placeholder="Item Name"
                onChange={(e) => setitem_name(e.target.value)}
                value={item_name}
              />
            </label>
            <label className="item-details__description-label">
              Description
              <textarea
                className="item-details__description"
                name="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </label>
            <label className="item-details__category-label">
              Category
              <select
                className="item-details__category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {categories.map((category) => (
                  <option>{category}</option>
                ))}
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
                    checked={status === "In Stock"}
                    onChange={() => handleRadioButton("In Stock")}
                  />
                  In stock
                </label>
                <label className="item-availability-status__radio-label">
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="status"
                    value="out of stock"
                    checked={status === "Out of Stock"}
                    onChange={() => handleRadioButton("Out of Stock")}
                  />
                  Out of stock
                </label>
              </div>
              {isInStock && (
                <QuantityField
                  itemInfo={itemInfo}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              )}
              <label className="item-availability__warehouse-label">
                Warehouse
                <select
                  className="item-availability__warehouse"
                  name="warehouse"
                  onChange={(e) => setWarehouse(e.target.value)}
                  value={warehouse.warehouse_name}
                >
                  {warehouses.map((warehouse) => (
                    <option>{warehouse.warehouse_name}</option>
                  ))}
                </select>
              </label>
              <p>{warehouse_id}</p>
            </div>
          </div>
        </div>
        <div className="edit-inventory__form-buttons">
          <Link
            className="edit-inventory__form-cancel-button-link"
            to="/inventoryDetails"
          >
            <input
              className="edit-inventory__form-cancel-button"
              type="button"
              name="cancel"
              value="Cancel"
            />
          </Link>
          <Link
            className="edit-inventory__form-save-button-link"
            to="/inventoryDetails"
          >
            <input
              className="edit-inventory__form-save-button"
              type="submit"
              name="save"
              value="Save"
            />
          </Link>
        </div>
      </form>
    </section>
  );
};

export default EditInventoryItem;

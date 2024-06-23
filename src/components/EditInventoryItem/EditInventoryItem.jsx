import "../EditInventoryItem/EditInventoryItem.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backArrowLogo from "../../assets/images/icons/nav/arrow_back-24px.svg";
import QuantityField from "../QuantityField/QuantityField";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditInventoryItem = () => {
  const [itemInfo, setItemInfo] = useState({});
  const { inventoryId } = useParams();

  useEffect(() => {
    const fetchItemInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/inventory/${inventoryId}`
        );
        setItemInfo(response.data);
      } catch (e) {
        console.error("error getting item data:", e);
      }
    };
    fetchItemInfo();
  }, []);

  const url = "http://localhost:8080";
  const nav = useNavigate();
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const categories = [
    "Please select",
    "Electronics",
    "Gear",
    "Apparel",
    "Health",
    "Accessories",
  ];
  const [category, setCategory] = useState(categories[0]);
  const [status, setStatus] = useState(2);
  // const [quantity, setQuantity] = useState("");
  // const [errors, setErrors] = useState({
  //   item_name: false,
  //   description: false,
  //   category: false,
  //   status: false,
  //   quantity: false,
  // });
  const [isInStock, setInStock] = useState(false);

  const handleRadioButton = (value) => {
    setInStock((isInStock) => !isInStock);
    setStatus({ value });
  };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   let newErrors = {
  //     item_name: false,
  //     description: false,
  //     category: false,
  //     status: false,
  //     quantity: false,
  //   };
  //   if (!item_name) {
  //     newErrors.item_name = true;
  //   }
  //   if (!description) {
  //     newErrors.description = true;
  //   }
  //   if (!category) {
  //     newErrors.category = true;
  //   }
  //   if (!status) {
  //     newErrors.status = true;
  //   }
  //   if (!quantity) {
  //     newErrors.quantity = true;
  //   }

  //   setErrors(newErrors);
  //   console.log(newErrors.contact_email);
  //   if (
  //     !newErrors.item_name &&
  //     !newErrors.description &&
  //     !newErrors.category &&
  //     !newErrors.status &&
  //     !newErrors.quantity
  //   ) {
  //     const editedItem = {
  //       item_name: itemName,
  //       description: description,
  //       category: category,
  //       status: status,
  //       quantity: quantity,
  //     };
  //     async function updateInventoryItem() {
  //       try {
  //         const res = await axios.put(
  //           `${url}/inventory/editInventoryItem`,
  //           editedItem
  //         );
  //         console.log(res.data);
  //       } catch (error) {
  //         console.log("error caught in the catch block:", error);
  //       }
  //     }
  //     updateInventoryItem();
  //     const user = confirm(
  //       `The inventory item has been updated successfully✅`
  //     );
  //     if (user === true) {
  //       nav("/inventory");
  //     }
  //   }
  // };

  return (
    <section className="edit-inventory">
      {/* {console.log(itemInfo)} */}
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
        // onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className="edit-inventory__form-info">
          <div className="item-details">
            <h2 className="item-details__title">Item Details</h2>
            <label className="item-details__name-label">
              Item Name
              <input
                className="item-details__name"
                type="text"
                name="itemName"
                placeholder="Item Name"
                onChange={(e) => setItemName(e.target.value)}
                value={itemInfo.item_name}
              />
            </label>
            <label className="item-details__description-label">
              Description
              <textarea
                className="item-details__description"
                name="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={itemInfo.description}
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
              {/* <select className="item-details__category" name="category">
                <option value="">Please select</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="health">Health</option>
                <option value="accessories">Accessories</option>
              </select> */}
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
                    checked={status === 1}
                    onChange={() => handleRadioButton(1)}
                  />
                  In stock
                </label>
                <label className="item-availability-status__radio-label">
                  <input
                    className="item-availability-status__radio"
                    type="radio"
                    name="status"
                    value="out of stock"
                    checked={status === 2}
                    onChange={() => handleRadioButton(2)}
                  />
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

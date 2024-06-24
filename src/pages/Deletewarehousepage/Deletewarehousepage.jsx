import React from "react";
import "./Deletewarehousepage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import close from "../../assets/images/icons/action/close-24px.svg";

const Deletewarehousepage = ({ warehouse }) => {
  const [inv, setInv] = React.useState("");
  const [popup, setPopup] = React.useState(false);
  const [invID, setInvID] = React.useState("");

  const handleDelete = (invName, id) => {
    setInv(invName);
    setPopup(true);
    setInvID(id);
  };

  const handleConfirmDelete = async (passedID) => {
    try {
      await axios.delete(`http://localhost:8080/warehouse/${passedID}`);
      const user = confirm(
        "You have just deleted the warehouse, please manually restart backend NODE to see the newest update"
      );
      if (user) {
        setPopup(false);
      }
    } catch (error) {
      if (error.response.status == 404) {
        const user = confirm(
          "This warehouse has been deleted or doesn't exist. If you have just deleted it, please manually restart backend NODE to see the newest update"
        );
        if (user) {
          setPopup(false);
        }
      }
    }
  };

  return (
    <section className="warehouse">
      <header className="warehouse__header">
        <h1 className="warehouse__title">Warehouse</h1>
      </header>
      <ul className="warehouse__list">
        {warehouse.map((warehouse) => (
          <li className="warehouse__item" key={warehouse.id}>
            <div className="warehouse__info-group">
              <div className="warehouse__info-item warehouse__info-item--warehouse">
                <p className="warehouse__sub-title">Warehouse</p>
                <p className="warehouse__info wh-inv__info--warehouse">
                  {warehouse.item_name}
                </p>
              </div>
              <div className="warehouse__info-item warehouse__info-item--actions">
                <img
                  src={close}
                  alt="Delete"
                  className="warehouse__icon"
                  onClick={() => {
                    handleDelete(warehouse.item_name, warehouse.id);
                  }}
                />
                <Link to={`/editwarehouseItem/${warehouse.id}`}>
                  <img src={editicon} alt="Edit" className="warehouse__icon" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {popup && (
        <section className="delete-container">
          <section className="delete">
            <img
              src={close}
              className="delete__close"
              onClick={() => setPopup(false)}
            />
            <h1 className="delete__title">Delete {inv} warehouse item?</h1>
            <p className="delete__paragraph">
              Please confirm that you'd like to delete {inv} from the warehouse
              list. You won't be able to undo this action.
            </p>
            <section className="delete__buttons">
              <button
                className="delete__buttons--1"
                onClick={() => setPopup(false)}
              >
                Cancel
              </button>
              <button
                className="delete__buttons--2"
                onClick={() => {
                  handleConfirmDelete(invID);
                }}
              >
                Delete
              </button>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default Deletewarehousepage;

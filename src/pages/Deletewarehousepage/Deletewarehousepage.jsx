import React from "react";
import "./Deletewarehousepage.scss";

const Deletewarehouse = ({ onClose }) => {
  const handleDelete = () => {
    console.log("Warehouse deleted");
    onClose();
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Delete Washington warehouse?</h2>
        <p>
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="dialog-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deletewarehouse;

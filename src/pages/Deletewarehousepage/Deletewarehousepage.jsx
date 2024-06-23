import React from "react";
import "./Deletewarehousepage.scss";
import axios from "axios";

// Function to delete a warehouse
async function deleteWarehouse(warehouseId) {
  const url = `http://localhost:8080/warehouses/${warehouseId}`; // Replace with your API endpoint

  try {
    const response = await axios.delete(url);
    console.log("Warehouse deleted successfully:", response.data);
  } catch (error) {
    console.error(
      "Error deleting the warehouse:",
      error.response ? error.response.data : error.message
    );
  }
}
const Deletewarehousepage = ({ onClose }) => {
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
          <Link className="cancel-button__link" to="/warehouses">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
          </Link>
          <Link className="delete-button__link" to="/warehouses">
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deletewarehousepage;

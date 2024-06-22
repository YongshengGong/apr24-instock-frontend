import "./PrimaryButton.scss";
import { Link } from "react-router-dom";
function PrimaryButton() {
  return (
      <Link to="/addNewWarehouse" className="add-button"><span className="add-button-text">+ Add New Warehouse</span></Link>
  );
}
function PrimaryButtonInventory() {
  return (
      <Link to="/addInventory" className="add-button"><span className="add-button-text">+ Add New Item</span></Link>
  );
}

export default PrimaryButton;
export {PrimaryButtonInventory};
import "./PrimaryButton.scss";
import { Link } from "react-router-dom";
function PrimaryButton() {
  return (
      <Link to="/addNewWarehouse" className="add-button"><span className="add-button-text">+ Add New Warehouse</span></Link>
  );
}

export default PrimaryButton;

import "./WarehouseDetails.scss";
import backArrow from "../../assets/images/icons/nav/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import EditButton from "../CallToActions/EditButtonWhite";

function WarehouseDetails({ selectedWarehouse }) {
  if (selectedWarehouse === undefined) {
    return (<>loading...</>)
  }
  return (
    <section>
      <header className="wh-details__header">
        <div className="wh-details__arrow-title-container">
          <Link to={"/"} className="wh-details__back-arrow-link">
            <img src={backArrow} className="wh-details__back-arrow" />
          </Link>
          <h1 className="wh-details__title">{selectedWarehouse.warehouse_name}</h1>
        </div>
        <Link to={"/editWarehouse"} className="wh-details__edit-button-link">
          <EditButton />
        </Link>
      </header>

      <section className="info-section">
        <div className="wh-details__info-container">
          <h4 className="wh-details__sub-title">WAREHOUSE ADDRESS:</h4>
          <p className="wh-details__info">
            {selectedWarehouse.address}
          </p>
        </div>
        <div className="wh-details__contact-container">
          <div className="wh-details__info-container wh-details__info-container--contact">
            <h4 className="wh-details__sub-title">CONTACT NAME:</h4>
            <p className="wh-details__info">{selectedWarehouse.contact_name}</p>
            <p className="wh-details__info">{selectedWarehouse.contact_position}</p>
          </div>
          <div className="wh-details__info-container wh-details__info-container--contact-info">
            <h4 className="wh-details__sub-title">CONTACT INFOMATION</h4>
            <p className="wh-details__info">{selectedWarehouse.contact_phone}</p>
            <p className="wh-details__info">{selectedWarehouse.contact_email}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WarehouseDetails;

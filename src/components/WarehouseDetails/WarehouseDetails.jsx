import "./WarehouseDetails.scss";
import backArrow from "../../assets/images/icons/nav/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
          {/* Replace below with data point based on id clicked */}
          <h1 className="wh-details__title">{selectedWarehouse.warehouse_name}</h1>
        </div>
        {/* Need to update below link once warehouse edit page is created. */}
        <Link to={"/editWarehouse"} className="wh-details__edit-button-link">
          <EditButton />
        </Link>
      </header>

      <section className="info-section">
        <div className="wh-details__info-container">
          <h4 className="wh-details__sub-title">WAREHOUSE ADDRESS:</h4>
          {/* ! Replace with Data */}
          <p className="wh-details__info">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="wh-details__contact-container">
          <div className="wh-details__info-container wh-details__info-container--contact">
            <h4 className="wh-details__sub-title">CONTACT NAME:</h4>
            <p className="wh-details__info">Graeme Lyon</p>
            <p className="wh-details__info">Warehouse Manager</p>
          </div>
          <div className="wh-details__info-container wh-details__info-container--contact-info">
            <h4 className="wh-details__sub-title">CONTACT INFOMATION</h4>
            <p className="wh-details__info">+1 647-504-0911</p>
            <p className="wh-details__info">glyon@instock.com</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default WarehouseDetails;

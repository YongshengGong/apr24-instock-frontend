import chevron from "../../assets/images/icons/nav/chevron_right-24px.svg";
import trashcan from "../../assets/images/icons/action/delete_outline-24px.svg";
import editicon from "../../assets/images/icons/action/edit-24px.svg";
import filtericon from "../../assets/images/icons/nav/sort-default.svg";
import "./TablesWarehouses.scss";
import PrimaryButton from "../CallToActions/PrimaryButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TablesWarehouses = () => {
  return (
    <section className="warehouses">
      <header className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__header-container">
          <input
            type="search"
            name="warehouseSearch"
            className="warehouses__search"
            placeholder="Search..."
          />
          <PrimaryButton />
        </div>
      </header>
      <ul className="table-headers__list">
        <li className="table-headers__item">
          <p>WAREHOUSE</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item">
          <p>ADDRESS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact">
          <p>CONTACT NAME</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact-info">
          <p>CONTACT INFORMATION</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--action">
          <p>ACTIONS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
      </ul>

      {/* Had to rewrite entire thing. Was breaking my brain for a second */}
      <ul className="warehouses__list">
        <li className="warehouses__item">
          <div className="warehouses__info-group">
            <div className="warehouses__info-item">
              <p className="warehouses__sub-title">WAREHOUSE</p>
              <div className="link-arrow">
                <Link to="/details" className="warehouses__info warehouses__info--warehouse">
                  Manhattan
                </Link>
                <img src={chevron} alt="Enter Arrow" />
              </div>
            </div>
            <div className="warehouses__info-item">
              <p className="warehouses__sub-title">ADDRESS</p>
              <p className="warehouses__info warehouses__info--address">
                503 Broadway, New York, USA
              </p>
            </div>
            <div className="warehouses__info-item">
              <p className="warehouses__sub-title">CONTACT NAME</p>
              <p className="warehouses__info warehouses__info--name">
                Parmin Aujla
              </p>
            </div>
            <div className="warehouses__info-item">
              <p className="warehouses__sub-title">CONTACT INFORMATION</p>
              <p className="warehouses__info">+1 (629) 555-0129</p>
              <p className="warehouses__info">paujla@instock.com</p>
            </div>
            <div className="warehouses__info-item warehouses__info-item--actions">
              <img src={trashcan} alt="Delete" className="warehouses__icon" />
              <img src={editicon} alt="Edit" className="warehouses__icon" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TablesWarehouses;

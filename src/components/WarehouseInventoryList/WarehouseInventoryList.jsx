import "./WarehouseInventoryList.scss";
import chevron from "../../assets/images/icons/nav/chevron_right-24px.svg";
import trashcan from "../../assets/images/icons/action/delete_outline-24px.svg";
import editicon from "../../assets/images/icons/action/edit-24px.svg";
import filtericon from "../../assets/images/icons/nav/sort-default.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const WarehouseInventoryList = ({warehouseId}) => {
  useEffect(async()=>{
   const res= await axios.get(`http://localhost:8080/api/warehouses/:${warehouseId}/inventories`);
   console.log(res);
  },[])
  return (
    <section className="wh-inv">
      <ul className="table-headers__list">
        <li className="table-headers__item">
          <p>INVENTORY ITEM</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item">
          <p>CATEGORY</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact">
          <p>STATUS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--contact-info">
          <p>QUANTITY</p>
          <img src={filtericon} className="filter-icon" />
        </li>
        <li className="table-headers__item table-headers__item--action">
          <p>ACTIONS</p>
          <img src={filtericon} className="filter-icon" />
        </li>
      </ul>

      <ul className="wh-inv__list">
        <li className="wh-inv__item">
          <div className="wh-inv__info-group">
            <div className="wh-inv__info-item" id="inv-name">
              <p className="wh-inv__sub-title">INVENTORY ITEM</p>
              <div className="link-arrow">
                <p className="wh-inv__info wh-inv__info--inventory">
                  Television
                </p>
                <img src={chevron} alt="Enter Arrow" />
              </div>
            </div>
            <div
              className="wh-inv__info-item wh-inv__info-item--right"
              id="status"
            >
              <p className="wh-inv__sub-title" id="status">
                STATUS
              </p>
              <p className="wh-inv__info wh-inv__info--status">Active</p>
            </div>
            <div className="wh-inv__info-item" id="category">
              <p className="wh-inv__sub-title">CATEGORY</p>
              <p className="wh-inv__info wh-inv__info--name">Electronics</p>
            </div>
            <div
              className="wh-inv__info-item wh-inv__info-item--right"
              id="qty"
            >
              <p className="wh-inv__sub-title">QTY</p>
              <p className="wh-inv__info">129</p>
            </div>
            <div
              className="wh-inv__info-item wh-inv__info-item--actions"
              id="action"
            >
              <img src={trashcan} alt="Delete" className="wh-inv__icon" />
              <img src={editicon} alt="Edit" className="wh-inv__icon" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WarehouseInventoryList;

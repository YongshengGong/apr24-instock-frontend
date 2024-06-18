const WarehouseList = () => {
  return (
    <section>
      <header>
        <h1>Warehouse</h1>
        <div>
          <input type="search" name="warehouseSearch" />
          <button>+ Add New Warehouse</button>
        </div>
      </header>
      <ul>
        <li>
          Manhattan{" "}
          <img
            src="../../assets/images/icons/nav/chevron_right-24px.svg"
            alt=""
          />
        </li>
        <li>503 Broadway, New York, USA</li>
        <li>Parmin Aujla</li>
        <li>
          <div>
            <p>2057903759</p>
            <p>atay1109@gmail.com</p>
          </div>
        </li>
        <li>
          <img
            src="../../assets/images/icons/action/delete_outline-24px.svg"
            alt=""
          />{" "}
          <img src="../../assets/images/icons/action/edit-24px.svg" alt="" />
        </li>
      </ul>
    </section>
  );
};

export default WarehouseList;

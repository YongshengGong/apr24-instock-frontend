import "./QuantityField.scss";

function QuantityField({ button }) {
  return (
    <div className="item-availability__quantity-info">
      <label className="item-availability__quantity-label">
        <span className="item-availability__quantity-span">Quantity</span>
        <input
          className="item-availability__quantity"
          type="tel"
          name="quantity"
        ></input>
      </label>
    </div>
  );
}
export default QuantityField;

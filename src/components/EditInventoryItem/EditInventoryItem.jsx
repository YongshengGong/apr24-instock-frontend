import "../EditInventoryItem/EditInventoryItem.scss";

const EditInventoryItem = () => {
  return (
    <main className="edit-inventory">
      <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      <form className="edit-inventory__form">
        <div className="item-details">
          <label className="item-details__name-label">
            Item Name
            <input
              className="item-details__name"
              type="text"
              name="itemName"
              placeholder="type item name"
            ></input>
          </label>
          <label className="item-details__description-label">
            Description
            <textarea
              className="item-details__description"
              name="descrition"
              placeholder="Add a description"
            ></textarea>
          </label>
          <label className="item-details__category-label">
            Category
            <select className="item-details__category" name="category">
              <option value="">--Please choose an option--</option>
              <option value="electronics">Electronics</option>
              <option value="gear">Gear</option>
              <option value="apparel">Apparel</option>
              <option value="health">Health</option>
            </select>
          </label>
        </div>
      </form>
    </main>
  );
};

export default EditInventoryItem;

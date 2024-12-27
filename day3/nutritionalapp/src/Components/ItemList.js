import React from "react";
import "./ItemList.css";

function ItemList({ ItemList }) {
  function getItemList() {
    let itemList = ItemList.map((item) => {
      return (
        <div key={item.ID} className="ItemDetail">
          <div className="Id">{item.ID}</div>
          <div className="Name">{item.Name}</div>
          <div className="Description">{item.Desc}</div>
        </div>
      );
    });
    return itemList;
  }

  return (
    <div className="ItemTable">
      <div className="Header">
        <div className="Id">Item ID</div>
        <div className="Name">Item Name</div>
        <div className="Description">Item Description</div>
      </div>
      {getItemList()}
    </div>
  );
}

export default ItemList;

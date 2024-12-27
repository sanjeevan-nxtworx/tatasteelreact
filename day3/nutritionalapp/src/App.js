import "./App.css";
import Home from "./Components/Home";
import ItemInfo from "./Components/ItemInfo";
import ItemList from "./Components/ItemList";
import { NutritionalTable } from "./nutritionaldata";
import { useState } from "react";

function App() {
  const [itemTable, setItemTable] = useState(NutritionalTable);
  const [itemSelected, setItemSelected] = useState(0);

  const notifyToggleDisplayInfo = () => {
    let newTable = [...itemTable];
    newTable[itemSelected].displayInfo = !newTable[itemSelected].displayInfo;
    setItemTable(newTable);
  };

  const notifyAddServings = () => {
    let newTable = [...itemTable];
    newTable[itemSelected].servings++;
    setItemTable(newTable);
  };

  const notifyRemoveServings = () => {
    let newTable = [...itemTable];
    newTable[itemSelected].servings--;
    setItemTable(newTable);
  };

  const ItemSelectChange = (evt) => {
    console.log("Item Selected: ", evt.target.value);
    let idx = itemTable.findIndex(
      (item) => item.ID === parseInt(evt.target.value)
    );
    if (idx !== -1) {
      setItemSelected(idx);
    }
  };
  return (
    <div className="App">
      {/*<ItemList ItemList={itemTable} /> */}
      <div>
        <select id="itemLit" onChange={ItemSelectChange}>
          {itemTable.map((item) => {
            return (
              <option key={item.ID} value={item.ID}>
                {item.Name}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ display: "flex" }}>
        <Home
          style={{ width: "50%" }}
          ItemInfo={itemTable[itemSelected]}
          toggleDisplayInfo={notifyToggleDisplayInfo}
        />
        <div style={{ width: "50%" }}>
          {itemTable[itemSelected].displayInfo && (
            <ItemInfo
              ItemInfo={itemTable[itemSelected]}
              Servings={itemTable[itemSelected].servings}
              NotifyAdd={notifyAddServings}
              NotifyRemove={notifyRemoveServings}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

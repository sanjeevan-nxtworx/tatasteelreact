import "./ItemInfo.css";

function ItemInfo({ ItemInfo, NotifyAdd, NotifyRemove, Servings }) {
  const handleAddServings = () => {
    NotifyAdd();
  };

  const handleRemoveServings = () => {
    NotifyRemove();
  };

  return (
    <div className="component">
      <div className="dataitem">
        <label className="label">Calories</label>
        <label className="value">{ItemInfo.Calories}</label>
      </div>
      <div className="dataitem">
        <label className="label">Fat</label>
        <label className="value">{ItemInfo.Fat}</label>
      </div>
      <div className="dataitem">
        <label className="label">Protein</label>
        <label className="value">{ItemInfo.Protein}</label>
      </div>
      <div className="dataitem">
        <label className="label">Carbohydrates</label>
        <label className="value">{ItemInfo.Carbohydrates}</label>
      </div>
      <div className="dataitem">
        <label className="label">Sugar</label>
        <label className="value">{ItemInfo.Sugars}</label>
      </div>
      <div className="dataitem">
        <label className="label">Fiber</label>
        <label className="value">{ItemInfo.Fiber}</label>
      </div>
      <div className="dataitem">
        <label className="label">Cholesterol</label>
        <label className="value">{ItemInfo.Cholesterol}</label>
      </div>
      <div className="dataitem">
        <label className="label">Saturated Fats</label>
        <label className="value">{ItemInfo.SaturatedFats}</label>
      </div>
      <hr></hr>
      <div className="dataitem">
        <label className="label">Number of Servings</label>
        <button onClick={handleAddServings}>+</button>
        <label className="value">{Servings}</label>
        <button onClick={handleRemoveServings}>-</button>
      </div>
    </div>
  );
}

export default ItemInfo;

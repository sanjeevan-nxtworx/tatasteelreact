import "./Home.css";

function Home({ ItemInfo, toggleDisplayInfo }) {
  const handleToggleInfo = () => {
    toggleDisplayInfo();
  };

  let showButton = () => {
    {
      if (ItemInfo.displayInfo)
        return <button onClick={handleToggleInfo}>Hide Info</button>;
      return <button onClick={handleToggleInfo}>Show Info</button>;
    }
  };

  return (
    <div className="component">
      <h3>{ItemInfo.Name}</h3>
      <img
        className="image"
        src={"./images/" + ItemInfo.Image}
        alt={ItemInfo.Name}
      />

      <p className="description">{ItemInfo.Desc}</p>
      {showButton()}
    </div>
  );
}

export default Home;

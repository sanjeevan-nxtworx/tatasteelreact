import "./hero.css";
import { useState } from "react";

function HeroComponent() {
  const [count, setCount] = useState(0);
  let strVal = "The Count is: ";

  const handleAdd = () => {
    console.log("Before Incrementing ", count);

    if (count % 2 === 0) setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log("In ADD Handler", count);
  };

  const handleSubtract = () => {
    setCount(count - 1);
    console.log("In Subtract Handler", count);
  };

  return (
    <div className="hero">
      <p>This is the Hero Component</p>
      <p>
        {strVal}
        {count}
      </p>
      <button className="operateBtn" onClick={handleAdd}>
        Add
      </button>
      <button className="operateBtn" onClick={handleSubtract}>
        Subtract
      </button>
    </div>
  );
}

export default HeroComponent;

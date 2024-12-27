import { useReducer } from "react";

function MainUserList() {
  let initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(myreducer, initialState);

  function myreducer(state, action) {
    if (action.type === "Add") {
      return { count: state.count + action.payload };
    } else if (action.type === "Subtract") {
      return { count: state.count - action.payload };
    }
  }

  function handleCountDn() {
    dispatch({ type: "Subtract", payload: 2 });
  }

  function handleCountUp() {
    dispatch({ type: "Add", payload: 2 });
  }

  return (
    <div>
      <h3>Main User List</h3>
      <p>
        This is the Counter Value:
        <button onClick={handleCountUp}>+</button>
        {state.count}
        <button onClick={handleCountDn}>-</button>
      </p>
    </div>
  );
}

export default MainUserList;

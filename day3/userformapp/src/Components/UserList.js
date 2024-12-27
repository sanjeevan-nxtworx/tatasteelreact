import React from "react";
import "./UserList.css";

function UserList({ Users, notifyFunc, notifyFuncView }) {
  const onHandleDelete = (event, index) => {
    notifyFunc(index);
  };
  const onHandleView = (event, index) => {
    notifyFuncView(index);
  };
  return (
    <div>
      <h3>User List</h3>
      {Users.map((User, index) => {
        return (
          <div key={User.Name} className="listItem">
            <p>{User.Name}</p>
            <p>{User.Email}</p>
            <p>{User.Mobile}</p>
            <p>
              <button onClick={(event) => onHandleDelete(event, index)}>
                Delete
              </button>
              <button onClick={(event) => notifyFuncView(index)}>View</button>
              <button>Update</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;

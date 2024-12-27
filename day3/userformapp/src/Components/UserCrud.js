import "../App.css";
import UserForm from "./UserForm";
import { useState } from "react";
import UserList from "./UserList";

function UserCrud() {
  const [userCrud, setUserCrud] = useState([]);
  const [crudMode, setCrudMode] = useState(0);
  const [userFormInfo, setUserFormInfo] = useState({});

  const HandleAddUser = () => {
    setCrudMode(1);
  };

  const NotifyUserAdd = (userObj) => {
    let newUserTable = [...userCrud];

    newUserTable.push(userObj);
    setUserCrud(newUserTable);
    setCrudMode(0);
  };

  const NotifyUserDelete = (indx) => {
    let newUserTable = [...userCrud];

    newUserTable.splice(indx, 1);
    setUserCrud(newUserTable);
  };

  const NotifyUserView = (indx) => {
    console.log("In Notify User View");
    let userFormObj = userCrud[indx];
    setUserFormInfo(userFormObj);
    setCrudMode(2);
  };

  const NotifyUserViewSubmit = () => {
    setCrudMode(0);
  };

  return (
    <div className="App">
      <UserList
        Users={userCrud}
        notifyFunc={NotifyUserDelete}
        notifyFuncView={NotifyUserView}
      />
      <button onClick={HandleAddUser}>Add User</button>
      {crudMode === 1 && (
        <UserForm
          notifyFunc={NotifyUserAdd}
          UserInfo={null}
          CrudMode={crudMode}
        />
      )}
      {crudMode === 2 && (
        <UserForm
          notifyFunc={NotifyUserViewSubmit}
          UserInfo={userFormInfo}
          CrudMode={crudMode}
        />
      )}
    </div>
  );
}

export default UserCrud;

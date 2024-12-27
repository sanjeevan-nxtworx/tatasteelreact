import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ NotifyLogin }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userid: "",
    password: "",
  });

  function handleUserChange(event) {
    setUserInfo({
      ...userInfo,
      userid: event.target.value,
    });
  }

  function handlePasswordChange(event) {
    setUserInfo({
      ...userInfo,
      password: event.target.value,
    });
  }

  function handleLogin() {
    if (userInfo.userid !== "" && userInfo.password !== "") {
      NotifyLogin(true);
    } else NotifyLogin(false);
    navigate("/home");
  }

  return (
    <div>
      <div>
        <label htmlFor="user">User ID:</label>
        <input type="text" id="user" onChange={handleUserChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" onChange={handlePasswordChange} />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;

import "./App.css";
import HeroComponent from "./Components/hero";
import UserDetails from "./Components/UserDetails";
import { useState } from "react";
import UserDetailsProps from "./Components/UserDetailsProps";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Ganesh Patel",
    email: "gpatel@abc.com",
    password: "patelgang",
    telno: "98474674873",
  });

  const notifyNameChange = (newValue) => {
    setUserInfo({
      ...userInfo,
      name: newValue,
    });
  };

  const notifyEmailChange = (newValue) => {
    setUserInfo({
      ...userInfo,
      email: newValue,
    });
  };
  const notifyPasswordChange = (newValue) => {
    setUserInfo({
      ...userInfo,
      password: newValue,
    });
  };

  const notifyTelNoChange = (newValue) => {
    setUserInfo({
      ...userInfo,
      telno: newValue,
    });
  };

  return (
    <div className="App">
      {/*   <p>Hello World from React</p>
      <HeroComponent /> */}
      <UserDetailsProps
        userinfo={userInfo}
        notifyNameChange={notifyNameChange}
        notifyEmailChange={notifyEmailChange}
        notifyPasswordChange={notifyPasswordChange}
        notifyTelNoChange={notifyTelNoChange}
      />
    </div>
  );
}

export default App;

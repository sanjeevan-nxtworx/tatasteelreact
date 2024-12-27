import "./App.css";
import { useState } from "react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./Components/mainpage";
import MyContext from "./Store/context";

function App() {
  const [loginFlg, setLoginFlg] = useState(false);
  function notifyLogin(flg) {
    setLoginFlg(flg);
    console.log("Setting Login Flg ", flg);
  }

  function logout() {
    setLoginFlg(false);
  }

  return (
    <MyContext.Provider
      value={{
        IsLogin: loginFlg,
        LogoutFn: logout,
      }}
    >
      <BrowserRouter>
        <div>
          {!loginFlg && <Login NotifyLogin={notifyLogin} />}
          <MainPage />
          {loginFlg && <button onClick={logout}>Logout</button>}
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;

import "../App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCrud from "./UserCrud";
import Home from "./Home";
import MainUserList from "./MainUserList";
import Contacts from "./Contacts";
import ErrorPage from "../ErrorPage";
import NavBar from "./NavBar";
import Login from "../Login";
import Item from "./Item";
import App from "../App";
import Logout from "./Logout";

function MainPage() {
  const [userName, setUserName] = useState("Rajesh");
  const [userID, setUserID] = useState(10001);

  return (
    <div>
      <NavBar Name={userName} ID={userID} />
      <Item />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts/:name/:id" element={<Contacts />} />
        <Route path="/userlist" element={<MainUserList />} />
        <Route path="/usercrud" element={<UserCrud />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage Page />} />
      </Routes>
    </div>
  );
}

export default MainPage;

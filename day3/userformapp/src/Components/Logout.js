import React, { useContext, useEffect } from "react";
import MyContext from "../Store/context";

function Logout() {
  const ctx = useContext(MyContext);

  useEffect(() => {
    console.log("In Logout Context: ", ctx);
    ctx.LogoutFn();
  }, []);
  return <div>Logout</div>;
}

export default Logout;

import React, { useEffect } from "react";
import { useContext } from "react";
import MyContext from "../Store/context";
import { useNavigate } from "react-router-dom";

function Home() {
  const ctx = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ctx.IsLogin) {
      console.log("IN CONTEXT CHECK ", ctx);
      navigate("/");
    }
  }, [ctx.IsLogin]);

  return (
    <div>
      {ctx.IsLogin && (
        <div>
          <h3>Home Page</h3>
          <p>This my Home Page</p>
        </div>
      )}
    </div>
  );
}

export default Home;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Contacts() {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  let { name, id } = useParams();
  return (
    <div>
      <h3>Contacts Page</h3>
      <p>
        This is Contact Page for {name} having id {id}
      </p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Contacts;

import { React, useState } from "react";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({
    name: "Harish Tiwari",
    email: "Harish@abc.com",
    password: "Harish",
  });

  const handleNameChange = (evt) => {
    setUserDetails({
      ...userDetails,
      name: evt.target.value,
    });
  };

  const handleEmailChange = (evt) => {
    setUserDetails({
      ...userDetails,
      email: evt.target.value,
    });
  };
  const handlePasswordChange = (evt) => {
    setUserDetails({
      ...userDetails,
      password: evt.target.value,
    });
  };
  return (
    <div className="UserDetails">
      <h3>User Details Page</h3>
      <div className="datarow">
        <label className="inline-block label" htmlFor="id">
          User Name
        </label>
        <input
          className="inline-block input-type"
          id="id"
          type="text"
          value={userDetails.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="datarow">
        <label className="inline-block label" htmlFor="email">
          Email
        </label>
        <input
          className="inline-block input-type"
          id="email"
          type="text"
          value={userDetails.email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="datarow">
        <label className="inline-block label" htmlFor="password">
          Password
        </label>
        <input
          className="inline-block input-type"
          id="password"
          type="text"
          value={userDetails.password}
          onChange={handlePasswordChange}
        />
      </div>
    </div>
  );
}

export default UserDetails;

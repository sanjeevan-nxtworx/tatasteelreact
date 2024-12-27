import { React, useState } from "react";

function UserDetailsProps({
  userinfo,
  notifyNameChange,
  notifyEmailChange,
  notifyPasswordChange,
  notifyTelNoChange,
}) {
  function onChangeName(evt) {
    notifyNameChange(evt.target.value);
  }

  function onChangeEmail(evt) {
    notifyEmailChange(evt.target.value);
  }
  function onChangePassword(evt) {
    notifyPasswordChange(evt.target.value);
  }

  function onChangeTelNo(evt) {
    notifyTelNoChange(evt.target.value);
  }

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
          value={userinfo.name}
          onChange={onChangeName}
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
          value={userinfo.email}
          onChange={onChangeEmail}
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
          value={userinfo.password}
          onChange={onChangePassword}
        />
      </div>
      <div className="datarow">
        <label className="inline-block label" htmlFor="telno">
          Tel No
        </label>
        <input
          className="inline-block input-type"
          id="telno"
          type="text"
          value={userinfo.telno}
          onChange={onChangeTelNo}
        />
      </div>
    </div>
  );
}

export default UserDetailsProps;

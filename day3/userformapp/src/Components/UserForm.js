import React from "react";
import "./UserForm.css";
import { useState, useEffect } from "react";

function UserForm({ notifyFunc, UserInfo, CrudMode }) {
  const [userForm, setUserForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    Gender: "",
    Mobile: "",
    Address: "",
  });

  useEffect(() => {
    console.log("Use Effect");
    if (UserInfo !== null) setUserForm(UserInfo);
  }, [UserInfo]);

  function submitForm(event) {
    event.preventDefault();
    console.log(userForm);
    notifyFunc(userForm);
    console.log(event);
  }

  function onInputChange(event) {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  }

  function onInputDateChange(event) {
    setUserForm({
      ...userForm,
      [event.target.name]: new Date(event.target.value),
    });
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <h3>User Registration Form</h3>
      <div className="form-element">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="Name"
          required
          value={userForm.Name}
          onChange={onInputChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="Email"
          value={userForm.Email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="Password"
          onChange={onInputChange}
          maxLength={8}
          value={userForm.Password}
        />
      </div>
      <div className="form-element display-flex">
        <label>Gender: </label>
        <div className="group-element">
          <label htmlFor="male">
            Male:
            <input type="radio" id="male" name="gender" value="male" />
          </label>
        </div>
        <div className="group-element">
          <label htmlFor="female">
            Female:
            <input type="radio" id="female" name="gender" value="female" />
          </label>
        </div>
        <div className="group-element">
          <label htmlFor="other">
            Other:
            <input type="radio" id="other" name="gender" value="other" />
          </label>
        </div>
      </div>
      <div className="form-element">
        <label htmlFor="mobile">Mobile: </label>
        <input
          type="tel"
          id="mobile"
          name="Mobile"
          value={userForm.Mobile}
          onChange={onInputChange}
        />
      </div>
      <div className="form-element">
        <label htmlFor="address">Address: </label>
        <textarea
          id="address"
          name="Address"
          cols={60}
          rows={5}
          value={userForm.Address}
          onChange={onInputChange}
        ></textarea>
      </div>

      <div className="form-element display-flex">
        <input className="button" type="submit" value="Submit Form" />
        <input className="button" type="reset" value="Reset Form" />
      </div>
    </form>
  );
}

export default UserForm;

import React, { useState } from "react";
import "./lgin.scss";
const Login = () => {
  const url = "";

  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handle = (event) => {
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <section className="login">
      <div className="login_container">
        <h1>Bibliolater</h1>
        <div className="login_form-contianer">
          <form className="login_form">
            <div className="login_input-container">
              {" "}
              <label for="name" className="form_label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(event) => handle(event)}
                id="name"
                value={data.name}
                className="form_input"
              />
            </div>
            <div className="login_input-container">
              <label for="username" className="form_label">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => handle(event)}
                id="username"
                value={data.username}
                className="form_input"
              />
            </div>
            <div className="login_input-container">
              <label for="password" className="form_label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => handle(event)}
                id="password"
                value={data.password}
                className="form_input"
              />
            </div>

            <button className="bg-gray-500">Submit Form</button>
          </form>
          ;
        </div>
      </div>
    </section>
  );
};

export default Login;

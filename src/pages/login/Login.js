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
          <form className>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(event) => handle(event)}
              id="name"
              value={data.name}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(event) => handle(event)}
              id="username"
              value={data.username}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => handle(event)}
              id="password"
              value={data.password}
            />
            <button className="bg-gray-500">Submit Form</button>
          </form>
          ;
        </div>
      </div>
    </section>
  );
};

export default Login;

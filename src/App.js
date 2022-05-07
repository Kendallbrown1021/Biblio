import React, { useState } from "react";
import "./App.scss";
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const LogUser = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        {loggedIn === true ? (
          <p>USER</p>
        ) : (
          <Link to="/login" onClick={LogUser}>
            Login
          </Link>
        )}
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

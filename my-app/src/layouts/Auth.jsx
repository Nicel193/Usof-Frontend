import React, { useState, useEffect } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { useLocation } from "react-router-dom";

import "./styles/Auth.scss";

const Auth = () => {
  const location = useLocation();
  const state = new URLSearchParams(location.search).get("state");
  const [activeTab, setActiveTab] = useState(false);

  useEffect(() => {
    setActiveTab(state === "login");
  }, []);

  function setTab() {
    setActiveTab(!activeTab);
  }

  return (
    <div className="authStyle">
      <div className={`container ${activeTab ? "active" : ""}`}>
        <div className="forms">
          <Login />
          <Register />
        </div>

        <div className="login-signup">
          <span className="text">
            {(!activeTab ? "Not a member?" : "Already a member?") + "|"}
            <span className="text signup-link" onClick={setTab}>
              {!activeTab ? "Register now" : "Login now"}
            </span>
          </span>
          <br /> <br />
          <span className="text">Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Auth;

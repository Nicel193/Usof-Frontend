import React, { useState } from "react";
import {
  UilUser,
  UilLock,
  UilEyeSlash,
  UilEnvelope,
} from "@iconscout/react-unicons"; // Подключение иконок из вашей библиотеки

import "./Auth.scss";

const Auth = () => {
  const [activeTab, setActiveTab] = useState(false);

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const setTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <div className={`container ${activeTab ? "active" : ""}`}>
      <div className="forms">
        <div className="form login">
          <span className="title">Login</span>
          <form action="#">
            <div className="input-field">
              <input
                type="text"
                id="loginName"
                placeholder="Enter your login"
                required
              />
              <UilUser className="uil uil-user" />
            </div>
            <div className="input-field">
              <input
                type="password"
                className="password"
                id="loginPassword"
                placeholder="Enter your password"
                required
              />
              <UilLock className="uil uil-lock icon" />
            </div>
            <div className="input-field button">
              <input type="button" id="loginButton" value="Login" />
            </div>
          </form>
          <div className="login-signup">
            <span className="text">
              Not a member?
              <a href="#" className="text signup-link" onClick={setTab}>
                Signup Now
              </a>
            </span>
          </div>
        </div>

        <div className="form signup">
          <span className="title">Registration</span>
          <form action="#">
            <div className="input-field">
              <input
                type="text"
                id="name"
                placeholder="Enter your login"
                required
              />
              <UilUser className="uil" />
            </div>
            <div className="input-field">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
              <UilUser className="uil" />
            </div>
            <div className="input-field">
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                required
              />
              <UilEnvelope className="uil uil-envelope icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Create a password"
                required
              />
              <UilLock className="uil uil-lock icon" />
            </div>
            <div className="input-field">
              <input
                type="password"
                id="confirmPassword"
                className="password"
                placeholder="Confirm a password"
                required
              />
              <UilLock className="uil uil-lock icon" />
            </div>
            <div className="input-field button">
              <input type="button" value="Signup" />
            </div>
          </form>
          <div className="login-signup">
            <span className="text">
              Already a member?
              <a href="#" className="text login-link" onClick={setTab}>
                Login Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

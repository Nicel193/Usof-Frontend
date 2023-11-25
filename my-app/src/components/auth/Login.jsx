import React, { useState } from "react";
import { UilUser, UilLock } from "@iconscout/react-unicons";
import { login } from "../../api/auth";

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  async function loginUser() {
    await login(user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        // dispatch({ type: "LOG_IN" });
        localStorage.setItem("isAuth", "true");
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  }

  return (
    <div className="form login">
      <span className="title">Login</span>
      <form action="#">
        <div className="input-field">
          <input
            type="text"
            id="loginName"
            placeholder="Enter your login"
            onChange={(e) => setUser({ ...user, login: e.target.value })}
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
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
            required
          />
          <UilLock className="uil uil-lock icon" />
        </div>
        <div className="input-field button">
          <input
            type="button"
            id="loginButton"
            onClick={loginUser}
            value="Login"
          />
        </div>
      </form>
      <div className="login-signup">
        <span className="text">
          Not a member?
          {/* <a href="#" className="text signup-link" onClick={setTab}> */}
          {/* Signup Now */}
          {/* </a> */}
        </span>
      </div>
    </div>
  );
};

export default Login;

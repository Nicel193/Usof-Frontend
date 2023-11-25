import React, { useState } from "react";
import { UilUser, UilLock } from "@iconscout/react-unicons";
import { login } from "../../api/auth";
import checkAuth from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../../store/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.authorizationStatus);
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  function successfulAuth() {
    dispatch(changeAuth(true));
    localStorage.setItem("isAuth", "true");
  }

  useState(() => {
    if (localStorage.getItem("token")) {
      checkAuth().then((res) => {
        if (res) successfulAuth();
      });
    }
  }, []);

  async function loginUser() {
    await login(user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        successfulAuth();
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  }

  if (isAuth) {
    return <Navigate to={"/"} />;
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
    </div>
  );
};

export default Login;

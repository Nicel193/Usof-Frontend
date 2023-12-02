import React, { useState } from "react";
import { UilUser, UilLock } from "@iconscout/react-unicons";
import { login } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const [userAuthData, setUserAuthData] = useState({});
  const [error, setError] = useState("");

  async function loginUser() {
    await login(userAuthData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        dispatch(setUser(response.data));
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
            onChange={(e) =>
              setUserAuthData({ ...userAuthData, login: e.target.value })
            }
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
            onChange={(e) =>
              setUserAuthData({ ...userAuthData, pass: e.target.value })
            }
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

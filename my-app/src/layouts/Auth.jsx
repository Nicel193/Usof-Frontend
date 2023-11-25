import React, { useState } from "react";
import { UilUser, UilLock } from "@iconscout/react-unicons";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

import "./styles/Auth.scss";

const Auth = () => {
  const [activeTab, setActiveTab] = useState(false);

  const setTab = () => {
    setActiveTab(!activeTab);
  };

  return (
    <div className={`container ${activeTab ? "active" : ""}`}>
      <div className="forms">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default Auth;

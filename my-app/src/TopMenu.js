import React from "react";

const TopMenu = ({ username, logoUrl }) => {
  return (
    <div className="top-menu">
      <div className="user-info">
        <span>{username}</span>
      </div>
      <div className="logo">
        <img src={logoUrl} alt="Логотип" />
      </div>
    </div>
  );
};

export default TopMenu;

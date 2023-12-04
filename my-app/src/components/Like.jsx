import React from "react";
import "./styles/ActionContainer.scss"

import { UilThumbsUp, UilThumbsDown } from "@iconscout/react-unicons";

const LikeField = ({ selectedLikeType, setLike, grade }) => {
  function getLikeClassName(iconLikeType) {
    let className = "icon";
    if (selectedLikeType === iconLikeType) className += " selected-icon";

    return className;
  }

  return (
    <div>
      <div className="flex-center action-container">
        <button className="transparent-button" onClick={() => setLike("like")}>
          <UilThumbsUp className={getLikeClassName("like")} />
        </button>
        <button
          className="transparent-button"
          onClick={() => setLike("dislike")}
        >
          <UilThumbsDown className={getLikeClassName("dislike")} />
        </button>
        <span>{grade}</span>
      </div>
    </div>
  );
};

export default LikeField;

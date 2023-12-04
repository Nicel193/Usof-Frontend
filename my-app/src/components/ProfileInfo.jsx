import React from "react";

import { UilAt } from "@iconscout/react-unicons";
import { UilAdjustHalf } from "@iconscout/react-unicons";

import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const userData = useSelector((state) => state.auth.userData);

  if (!userData) {
    return null;
  }

  return (
    <div className="profile">
      <div className="cover">
        <img
          width={55}
          height={55}
          src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          alt="Avatar"
        />
      </div>
      <div className="info">
        <span>{userData.fullName}</span>
        <span className="login">{`@${userData.login}`}</span>

        <div className="additionalInfo">
          <div className="flex-center">
            <UilAt size={18} />
            <span>
              <u>{userData.email}</u>
            </span>
          </div>
          <div className=" flex-center">
            <UilAdjustHalf size={18} />
            <span>{`Karma: ${userData.rating}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

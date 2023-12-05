import React from "react";

import { UilAt } from "@iconscout/react-unicons";
import { UilAdjustHalf } from "@iconscout/react-unicons";

import { useAuth } from "../hooks/useAuth";
import { useUserAvatar } from "../hooks/useUserAvatar";

const ProfileInfo = () => {
  const { userData, userId } = useAuth();
  const { avatar } = useUserAvatar(userId);

  if (!userData) {
    return null;
  }

  return (
    <div className="profile">
      <div className="cover">
        <img width={55} height={55} src={avatar} alt="Avatar" />
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

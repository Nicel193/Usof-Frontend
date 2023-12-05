import React from "react";

import { UilAt } from "@iconscout/react-unicons";
import { UilAdjustHalf } from "@iconscout/react-unicons";

import { useAuth } from "../hooks/useAuth";
import { useUserAvatar } from "../hooks/useUserAvatar";

import UpdateUserProfile from "../components/tools/UpdateUserProfile";

const ProfileInfo = () => {
  const { userData, userId } = useAuth();
  const { avatar } = useUserAvatar(userId);

  console.log(avatar);

  if (!userData) {
    return null;
  }

  return (
    <div className="profile">
      <div className="cover">
        <img width={55} height={55} src={avatar} alt="Avatar" />
      </div>
      <div className="info">
        <div className="d-flex">
          <span className="authorInfo">{userData.fullName}</span>
          <UpdateUserProfile/>
        </div>
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

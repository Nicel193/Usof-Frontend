import "./styles/Profile.scss";

import React, { useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";

import { UilPlus } from "@iconscout/react-unicons";
import { UilAt } from "@iconscout/react-unicons";
import { UilAdjustHalf } from "@iconscout/react-unicons";

const Profile = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="postContent">
          <div className="newPost">
            <input placeholder="Title"></input>
            <textarea rows="4" cols="50" placeholder="Contetent"></textarea>
            <div className="categories">
              <button className="category">
                <UilPlus />
                <span>Animals</span>
              </button>
            </div>
          </div>
          <button className="postButton">Post</button>
          <span className="yourPostsText">Your Posts</span>
          <div class="underline"></div>

          <Post />
          <Post />
          <Post />
        </div>

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
            <span>Kukuiev Ruslan</span>
            <span className="login">@Nicel</span>

            <div className="additionalInfo">
              <div className="flex-center">
                <UilAt size={18}/>
                <span>
                  <u>nicelgoog@gmail.com</u>
                </span>
              </div>
              <div className=" flex-center">
                <UilAdjustHalf size={18}/>
                <span>Karma: 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};

export default Profile;

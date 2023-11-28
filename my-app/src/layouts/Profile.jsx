import "./styles/Profile.scss";

import { UilPlus } from "@iconscout/react-unicons";

import React, { useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";

import ProfileInfo from "../components/ProfileInfo";

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
        <ProfileInfo />
      </section>
      <footer></footer>
    </div>
  );
};

export default Profile;

import "./styles/Profile.scss";

import { UilPlus } from "@iconscout/react-unicons";

import React, { useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";

import ProfileInfo from "../components/ProfileInfo";

import { createPost } from "../api/createPost";

const Profile = () => {
  const [post, setPost] = useState({ title: "", content: "", categories: [2] });

  async function shareNewPost() {
    await createPost(post)
      .then((response) => {
        console.log(response);
        setPost({ title: "", content: "", categories: [2] });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Header />
      <section>
        <div className="postContent">
          <div className="newPost">
            <input
              value={post ? post.title : ""}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Title"
            ></input>
            <textarea
              value={post ? post.content : ""}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              rows="4"
              cols="50"
              placeholder="Contetent"
            ></textarea>
            <div className="categories">
              <button className="category">
                <UilPlus />
                <span>Animals</span>
              </button>
            </div>
          </div>
          <button className="postButton" onClick={shareNewPost}>
            Post
          </button>
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

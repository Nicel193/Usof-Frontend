import "./styles/Profile.scss";

import { UilPlus } from "@iconscout/react-unicons";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/Post";

import ProfileInfo from "../components/ProfileInfo";

import { useSelector } from "react-redux";
import { createPost } from "../api/createPost";
import { useSearchParams } from "react-router-dom";
import { getPostsByUserId } from "../api/getPosts";

const Profile = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [shouldFetchPosts, setShouldFetchPosts] = useState(true);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "", categories: [2] });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
    async function fetchData() {
      if (!userData) return;

      const response = await getPostsByUserId(
        userData.id,
        searchParams.toString()
      );
      console.log(response);
      setPosts(response.data);
    }
    
    fetchData()
      .then()
      .catch((e) => console.log(e));

    setShouldFetchPosts(false);
    
    //eslint-disable-next-line
  }, [userData, searchParams, shouldFetchPosts]);

  async function shareNewPost() {
    await createPost(post)
      .then((response) => {
        console.log(response);
        setPost({ title: "", content: "", categories: [2] });
        setShouldFetchPosts(true);
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
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                authorLogin={post.authorLogin}
                title={post.title}
                content={post.content}
                categories={post.categories}
                publishDate={post.publishDate}
              />
            ))
          ) : (
            <div style={{ fontSize: "32px" }}>Posts not found</div>
          )}
        </div>
        <ProfileInfo />
      </section>
      <footer></footer>
    </div>
  );
};

export default Profile;

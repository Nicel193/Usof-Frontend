import "./styles/Profile.scss";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";

import ProfileInfo from "../components/ProfileInfo";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getPostsByUserId } from "../api/getPosts";
import WriteblePostField from "../components/post/WriteblePostField";

const Profile = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [shouldUpdatePosts, setShouldUpdatePosts] = useState(true);
  const [posts, setPosts] = useState([]);
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

    setShouldUpdatePosts(false);

    //eslint-disable-next-line
  }, [userData, searchParams, shouldUpdatePosts]);

  return (
    <div>
      <Header />
      <section>
        <div className="postContent">
        <WriteblePostField setShouldUpdatePosts={setShouldUpdatePosts} />
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

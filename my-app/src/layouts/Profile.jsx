import "./styles/Profile.scss";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";

import ProfileInfo from "../components/ProfileInfo";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getPostsByUserId } from "../api/getPosts";
import WriteblePostField from "../components/post/WriteblePostField";
import PageList from "../components/PageList";
import { deletePostById } from "../api/createPost";

const Profile = () => {
  const userData = useSelector((state) => state.auth.userData);

  const [shouldUpdatePosts, setShouldUpdatePosts] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const [editablePost, setEditPost] = useState(undefined);
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

      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    }

    fetchData()
      .then()
      .catch((e) => console.log(e));

    setShouldUpdatePosts(false);

    //eslint-disable-next-line
  }, [userData, searchParams, shouldUpdatePosts]);

  async function deletePost(postId) {
    await deletePostById(postId)
      .then(() => setShouldUpdatePosts(true))
      .catch((e) => console.log(e));
  }

  function editPost(post) {
    setEditPost(post);
  }

  return (
    <div>
      <Header />
      <section>
        <div className="postContent">
          <WriteblePostField
            editPost={editablePost}
            setShouldUpdatePosts={setShouldUpdatePosts}
          />
          <span className="yourPostsText">Your Posts</span>
          <div class="underline"></div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div>
                <Post
                  postId={post.id}
                  authorLogin={post.authorLogin}
                  title={post.title}
                  content={post.content}
                  categories={post.categories}
                  publishDate={post.publishDate}
                />
                <button onClick={() => deletePost(post.id)}>Delete</button>
                <button onClick={() => editPost(post)}>Edit</button>
              </div>
            ))
          ) : (
            <div style={{ fontSize: "32px" }}>Posts not found</div>
          )}
          <PageList postsLength={posts.length} totalPages={totalPages} />
        </div>
        <ProfileInfo />
      </section>
      <footer></footer>
    </div>
  );
};

export default Profile;

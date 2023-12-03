import "./styles/Comment.scss";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";
import { useParams } from "react-router-dom";
import { getPostById, getPostsByUserId } from "../api/getPosts";
import ProfileInfo from "../components/ProfileInfo";
import WritebleCommentField from "../components/WritebleCommentField";
import {
  UilThumbsUp,
  UilThumbsDown,
  UilCommentLines,
} from "@iconscout/react-unicons";

const Profile = () => {
  const [post, setPost] = useState(undefined);

  const { postId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await getPostById(postId);

      setPost(response.data);
    }

    fetchData()
      .then()
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, [postId]);

  return (
    <div>
      <Header />
      <section>
        <div className="commentsContent">
          {post && (
            <Post
              postId={post.id}
              authorLogin={post.authorLogin}
              title={post.title}
              content={post.content}
              categories={post.categories}
              publishDate={post.publishDate}
            />
          )}
          <div className="writebleCommentField"></div>
          <WritebleCommentField />
          <span className="centerText">Comments</span>
          <div class="underline"></div>

          <div className="comment">
            <div class="flex-center">
              <img
                width={30}
                height={30}
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="AutorIcon"
              />
              <span>@Tester </span>
              <span> • </span>
              <span className="publishDate">05.05.2033</span>
            </div>
            <span className="content">Testick</span>

            <div></div>
            <div className="flex-center action-container">
              <button
                className="transparent-button"
                // onClick={() => setLike("like")}
              >
                <UilThumbsUp className="icon" />
              </button>
              <button
                className="transparent-button"
                // onClick={() => setLike("dislike")}
              >
                <UilThumbsDown className="icon" />
              </button>
              <span>5</span>
            </div>
          </div>

          <div className="comment">
            <div class="flex-center">
              <img
                width={30}
                height={30}
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="AutorIcon"
              />
              <span>@Tester </span>
              <span> • </span>
              <span className="publishDate">05.05.2033</span>
            </div>
            <span className="content">Testick</span>

            <div></div>
            <div className="flex-center action-container">
              <button
                className="transparent-button"
                // onClick={() => setLike("like")}
              >
                <UilThumbsUp className="icon" />
              </button>
              <button
                className="transparent-button"
                // onClick={() => setLike("dislike")}
              >
                <UilThumbsDown className="icon" />
              </button>
              <span>5</span>
            </div>
          </div>

          <div className="comment">
            <div class="flex-center">
              <img
                width={30}
                height={30}
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="AutorIcon"
              />
              <span>@Tester </span>
              <span> • </span>
              <span className="publishDate">05.05.2033</span>
            </div>
            <span className="content">Testick</span>

            <div></div>
            <div className="flex-center action-container">
              <button
                className="transparent-button"
                // onClick={() => setLike("like")}
              >
                <UilThumbsUp className="icon" />
              </button>
              <button
                className="transparent-button"
                // onClick={() => setLike("dislike")}
              >
                <UilThumbsDown className="icon" />
              </button>
              <span>5</span>
            </div>
          </div>
        </div>
        <ProfileInfo />
      </section>
      <footer></footer>
    </div>
  );
};

export default Profile;

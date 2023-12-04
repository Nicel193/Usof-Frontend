import "./styles/Comment.scss";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/getPosts";
import ProfileInfo from "../components/ProfileInfo";
import WritebleCommentField from "../components/comment/WritebleCommentField";
import Comment from "../components/comment/Comment";
import { UilThumbsUp, UilThumbsDown } from "@iconscout/react-unicons";
import { getCommentsByPost } from "../api/comment";

const Comments = () => {
  const { postId } = useParams();

  const [shouldUpdateComment, setShouldUpdateComment] = useState(true);
  const [post, setPost] = useState(undefined);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPostData() {
      const response = await getPostById(postId);

      setPost(response.data);
    }

    fetchPostData()
      .then()
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function fetchCommentsData() {
      const response = await getCommentsByPost(postId);

      setComments(response.data);
      setShouldUpdateComment(false);
    }

    fetchCommentsData()
      .then()
      .catch((e) => console.log(e));

    //eslint-disable-next-line
  }, [postId, shouldUpdateComment]);

  return (
    <div>
      <Header />
      <section>
        <div className="commentsContent">
          {post && (
            <>
              <Post
                postId={post.id}
                authorLogin={post.authorLogin}
                title={post.title}
                content={post.content}
                categories={post.categories}
                publishDate={post.publishDate}
              />
              <WritebleCommentField idPost={post.id}
              setShouldUpdateComment={setShouldUpdateComment} />
            </>
          )}
          <span className="centerText">Comments</span>
          <div class="underline"></div>

          {comments.length > 0 ? (
            comments.map((comment) => (
              <Comment
                commentId={comment.id}
                authorLogin={comment.loginOwner}
                content={comment.content}
                publishDate={comment.date}
              />
            ))
          ) : (
            <div className="centerText" style={{ fontSize: "32px" }}>
              Comments not found
            </div>
          )}
        </div>
        <ProfileInfo />
      </section>
      <footer></footer>
    </div>
  );
};

export default Comments;
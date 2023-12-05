import "../styles/Post.scss";
import React, { useEffect, useState } from "react";

import { UilCommentLines } from "@iconscout/react-unicons";

import { deletePostLike, getPostLikes, setPostLike } from "../../api/like";
import { Link } from "react-router-dom";
import { formatDate } from "../../services/dateFormater";
import { useLikes } from "../../hooks/useLikes";
import { useComments } from "../../hooks/useComments";

import LikeField from "../Like";
import UpdateTools from "../UpdateTools";
import { getUserPicture } from "../../services/profilePictureService";

const Post = ({
  postId,
  authorLogin,
  publishDate,
  categories,
  content,
  title,
  post,
}) => {
  const [isDeleted, setDeleted] = useState(false);
  const [authorPicture, setAuthorPicture] = useState("");

  const { commentsCount } = useComments(postId);
  const { selectedLikeType, grade, setLike } = useLikes(
    getPostLikes,
    deletePostLike,
    setPostLike,
    postId
  );

  useEffect(() => {
    setDeleted(false);

    getUserPicture(post.authorId).then((res) => {
      setAuthorPicture(res);
    });
  }, [postId]);

  useEffect(() => {}, []);

  function getParsCategories(categories) {
    const wordsArray = categories.split(", ");
    const wordsWithHash = wordsArray.map((word) => `#${word}`);

    return wordsWithHash.join(" ");
  }

  return (
    <div className="post">
      {!isDeleted ? (
        <>
          <div class="flex-center">
            <div className="authorInfo">
              <img width={47} height={47} src={authorPicture} alt="AutorIcon" />
              <span>{`@${authorLogin}`}</span>
              <span> • </span>
              <span className="publishDate">{formatDate(publishDate)}</span>
            </div>

            <UpdateTools
              authorLogin={authorLogin}
              post={post}
              isDeleted={isDeleted}
              setDeleted={setDeleted}
            />
          </div>
          <h4>{`"${title}"`}</h4>
          <span>{`${content} ${getParsCategories(categories)}`}</span>
          <div></div>
          <div className="d-flex">
            <LikeField
              selectedLikeType={selectedLikeType}
              setLike={setLike}
              grade={grade}
            />
            <Link
              to={`/comments/${postId}`}
              className="text-link flex-center action-container commentIcon"
            >
              <UilCommentLines className="icon" />
              <span>{commentsCount}</span>
            </Link>
          </div>
        </>
      ) : (
        <span className="centerText">The post has been deleted</span>
      )}
    </div>
  );
};

export default Post;

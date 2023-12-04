import "../styles/Post.scss";
import React from "react";

import { UilCommentLines } from "@iconscout/react-unicons";
import { deletePostLike, getPostLikes, setPostLike } from "../../api/like";
import { Link } from "react-router-dom";
import { formatDate } from "../../services/dateFormater";
import LikeField from "../Like";
import { useLikes } from "../../hooks/useLikes";

const Post = ({
  postId,
  authorLogin,
  publishDate,
  categories,
  content,
  title,
}) => {
  const { selectedLikeType, grade, setLike } = useLikes(
    getPostLikes,
    deletePostLike,
    setPostLike,
    postId
  );

  function getParsCategories(categories) {
    const wordsArray = categories.split(", ");
    const wordsWithHash = wordsArray.map((word) => `#${word}`);

    return wordsWithHash.join(" ");
  }

  return (
    <div className="post">
      <div class="flex-center">
        <img
          width={47}
          height={47}
          src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          alt="AutorIcon"
        />
        <span>{`@${authorLogin}`}</span>
        <span> • </span>
        <span className="publishDate">{formatDate(publishDate)}</span>
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
          <span>2</span>
        </Link>
      </div>
    </div>
  );
};

export default Post;

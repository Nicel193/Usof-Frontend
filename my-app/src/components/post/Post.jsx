import "../Post.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  UilThumbsUp,
  UilThumbsDown,
  UilCommentLines,
} from "@iconscout/react-unicons";
import { deletePostLike, getPostLikes, setPostLike } from "../../api/like";
import { Link } from "react-router-dom";
import { formatDate } from "../../services/dateFormater";

const Post = (props) => {
  const { postId } = props;
  const [postGrade, setPostGrade] = useState(0);
  const [likeType, setLikeType] = useState("");

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    async function fetchLikesData() {
      const response = await getPostLikes(postId);
      const likes = response.data.likes;
      const dislikes = response.data.dislikes;

      setPostGrade(likes.length - dislikes.length);

      if (userData) {
        const userGrade = [...likes, ...dislikes].filter(
          (like) => like.login === userData.login
        );

        setLikeType(userGrade[0] ? userGrade[0].likeType : "");
      }
    }

    fetchLikesData()
      .then()
      .catch((e) => console.log(e));
  }, [postId, likeType]);

  function setLike(type) {
    if (likeType === type) {
      deletePostLike(postId)
        .then(() => {
          setLikeType("");
        })
        .catch((e) => console.log(e));

      return;
    }

    setPostLike(postId, type)
      .then(() => {
        setLikeType(type);
      })
      .catch((e) => console.log(e));
  }

  function getLikeClassName(iconLikeType) {
    let className = "icon";
    if (likeType === iconLikeType) className += " selected-icon";

    return className;
  }

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
        <span>{`@${props.authorLogin}`}</span>
        <span> • </span>
        <span className="publishDate">
          {formatDate(props.publishDate)}
        </span>
      </div>
      <h4>{`"${props.title}"`}</h4>
      <span>{`${props.content} ${getParsCategories(props.categories)}`}</span>
      <div></div>
      <div className="flex-center action-container">
        <button className="transparent-button" onClick={() => setLike("like")}>
          <UilThumbsUp className={getLikeClassName("like")} />
        </button>
        <button
          className="transparent-button"
          onClick={() => setLike("dislike")}
        >
          <UilThumbsDown className={getLikeClassName("dislike")} />
        </button>
        <span>{postGrade}</span>
      </div>
      <Link
        to={`/comments/${postId}`}
        className="text-link flex-center action-container comment"
      >
        <UilCommentLines className="icon" />
        <span>2</span>
      </Link>
    </div>
  );
};

export default Post;

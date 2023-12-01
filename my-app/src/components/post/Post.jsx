import "../Post.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { UilThumbsUp } from "@iconscout/react-unicons";
import { UilThumbsDown } from "@iconscout/react-unicons";
import { UilCommentLines } from "@iconscout/react-unicons";
import { deletePostLike, getPostLikes, setPostLike } from "../../api/like";

const Post = (props) => {
  const { postId } = props;

  const [postGrade, setPostGrade] = useState(0);
  const [likeType, setLikeType] = useState("");
  const [userGrade, setUserGrade] = useState(null);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    async function fetchLikesData() {
      const response = await getPostLikes(postId);
      const likes = response.data.likes;
      const dislikes = response.data.dislikes;
      const userGrade = [...likes, ...dislikes].filter((like) => like.login === userData.login);

      setPostGrade(likes.length - dislikes.length);
      setUserGrade(userGrade[0]);
    }

    fetchLikesData()
      .then()
      .catch((e) => console.log(e));
  }, [likeType]);

  function setLike(type) {
    if (likeType === type) {
      deletePostLike(postId)
        .then(() => {
          setLikeType("");
        })
        .catch((e) => console.log(e));
    }

    setPostLike(postId, type)
      .then(() => {
        setLikeType(type);
      })
      .catch((e) => console.log(e));
  }

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  function getLikeClassName(iconLikeType) {
    if (userGrade &&  userGrade.likeType === iconLikeType) return "selected-icon";

    return "icon"
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
          {formatDate(new Date(props.publishDate))}
        </span>
      </div>
      <h4>{`"${props.title}"`}</h4>
      <span>{`${props.content} #${props.categories}`}</span>
      <div></div>
      <div className="flex-center action-container">
        <button className="transparent-button" onClick={() => setLike("like")}>
          <UilThumbsUp
            className={getLikeClassName("like")}
          />
        </button>
        <button
          className="transparent-button"
          onClick={() => setLike("dislike")}
        >
          <UilThumbsDown
            className={getLikeClassName("dislike")}
          />
        </button>
        <span>{postGrade}</span>
      </div>
      <div className="flex-center action-container comment">
        <UilCommentLines className="icon" />
        <span>2</span>
      </div>
    </div>
  );
};

export default Post;

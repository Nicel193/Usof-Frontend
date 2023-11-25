import "./Post.scss";
import React from "react";

import { UilThumbsUp } from "@iconscout/react-unicons";
import { UilThumbsDown } from "@iconscout/react-unicons";
import { UilCommentLines } from "@iconscout/react-unicons";

const Post = (props) => {
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
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
        <UilThumbsUp className="icon" />
        <UilThumbsDown className="icon" />
        <span>5</span>
      </div>
      <div className="flex-center action-container comment">
        <UilCommentLines className="icon" />
        <span>2</span>
      </div>
    </div>
  );
};

export default Post;

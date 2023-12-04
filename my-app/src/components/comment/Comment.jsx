import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { UilThumbsUp, UilThumbsDown } from "@iconscout/react-unicons";
import { formatDate } from "../../services/dateFormater";
import LikeField from "../Like";

const Post = ({ commentId, authorLogin, publishDate, content }) => {
  return (
    <div className="comment">
      <div class="flex-center">
        <img
          width={30}
          height={30}
          src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          alt="AutorIcon"
        />
        <span>{`@${authorLogin}`}</span>
        <span> • </span>
        <span className="publishDate">{formatDate(publishDate)}</span>
      </div>
      <span className="content">{content}</span>

      <div></div>
      <LikeField grade={0}/>
    </div>
  );
};

export default Post;

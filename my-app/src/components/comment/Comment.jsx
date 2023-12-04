import React, { useEffect, useState } from "react";

import { formatDate } from "../../services/dateFormater";
import LikeField from "../Like";
import { useLikes } from "../../hooks/useLikes";
import {
  deleteCommentLike,
  getCommentLikes,
  setCommentLike,
} from "../../api/like";

const Post = ({ commentId, authorLogin, publishDate, content }) => {
  const { selectedLikeType, grade, setLike } = useLikes(
    getCommentLikes,
    deleteCommentLike,
    setCommentLike,
    commentId
  );

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
      <LikeField setLike={setLike} selectedLikeType={selectedLikeType} grade={grade} />
    </div>
  );
};

export default Post;

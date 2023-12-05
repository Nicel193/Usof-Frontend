import React, { useEffect, useState } from "react";

import { formatDate } from "../../services/dateFormater";
import LikeField from "../Like";
import { useLikes } from "../../hooks/useLikes";
import {
  deleteCommentLike,
  getCommentLikes,
  setCommentLike,
} from "../../api/like";
import UpdateCommentTools from "../UpdateCommentTools";

const Post = ({ commentId, authorLogin, publishDate, content, comment }) => {
  const [isDeleted, setDeleted] = useState(false);

  const { selectedLikeType, grade, setLike } = useLikes(
    getCommentLikes,
    deleteCommentLike,
    setCommentLike,
    commentId
  );

  useEffect(() => {
    setDeleted(false);
  }, [commentId]);

  return (
    <div className="comment">
      {!isDeleted ? (
        <>
          <div class="flex-center">
            <div className="authorInfo">
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
            <UpdateCommentTools
              authorLogin={authorLogin}
              comment={comment}
              setDeleted={setDeleted}
            />
          </div>
          <span className="content">{content}</span>

          <div></div>
          <LikeField
            setLike={setLike}
            selectedLikeType={selectedLikeType}
            grade={grade}
          />
        </>
      ) : (
        <span className="centerText">The comment has been deleted</span>
      )}
    </div>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import { createComment } from "../../api/comment";

const WritebleCommentField = ({ idPost, setShouldUpdateComment, editComment }) => {
  const [comment, setComment] = useState({ content: "" });

  function clearWriteField(params) {
    setComment({ content: "" });
  }

  const shareNewComment = async () => {
    try {
      await createComment(idPost, comment);
      setShouldUpdateComment(true);
      clearWriteField();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="writebleCommentField">
        <textarea
          value={comment ? comment.content : ""}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
          rows="4"
          cols="50"
          placeholder="Comment"
        ></textarea>
      </div>
      {!editComment ? (
        <button className="postButton" onClick={shareNewComment}>
          Comment
        </button>
      ) : (
        <div>
          <button className="postButton" onClick={() => {}}>
            Edit
          </button>
          <button className="postButton" onClick={() => {}}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default WritebleCommentField;

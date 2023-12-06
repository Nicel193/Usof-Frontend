import React, { useEffect, useState } from "react";
import { changeComment, createComment } from "../../api/comment";

const WritebleCommentField = ({
  idPost,
  setShouldUpdateComment,
  editComment,
  setEdit
}) => {
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

  const shareEditComment = async () => {
    try {
      await changeComment(editComment.id, comment);
      clearWriteField();
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editComment) {
      setComment({
        content: editComment.content || "",
      });
    }
  }, [editComment]);

  function exitFromEditMode() {
    clearWriteField();
    setEdit(false);
  }

  return (
    <div className="post-commet">
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
          <button className="postButton" onClick={shareEditComment}>
            Edit
          </button>
          <button className="postButton" onClick={exitFromEditMode}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default WritebleCommentField;

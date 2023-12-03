import React, { useEffect, useState } from "react";

const WriteblePostField = ({ editComment }) => {
    const [comment, setComment] = useState({ content: "" });

  return (
    <div>
      <div className="newComment">
        <textarea
          value={comment ? comment.content : ""}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
          rows="4"
          cols="50"
          placeholder="Comment"
        ></textarea>
      </div>
      {!editComment ? (
        <button className="postButton" onClick={() => {}}>
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

export default WriteblePostField;

import React, { useState } from "react";
import { createPost } from "../../api/createPost";
import { UilPlus } from "@iconscout/react-unicons";

const WriteblePostField = (props) => {
  const [post, setPost] = useState({ title: "", content: "", categories: [2] });
  const { setShouldUpdatePosts } = props;

  const shareNewPost = async () => {
    try {
      const response = await createPost(post);
      console.log(response);
      setShouldUpdatePosts(true);
      setPost({ title: "", content: "", categories: [2] });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="newPost">
      <div>
        <input
          value={post ? post.title : ""}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
        ></input>
        <textarea
          value={post ? post.content : ""}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          rows="4"
          cols="50"
          placeholder="Contetent"
        ></textarea>
        <div className="categories">
          <button className="category">
            <UilPlus />
            <span>Animals</span>
          </button>
        </div>
      </div>
      <button className="postButton" onClick={shareNewPost}>
        Post
      </button>
    </div>
  );
};

export default WriteblePostField;

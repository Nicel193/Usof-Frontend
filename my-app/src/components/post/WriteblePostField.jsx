import React, { useEffect, useState } from "react";
import { changePost, createPost } from "../../api/createPost";
import { UilMultiply } from "@iconscout/react-unicons";
import { getCategories } from "../../api/category";
import Select, { components } from "react-select";
import Category from "../Category";

const WriteblePostField = ({ editPost, setEditPost, setShouldUpdatePosts }) => {
  const [post, setPost] = useState({ title: "", content: "", categories: [] });
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const shareNewPost = async () => {
    try {
      post.categories = selectedOption.map((option) => option.value);

      const response = await createPost(post);
      console.log(response);
      setPost({ title: "", content: "", categories: [] });
      setShouldUpdatePosts(true);
      setSelectedOption(null);
    } catch (error) {
      console.log(error);
    }
  };

  const shareEditPost = async () => {
    try {
      post.categories = selectedOption.map((option) => option.value);

      const response = await changePost(editPost.id, post);
      console.log(response);
      setPost({ title: "", content: "", categories: [] });
      setShouldUpdatePosts(true);
      setSelectedOption(null);
      setEditPost(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editPost) {
      const editCategories = editPost.categories.split(", ");

      setPost({
        title: editPost.title || "",
        content: editPost.content || "",
        categories: editCategories,
      });
      setSelectedOption(
        editCategories.map((category) => ({
          value: category,
          label: category,
        }))
      );
    }
  }, [editPost]);

  useEffect(() => {
    async function fetchPostsData() {
      const response = await getCategories();
      setCategories(response.data);
    }
    fetchPostsData()
      .then()
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
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
        <Select
          className="select"
          value={selectedOption}
          options={categories.map((category) => ({
            value: category.title,
            label: category.title,
          }))}
          onChange={handleChange}
          closeMenuOnSelect={false}
          isMulti
        />
      </div>
      {!editPost ? (
        <button className="postButton" onClick={shareNewPost}>
          Post
        </button>
      ) : (
        <button className="postButton" onClick={shareEditPost}>
          Edit
        </button>
      )}
    </div>
  );
};

export default WriteblePostField;

import React, { useEffect, useState } from "react";
import { createPost } from "../../api/createPost";
import { UilMultiply } from "@iconscout/react-unicons";
import { getCategories } from "../../api/category";
import Select, { components } from "react-select";
import Category from "../Category";

const WriteblePostField = ({ editPost, setShouldUpdatePosts }) => {
  const [post, setPost] = useState({ title: "", content: "", categories: [] });
  const [categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  if (editPost) {
    post.title = editPost.title;
    post.content = editPost.content;
  }

  const shareNewPost = async () => {
    try {
      post.categories = selectedOption.map((option) => option.value.title);

      const response = await createPost(post);
      console.log(response);
      setShouldUpdatePosts(true);
      setPost({ title: "", content: "", categories: [0] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchPostsData() {
      const response = await getCategories();
      setCategories(response.data);
    }
    fetchPostsData()
      .then()
      .catch((e) => console.log(e));
  }, []);

  // function selectCategory(category) {
  //   setSelectedCategories((prevSet) => {
  //     const newSet = new Set(prevSet);
  //     newSet.add(category);
  //     return newSet;
  //   });
  // }

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
            value: category,
            label: category.title,
          }))}
          onChange={handleChange}
          closeMenuOnSelect={false}
          isMulti
        />
      </div>
      <button className="postButton" onClick={shareNewPost}>
        Post
      </button>
    </div>
  );
};

export default WriteblePostField;

import "./styles/Main.scss";

import React from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";
import { UilHome, UilUser } from "@iconscout/react-unicons";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

import { getPosts } from "../api/getPosts";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getCategories } from "../api/category";

import Category from "../components/Category";
import PageList from "../components/PageList";

const MaxPagePostCount = 10;

const Main = () => {
  const [isShowCategoty, setShowCategoty] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function fetchCategoriesData() {
      const response = await getCategories();
      console.log(response);
      setCategories(response.data);
    }

    fetchCategoriesData()
      .then()
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    async function fetchPostsData() {
      const response = await getPosts(searchParams.toString());

      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    }
    fetchPostsData()
      .then()
      .catch((e) => console.log(e));
    //eslint-disable-next-line
  }, [searchParams]);

  function drawCategoryList() {
    setShowCategoty(!isShowCategoty);
  }

  return (
    <div>
      <Header />
      <aside className="slider">
        <div className="flex-center home chose">
          <UilHome size="32" color="#505f98" />
          <span>Home</span>
        </div>
        <div>
          <Link to="/profile" className="text-link flex-center home chose">
            <UilUser size="32" color="#505f98" />
            <span>Profile</span>
          </Link>
        </div>
        <div class="underline"></div>
        <div>
          <div onClick={drawCategoryList} className="flex-center categories">
            <span>Categories</span>
            {!isShowCategoty ? (
              <UilAngleDown size="32" color="#505f98" />
            ) : (
              <UilAngleUp size="32" color="#505f98" />
            )}
          </div>
          {isShowCategoty &&
            (categories.length > 0 ? (
              categories.map((category) => (
                <Category id={category.id} title={category.title} />
              ))
            ) : (
              <div style={{ fontSize: "32px" }}>Category not found</div>
            ))}
        </div>
        <div class="underline"></div>
      </aside>

      <section>
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                postId={post.id}
                authorLogin={post.authorLogin}
                title={post.title}
                content={post.content}
                categories={post.categories}
                publishDate={post.publishDate}
              />
            ))
          ) : (
            <div style={{ fontSize: "32px" }}>Posts not found</div>
          )}

          {(posts.length >= MaxPagePostCount || totalPages > 1) && (
            <PageList totalPages={totalPages} />
          )}
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

import "./styles/Main.scss";

import { UilHome, UilUser } from "@iconscout/react-unicons";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

import React from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";
import { useState } from "react";
import { Link } from "react-router-dom";

import Category from "../components/Category";
import PageList from "../components/PageList";
import { usePosts } from "../hooks/usePosts";
import { useCategories } from "../hooks/useCategories";

const Main = () => {
  const [isShowCategoty, setShowCategoty] = useState(true);

  const {categories} = useCategories();
  const {totalPages, posts} = usePosts();

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
                post={post}
              />
            ))
          ) : (
            <div className="centerText" style={{ fontSize: "32px" }}>Posts not found</div>
          )}
          <PageList postsLength={posts.length} totalPages={totalPages} />
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

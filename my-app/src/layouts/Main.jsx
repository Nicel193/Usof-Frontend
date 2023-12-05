import "./styles/Main.scss";

import { UilHome, UilUser } from "@iconscout/react-unicons";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

import React from "react";
import Header from "../components/Header";
import Post from "../components/post/Post";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Category from "../components/Category";
import PageList from "../components/PageList";
import { usePosts } from "../hooks/usePosts";
import { useCategories } from "../hooks/useCategories";

const Main = () => {
  const [selectedButtonId, setButtonId] = useState(0);
  const [isShowCategoty, setShowCategoty] = useState(true);

  const { categories } = useCategories();
  const { totalPages, posts } = usePosts();

  function drawCategoryList() {
    setShowCategoty(!isShowCategoty);
  }

  function isActiveButton(id) {
    return selectedButtonId === id ? "active-chose" : "chose";
  }

  return (
    <div>
      <Header />
      <aside className="slider">
        <div>
          <NavLink
            to="/"
            onClick={() => setButtonId(0)}
            className={`text-link flex-center home ${isActiveButton(0)}`}
          >
            <UilHome size="32" color="#505f98" />
            <span>Home</span>
          </NavLink>
        </div>
        <div>
          <Link
            to="/profile"
            onClick={() => setButtonId(1)}
            className={`text-link flex-center home ${isActiveButton(1)}`}
          >
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
              categories.map((category, index) => (
                <Category
                  id={category.id}
                  title={category.title}
                  isActiveButton={isActiveButton}
                  setButtonId={setButtonId}
                  buttonId={index + 2}
                />
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
            <div className="centerText" style={{ fontSize: "32px" }}>
              Posts not found
            </div>
          )}
          <PageList postsLength={posts.length} totalPages={totalPages} />
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

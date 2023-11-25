import "./Main.scss";

import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import { UilHome, UilUser } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilChannel } from "@iconscout/react-unicons";

import { getPosts } from "../api/getPosts";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
    async function fetchData() {
      const response = await getPosts(searchParams.toString());
      console.log(response);
      setPosts(response.data);
    }
    fetchData()
      .then()
      .catch((e) => console.log(e));
    //eslint-disable-next-line
  }, [searchParams]);

  return (
    <div>
      <Header />
      <aside className="slider">
        <div className="flex-center home chose">
          <UilHome size="32" color="#505f98" />
          <span>Home</span>
        </div>
        <div
          className="flex-center home chose"
          onClick={() => {
            window.location.href = "/profile";
          }}
        >
          <UilUser size="32" color="#505f98" />
          <span>Profile</span>
        </div>
        <div class="underline"></div>
        <div>
          <div className="flex-center categories">
            <span>Categories</span>
            <UilAngleDown size="32" color="#505f98" />
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#505f98" />
            <span>Game</span>
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#505f98" />
            <span>Animals</span>
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#505f98" />
            <span>Cars</span>
          </div>
        </div>
        <div class="underline"></div>
      </aside>

      <section>
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
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
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

import "./Main.scss";

import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";
import { UilHome } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilChannel } from "@iconscout/react-unicons";

const Main = () => {
  return (
    <div>
      <Header />
      <aside className="slider">
        <div className="flex-center home chose">
          <UilHome size="32" color="#505f98" />
          <span>Home</span>
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
        <Post />
        <Post />
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

import "../layouts/Main.scss";
import React from "react";

import { UilThumbsUp } from "@iconscout/react-unicons";
import { UilThumbsDown } from "@iconscout/react-unicons";

const Post = () => {
  return (
    <div className="post">
      <div class="flex-center">
        <img
          width={47}
          height={47}
          src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
          alt="AutorIcon"
        />
        <span>Nicel</span>
      </div>
      <h4>
        "Embracing the Purr-fect Zen: The Art of Cat-titude and Relaxation"
      </h4>
      <span>
        🐱 "Cats: the ultimate masters of relaxation. From their graceful
        stretches to their cozy naps in the sun, these furry companions redefine
        the art of chilling. Who needs yoga when you have a cat to show you the
        true meaning of zen?" #CaturdayVibes #CatNaps #FelineGrace 🐾
      </span>
      <div></div>
      <div className="flex-center like-dislike-container">
        <UilThumbsUp className="icon" size="27" />
        <UilThumbsDown className="icon" size="27" />
        <span>5</span>
      </div>
    </div>
  );
};

export default Post;

import "./Main.scss";

import React from 'react';
import { UilHome } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilChannel } from "@iconscout/react-unicons";
import { UilThumbsUp } from "@iconscout/react-unicons";
import { UilThumbsDown } from "@iconscout/react-unicons";

const Main = ({ prop1, prop2 }) => {
  return (
    <div>
       <header>
        <div className="headerLeft">
          <img width={36} height={41} src="logo.png" alt="Site logo" />
          <h3>Reboot</h3>
        </div>
        <div className="headerRight">
          <button className="signIn">Sign In</button>
          <button className="logIn">Log In</button>
        </div>
      </header>
      <div class="underline"></div>

      <aside className="slider">
        <div className="flex-center home chose">
          <UilHome size="32" color="#6563FF" />
          <span>Home</span>
        </div>
        <div class="underline"></div>
        <div>
          <div className="flex-center categories">
            <span>Categories</span>
            <UilAngleDown size="32" color="#6563FF" />
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#6563FF" />
            <span>Game</span>
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#6563FF" />
            <span>Animals</span>
          </div>
          <div className="flex-center category chose">
            <UilChannel size="32" color="#6563FF" />
            <span>Cars</span>
          </div>
        </div>
        <div class="underline"></div>
      </aside>

      <section>
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
            stretches to their cozy naps in the sun, these furry companions
            redefine the art of chilling. Who needs yoga when you have a cat to
            show you the true meaning of zen?" #CaturdayVibes #CatNaps
            #FelineGrace 🐾
          </span>
          <div></div>
          <div className="flex-center like-dislike-container">
            <UilThumbsUp className="icon" size="27" />
            <UilThumbsDown className="icon" size="27" />
            <span>5</span>
          </div>
        </div>

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
            stretches to their cozy naps in the sun, these furry companions
            redefine the art of chilling. Who needs yoga when you have a cat to
            show you the true meaning of zen?" #CaturdayVibes #CatNaps
            #FelineGrace 🐾
          </span>
          <div></div>
          <div className="flex-center like-dislike-container">
            <UilThumbsUp className="icon" size="27" />
            <UilThumbsDown className="icon" size="27" />
            <span>-5</span>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Main;

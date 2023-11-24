import "./Main.scss";

import React from "react";
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
          <svg
            fill="#000000"
            width="30px"
            height="30"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 27.9883 52 C 29.2774 52 29.9336 51.1328 31.2461 49.3516 L 45.2383 30.6719 C 45.8711 29.8047 46.2461 28.9375 46.2461 28 C 46.2461 27.0390 45.8711 26.1953 45.2383 25.3281 L 31.2461 6.6250 C 29.9336 4.8672 29.2774 4.0000 27.9883 4.0000 C 26.7227 4.0000 26.0664 4.8672 24.7539 6.6250 L 10.7617 25.3281 C 10.1289 26.1953 9.7539 27.0390 9.7539 28 C 9.7539 28.9375 10.1289 29.8047 10.7617 30.6719 L 24.7539 49.3516 C 26.0664 51.1328 26.7227 52 27.9883 52 Z" />
          </svg>
          
          <h3>Reboot</h3>
        </div>
        <div className="headerRight">
          <button className="signIn">Sign In</button>
          <button className="logIn">Log In</button>
        </div>
      </header>
      <div class="underline"></div>


      <footer></footer>
    </div>
  );
};

export default Main;
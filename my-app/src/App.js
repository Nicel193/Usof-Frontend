import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { changeAuth, setUserData } from "./store/authSlice";
import checkAuth from "./services/authService";

import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import Profile from "./layouts/Profile";

const App = () => {
  const isAuth = useSelector ((state) => state.auth.authorizationStatus);
  const dispatch = useDispatch();

  function successfulAuth(res) {
    dispatch(changeAuth(true));
    dispatch(setUserData(res));
    localStorage.setItem("isAuth", "true");
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem('isAuth');
    if (storedUserData === "true" && isAuth === false) {
      if (localStorage.getItem("token")) {
        checkAuth().then((res) => {
          if (res) successfulAuth(res);
        });
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

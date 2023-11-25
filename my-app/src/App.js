import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import Profile from "./layouts/Profile";

const App = () => {

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

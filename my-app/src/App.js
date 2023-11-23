import "./App.scss";
import { UilHome } from "@iconscout/react-unicons";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilChannel } from "@iconscout/react-unicons";

const App = () => {
  const username = "Nicel";
  const logoUrl =
    "https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg"; // Замените на реальный URL вашего логотипа

  return (
    <div className="app">
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
        <div className="flex-center home">
          <UilHome size="32" color="#6563FF" />
          <span>Home</span>
        </div>
        <div class="underline"></div>
        <div>
          <div className="flex-center categories">
            <span>Categories</span>
            <UilAngleDown size="32" color="#6563FF" />
          </div>
          <div className="flex-center category">
            <UilChannel size="32" color="#6563FF" />
            <span>Game</span>
          </div>
          <div className="flex-center category">
            <UilChannel size="32" color="#6563FF" />
            <span>Animals</span>
          </div>
          <div className="flex-center category">
            <UilChannel size="32" color="#6563FF" />
            <span>Cars</span>
          </div>
        </div>
        <div class="underline"></div>
      </aside>

      <section></section>

      <footer></footer>
    </div>
  );
};

export default App;

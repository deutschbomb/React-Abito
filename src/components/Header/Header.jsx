// React imports
import { Link } from "react-router";
// Project imports
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={"/"} className="header-logo">
            <img src="/media/icon/logo.svg" alt="logo" />

            <span>Абито</span>
          </Link>

          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>

            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="header-burger">
            <img src="/media/icon/burger.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};

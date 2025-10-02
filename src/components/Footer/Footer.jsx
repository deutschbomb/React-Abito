// React imports
import { Link } from "react-router";
// Project imports
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="content-side__footer">
        <p className="content-side__footer-item">
          &copy; ООО &laquo;Абито&raquo;, 2011&ndash;{new Date().getFullYear()}
        </p>

        <Link to={"/"} className="content-side__footer-item">
          Политика конфиденциальности
        </Link>

        <Link to={"/"} className="content-side__footer-item">
          Обработка данных
        </Link>
      </div>
    </>
  );
};

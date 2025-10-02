// React imports
import { Link } from "react-router";
// Project imports
import "./Card.css";

export const Card = ({ id, title, price, address, date, link, image }) => {
  return (
    <Link to={`${link}/${id}`} className="card">
      <div className="card__img">
        <img src={image} alt="item" />
      </div>

      <h5 className="card__title">{title}</h5>

      <strong className="card__price">{price} &#x20bd;</strong>

      <div className="card__info-box">
        <span className="card__info">{address}</span>
        <span className="card__info">{date}</span>
      </div>
    </Link>
  );
};

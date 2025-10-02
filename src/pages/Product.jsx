// React imports
import { Link, useOutletContext } from "react-router";
import { useParams } from "react-router";
// Project imports

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();

  const selectedProduct = products.find((product) => product.id === +id);

  return (
    <section className="content">
      <div className="container">
        {selectedProduct ? (
          <div className="content-box">
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title">{selectedProduct.title}</h2>

                <img src={selectedProduct.image} alt="product" className="content-product__img" />

                <p className="content-product__text">{selectedProduct.description}</p>
              </div>

              <div className="content-product__right">
                <h2 className="content-product__price">{selectedProduct.price} &#x20bd;</h2>

                <button className="btn btn-primary btn-large">Показать телефон</button>
              </div>
            </div>

            <div className="content-side">
              <h3 className="content-side__title">Сервисы и услуги</h3>

              <div className="content-side__box">
                <div className="content-side__list">
                  <div className="content-side__list-item">
                    <img
                      src="/media/icon/delivery-truck.svg"
                      alt="delivery-truck"
                      className="content-side__list-item__img"
                    />

                    <h5 className="content-side__list-item__title">Доставка</h5>

                    <p className="content-side__list-item__text">
                      Проверка при получении и возможность бесплатно вернуть товар
                    </p>
                  </div>

                  <div className="content-side__list-item">
                    <img src="/media/icon/car.svg" alt="car" className="content-side__list-item__img" />

                    <h5 className="content-side__list-item__title">Автотека</h5>

                    <p className="content-side__list-item__text">
                      Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                    </p>
                  </div>

                  <div className="content-side__list-item">
                    <img src="/media/icon/booking.svg" alt="booking" className="content-side__list-item__img" />

                    <h5 className="content-side__list-item__title">Онлайн-бронирование жилья</h5>

                    <p className="content-side__list-item__text">
                      Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                    </p>
                  </div>
                </div>

                <div className="content-side__footer">
                  <p className="content-side__footer-item">&copy; ООО &laquo;Абито&raquo;, 2011&dash;2025</p>

                  <Link to={"/"} className="content-side__footer-item">
                    Политика конфиденциальности
                  </Link>

                  <Link to={"/"} className="content-side__footer-item">
                    Обработка данных
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2>Объявление не найдено!</h2>
        )}
      </div>
    </section>
  );
};

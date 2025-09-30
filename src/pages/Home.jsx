import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { productsArray } from "../constants";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" name="" id="" placeholder="Поиск по объявлениям" />

              <button className="btn btn-primary search-btn">
                <img className="search-btn__icon" src="./media/icon/search.svg" alt="search" />

                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {productsArray.map((product) => {
                    return (
                      <Card
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        address={product.address}
                        date={product.date}
                        link={product.link}
                        image={product.image}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="content-side">
                <h3 className="content-side__title">Сервисы и услуги</h3>

                <div className="content-side__box">
                  <div className="content-side__list">
                    <div className="content-side__list-item">
                      <img
                        src="./media/icon/delivery-truck.svg"
                        alt="delivery-truck"
                        className="content-side__list-item__img"
                      />

                      <h5 className="content-side__list-item__title">Доставка</h5>

                      <p className="content-side__list-item__text">
                        Проверка при получении и возможность бесплатно вернуть товар
                      </p>
                    </div>

                    <div className="content-side__list-item">
                      <img src="./media/icon/car.svg" alt="car" className="content-side__list-item__img" />

                      <h5 className="content-side__list-item__title">Автотека</h5>

                      <p className="content-side__list-item__text">
                        Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                      </p>
                    </div>

                    <div className="content-side__list-item">
                      <img src="./media/icon/booking.svg" alt="booking" className="content-side__list-item__img" />

                      <h5 className="content-side__list-item__title">Онлайн-бронирование жилья</h5>

                      <p className="content-side__list-item__text">
                        Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                      </p>
                    </div>
                  </div>

                  <div className="content-side__footer">
                    <p className="content-side__footer-item">&copy; ООО &laquo;Абито&raquo;, 2011&ndash;2021</p>

                    <a href="/" className="content-side__footer-item">
                      Политика конфиденциальности
                    </a>

                    <a href="/" className="content-side__footer-item">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

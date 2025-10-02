// React imports
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
// Project imports
import { Header } from "../components/Header/Header";
import { productsArray } from "../constants";

export const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = (event) => {
    if (event._reactName === "onClick" || event.key === "Enter") {
      setProducts(
        productsArray.filter(
          (product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase()) || product.price.includes(searchText)
        )
      );
    }
  };

  useEffect(() => {
    setProducts(productsArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                name=""
                id=""
                placeholder="Поиск по объявлениям"
                value={searchText}
                onChange={handleSearch}
                onKeyUp={handleSearchArray}
              />

              <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                <img className="search-btn__icon" src="/media/icon/search.svg" alt="search" />

                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};

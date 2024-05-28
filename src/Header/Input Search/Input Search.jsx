import { Link, useNavigate } from "react-router-dom";
import IconSearch from "../../Container  Component  SVG ICON/Icon Search";
import "./Input Search Max-witdh 600px.css";
import "./Input Search Min-witdh 1000px.css";
import { useEffect, useState } from "react";
import axios from "axios";
import IconStore from "../../Container  Component  SVG ICON/Icon Store";

function InputSearchHeader() {
  const [keySearch, setKeySearch] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?search=${keySearch}&sortby=relevance`);
    }
  };

  useEffect(() => {
    const callAPI = setTimeout(() => {
      if (keySearch.trim().length > 0) {
        axios
          .get("https://run.mocky.io/v3/e99a5be3-9162-4969-be88-8df53da91724")
          .then((response) => {
            const data = response.data;
            const items = data
              .filter((item) => {
                return item.name.includes(keySearch);
              })
              .slice(0, 6);
            setItems(items);
          });
      }
    }, 100);
    return () => {
      clearTimeout(callAPI);
    };
  }, [keySearch]);
  return (
    <div className="input__search__header__box--search">
      <div className="input__search__header__box__search--input">
        <input
          onChange={(e) => setKeySearch(e.target.value)}
          placeholder="Siêu sale hàng Nhật"
          className="input__search__header__box__search__input--text"
          type="text"
          onKeyDown={handleKeyPress}
        />
      </div>
      <Link
        to={
          keySearch.trim().length > 0
            ? `/search?search=${keySearch}&sortby=relevance`
            : "/search?search=Siêu sale hàng Nhật&sortby=relevance"
        }
        className="input__search__header__box__search--svg"
      >
        <IconSearch width={"1.4rem"} />
      </Link>
      <div className="input__search__header__box__search--dropDown">
        {keySearch.trim().length > 0 ? (
          <>
            <Link
              className="input__search__header__box__search__dropDown--option--store"
              to={`/search?search=${item.name}&sortby=relevance`}
            >
              <div className="input__search__header__box__search__dropDown__option__store--icon">
                <IconStore
                  styles={{
                    enableBackground: "new 0 0 15 15",
                    strokeWidth: "0",
                    fill: "#ee4d2d",
                    height: "1.6rem",
                    width: "1.6rem",
                  }}
                />
              </div>
              <div className="input__search__header__box__search__dropDown__option__store--title">
                "{keySearch}" Shops
              </div>
            </Link>
            {items.map((item) => {
              return (
                <Link
                  className="input__search__header__box__search__dropDown--option"
                  to={`/search?search=${item.name}&sortby=relevance`}
                >
                  <div className="input__search__header__box__search__dropDown__event--title">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <>
            <Link
              className="input__search__header__box__search__dropDown--event"
              to={"/search?search=${item.name}&sortby=relevance"}
            >
              <div className="input__search__header__box__search__dropDown__event--title">
                Siêu sale hàng Nhật
              </div>
              <div className="input__search__header__box__search__dropDown__event--image">
                <img
                  width={"100%"}
                  src="Image Hyper Sale/hyper sale.png"
                  alt=""
                />
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default InputSearchHeader;

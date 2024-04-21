import "./Header  Main Page Mobi Max-width 600px.css";
import "./Header  Main Page Mobi Min-width 1000px.css";
import IconSearch from "../../Container  Component  SVG ICON/Icon Search";
import IconShopping from "../../Container  Component  SVG ICON/Icon Shopping";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HeaderMainPageMobi() {
  const [keySearch, setKeySearch] = useState("");
  const [items, setItems] =useState("");useEffect(() => {}, [keySearch]);

  return (
    <div id="header__main__page__mobi">
      <div className="header__main__page__mobi--layout layout">
        <div className="header__main__page__mobi__box--search">
          <div className="header__main__page__mobi__box__search--input">
            <input
              onChange={(e) => setKeySearch(e.target.value)}
              placeholder="Siêu sale hàng Nhật"
              className="header__main__page__mobi__box__search__input--text"
              type="text"
            />
          </div>
          <div className="header__main__page__mobi__box__search--svg">
            <IconSearch />
          </div>
          <div className="header__main__page__mobi__box__search--dropDown">
            {true ? (
              <>
                <Link
                  className="header__main__page__mobi__box__search__dropDown--option"
                  to={"#Event"}
                >
                  <div className="header__main__page__mobi__box__search__dropDown__event--title">
                    Siêu sale hàng Nhật
                  </div>
                </Link>
                <Link
                  className="header__main__page__mobi__box__search__dropDown--option"
                  to={"#Event"}
                >
                  <div className="header__main__page__mobi__box__search__dropDown__event--title">
                    Siêu sale hàng Nhật
                  </div>
                </Link>
                <Link
                  className="header__main__page__mobi__box__search__dropDown--option"
                  to={"#Event"}
                >
                  <div className="header__main__page__mobi__box__search__dropDown__event--title">
                    Siêu sale hàng Nhật
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="header__main__page__mobi__box__search__dropDown--event"
                  to={"#Event"}
                >
                  <div className="header__main__page__mobi__box__search__dropDown__event--title">
                    Siêu sale hàng Nhật
                  </div>
                  <div className="header__main__page__mobi__box__search__dropDown__event--image">
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
        <div className="header__main__page__mobi__box--svg-shoping">
          <IconShopping />
        </div>
        <div className="header__main__page__mobi__box--img">
          <img width={"100%"} src="./Image User/User.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMainPageMobi;

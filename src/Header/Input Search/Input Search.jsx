import { Link } from "react-router-dom";
import IconSearch from "../../Container  Component  SVG ICON/Icon Search";
import "./Input Search Max-witdh 600px.css";
import './Input Search Min-witdh 1000px.css'
import { useEffect, useState } from "react";

function InputSearchHeader() {
  const [keySearch, setKeySearch] = useState("");
  const [items, setItems] = useState("");
  useEffect(() => {
    const callAPI =   setTimeout(() => {
   
    }, 300);
return ()=>{
  clearTimeout(callAPI);
}
  }, [keySearch]);
  return (
    <div className="input__search__header__box--search">
      <div className="input__search__header__box__search--input">
        <input
          onChange  ={(e) => setKeySearch(e.target.value)}
          placeholder="Siêu sale hàng Nhật"
          className="input__search__header__box__search__input--text"
          type="text"
        />
      </div>
      <div className="input__search__header__box__search--svg">
        <IconSearch width={'1.4rem'}/>
      </div>
      <div className="input__search__header__box__search--dropDown">
        {true ? (
          <>
            <Link
              className="input__search__header__box__search__dropDown--option"
              to={"#Event"}
            >
              <div className="input__search__header__box__search__dropDown__event--title">
                Siêu sale hàng Nhật
              </div>
            </Link>
            <Link
              className="input__search__header__box__search__dropDown--option"
              to={"#Event"}
            >
              <div className="input__search__header__box__search__dropDown__event--title">
                Siêu sale hàng Nhật
              </div>
            </Link>
            <Link
              className="input__search__header__box__search__dropDown--option"
              to={"#Event"}
            >
              <div className="input__search__header__box__search__dropDown__event--title">
                Siêu sale hàng Nhật
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              className="input__search__header__box__search__dropDown--event"
              to={"#Event"}
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

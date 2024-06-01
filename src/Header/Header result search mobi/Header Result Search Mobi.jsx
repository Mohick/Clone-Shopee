
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import InputSearchHeader from "../Input Search/Input Search";
import "./Header Result Search Mobi Max-width 600px.css";
import "./Header Result Search Mobi Min-width 1000px.css";
import ModalFilterResultSearch from "./Modal Filter/Modal Filter";
import HandleFilterResultSearch from "./Modal Filter/handle  filter result search/Handle FIlter";
import { memo, useEffect, useState } from "react";
import axios from "axios";
function HeaderResultSearchMobi() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getDate = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/1a0f57fa-e361-4b7f-8c4f-74dfe3d67a39")
        .then((response) => {
          const data = response.data;
          setItems(data);
        });
    }, 0);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return items.length == 0 ? undefined : (
    <div id="header__result__search__mobi">
      <div className="header__result__search__mobi--layout layout">
        <div className="header__result__search__mobi--header">
          <div className="header__result__search__mobi__header--btn--back">
            <Icons.arrowLeftHaveTail className="header__result__search__mobi__header__btn__back--icon" />
          </div>
          <div className="header__result__search__mobi__header--search">
            <InputSearchHeader />
          </div>
          <div
            className="header__result__search__mobi__header--filter"
            onClick={HandleFilterResultSearch.openModalFilter}
          >
            <Icons.filter className="header__result__search__mobi__header__filter--icon" />
            <span className="header__result__search__mobi__header__filter--title">
              Filter
            </span>
          </div>
          <div className="header__result__search__mobi__header--menu">
            <Icons.menuThreeDots className="header__result__search__mobi__header__menu--icon" />
          </div>
        </div>

        <ModalFilterResultSearch  data={items}/>
      </div>
    </div>
  );
}

export default memo(HeaderResultSearchMobi);

import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import InputSearchHeader from "../Input Search/Input Search";
import "./Header Result Search Mobi Max-width 600px.css";
import ModalFilterResultSearch from "./Modal Filter/Modal Filter";
import HandleFilterResultSearch from "./Modal Filter/handle  filter result search/Handle FIlter";
function HeaderResultSearchMobi() {
  return (
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
        <div className="header__result__search__mobi--body">
          <div className="header__result__search__mobi__body--options header__result__search__mobi__body--bar">
            <span className="header__result__search__mobi__body__options--title header__result__search__mobi__body__options--title--active">
              Relevance
            </span>
          </div>
          <div className="header__result__search__mobi__body--options header__result__search__mobi__body--bar">
            <span className="header__result__search__mobi__body__options--title">
              Latest
            </span>
          </div>
          <div className="header__result__search__mobi__body--options header__result__search__mobi__body--bar">
            <span className="header__result__search__mobi__body__options--title">
              Top Sales
            </span>
          </div>
          <div className="header__result__search__mobi__body--options">
            <span className="header__result__search__mobi__body__options--title">
              Price
            </span>
            <Icons.arrowTopAndBottom className="header__result__search__mobi__body__options--icon" />
          </div>
          <div className="header__result__search__mobi__body--navigation--bar"></div>
        </div>
        <div className="header__result__search__mobi--footer">
          <div className="header__result__search__mobi__footer--options">
            <span className="header__result__search__mobi__footer__options--title">
              Shopee Mall
            </span>
          </div>
          <div className="header__result__search__mobi__footer--options">
            <span className="header__result__search__mobi__footer__options--title">
              Freeship Xtra
            </span>
          </div>
          <div className="header__result__search__mobi__footer--options">
            <span className="header__result__search__mobi__footer__options--title">
              Freeship Xtra
            </span>
          </div>
          <div className="header__result__search__mobi__footer--options">
            <span className="header__result__search__mobi__footer__options--title">
              Freeship
            </span>
          </div>
          <div className="header__result__search__mobi__footer--options">
            <span className="header__result__search__mobi__footer__options--title">
              Rating
            </span>
            <Icons.arrowAngleDown className="header__result__search__mobi__footer__options--icon" />
          </div>
        </div>
        <ModalFilterResultSearch />
      </div>
    </div>
  );
}

export default HeaderResultSearchMobi;

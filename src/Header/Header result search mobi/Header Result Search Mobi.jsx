import { useLocation, useNavigate, useParams } from "react-router";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import InputSearchHeader from "../Input Search/Input Search";
import "./Header Result Search Mobi Max-width 600px.css";
import './Header Result Search Mobi Min-width 1000px.css'
import ModalFilterResultSearch from "./Modal Filter/Modal Filter";
import HandleFilterResultSearch from "./Modal Filter/handle  filter result search/Handle FIlter";
import handleNavigationResultItems from "../../Result Search Items Page/Navigation Mobi/handle navigation result items/handle navigation result items";
function HeaderResultSearchMobi() {
  let navigation = useNavigate();


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

        <ModalFilterResultSearch />
      </div>
    </div>
  );
}

export default HeaderResultSearchMobi;

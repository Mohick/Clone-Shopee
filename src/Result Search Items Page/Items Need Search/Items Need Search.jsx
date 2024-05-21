import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import './Items Need Search Max-width 600px.css'
import "./Items Need Search Min-width 1000px.css";
import RenderItemsNeedSearch from "./Render Items/Render Items";
const ItemsNeedSearch = function () {
  return (
    <div id="result__search__items__page__items__need__search">
      <div className="result__search__items__page__items__need__search--header">
        <Icons.alert className="result__search__items__page__items__need__search__header--icon" />
        Search result for '
        <span className="result__search__items__page__items__need__search__header--text">
          ab
        </span>
        '
      </div>
      <div className="result__search__items__page__items__need__search--body">
        <div className="result__search__items__page__items__need__search__body--navigations">
          <div className="result__search__items__page__items__need__search__body__navigations--options ">
            <div className="result__search__items__page__items__need__search__body__navigations__options--title">
              Sort by
            </div>
            <div className="result__search__items__page__items__need__search__body__navigations__options--btn result__search__items__page__items__need__search__body__navigations__options__btn--active">
              relevance
            </div>
            <div className="result__search__items__page__items__need__search__body__navigations__options--btn">
              Latest
            </div>
            <div className="result__search__items__page__items__need__search__body__navigations__options--btn">
              Top Sales
            </div>
            <div className="result__search__items__page__items__need__search__body__navigations__options--price">
              Price
              <Icons.arrowAngleDown className="result__search__items__page__items__need__search__body__navigations__options__price--icon" />
            </div>
          </div>
          <div className="result__search__items__page__items__need__search__body--locaiton">
            <div className="result__search__items__page__items__need__search__body__locaiton--options">
              <span className="result__search__items__page__items__need__search__body__locaiton__options--current">
                1
              </span>
              <span className="result__search__items__page__items__need__search__body__locaiton__options--bar">
                /
              </span>
              <span className="result__search__items__page__items__need__search__body__locaiton__options--length">
                17
              </span>
            </div>
            <div className="result__search__items__page__items__need__search__body__locaiton--btn">
              <div className="result__search__items__page__items__need__search__body__locaiton__btn--prev">
                <Icons.arrowAngleLeft className="result__search__items__page__items__need__search__body__locaiton__btn__prev--icon" />
              </div>
              <div className="result__search__items__page__items__need__search__body__locaiton__btn--next result__search__items__page__items__need__search__body__locaiton__btn__next--active">
                <Icons.arrowAngleRight className="result__search__items__page__items__need__search__body__locaiton__btn__next--icon result__search__items__page__items__need__search__body__locaiton__btn__next__icon--active" />
              </div>
            </div>
          </div>
        </div>
        <div className="result__search__items__page__items__need__search__body--items">
          <RenderItemsNeedSearch url={"https://run.mocky.io/v3/94311c5e-d335-4641-8b5d-2a1e9d045b3c"}/>
        </div>
      </div>
    </div>
  );
};

export default ItemsNeedSearch;

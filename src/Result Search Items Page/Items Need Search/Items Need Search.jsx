import React from "react";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import "./Items Need Search Max-width 400px.css";
import "./Items Need Search Min-width 400px.css";
import "./Items Need Search Min-width 700px.css";
import "./Items Need Search Min-width 900px.css";
import "./Items Need Search Min-width 1000px.css";
import "./Items Need Search Min-width 1300px.css";
import RenderItemsNeedSearch from "./Render Items/Render Items";
import { useLocation, useNavigate } from "react-router";
import HandleNavigationResultItems from "./handle navigation/handle navigation ";

const ItemsNeedSearch = function ({ data }) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const maximumShowItems = 40;
  const navigation = useNavigate();
  const query = useQuery();
  const sortby = query.get("sortby");
  const page = query.get("pages");
  const maxSteps = Math.floor(data.length / maximumShowItems) + 1;
  const minSteps = 1;
  return (
    <div id="result__search__items__page__items__need__search">
      <div className="result__search__items__page__items__need__search--header">
        <Icons.alert className="result__search__items__page__items__need__search__header--icon" />
        Search result for '
        <span className="result__search__items__page__items__need__search__header--text">
          {query.get("search")}
        </span>
        '
      </div>
      <div className="result__search__items__page__items__need__search--body">
        <div className="result__search__items__page__items__need__search__body--navigations">
          <div className="result__search__items__page__items__need__search__body__navigations--options">
            <div className="result__search__items__page__items__need__search__body__navigations__options--title">
              Sort by
            </div>
            <div
              onClick={(e) => {
                HandleNavigationResultItems.rename({
                  tag: e.target,
                  query: sortby,
                  navigation: navigation,
                });
              }}
              className="result__search__items__page__items__need__search__body__navigations__options--btn result__search__items__page__items__need__search__body__navigations__options__btn--active"
              name="relevance"
            >
              relevance
            </div>
            <div
              onClick={(e) => {
                HandleNavigationResultItems.rename({
                  tag: e.target,
                  query: sortby,
                  navigation: navigation,
                });
              }}
              className="result__search__items__page__items__need__search__body__navigations__options--btn"
              name="latest"
            >
              Latest
            </div>
            <div
              onClick={(e) => {
                HandleNavigationResultItems.rename({
                  tag: e.target,
                  query: sortby,
                  navigation: navigation,
                });
              }}
              className="result__search__items__page__items__need__search__body__navigations__options--btn"
              name="top-sales"
            >
              Top Sales
            </div>
            <div
              className="result__search__items__page__items__need__search__body__navigations__options--price"
              name="price"
            >
              <span className="result__search__items__page__items__need__search__body__navigations__options__price--title">
                Price{" "}
                <span className="result__search__items__page__items__need__search__body__navigations__options__price__title--text">
                  : Low To Height
                </span>
              </span>
              <Icons.arrowAngleDown className="result__search__items__page__items__need__search__body__navigations__options__price--icon" />
              <div className="result__search__items__page__items__need__search__body__navigations__options__price--dropdown">
                <div
                  className="result__search__items__page__items__need__search__body__navigations__options__price__dropdown--items"
                  onClick={(e) => {
                    HandleNavigationResultItems.price({
                      tag: e.target,
                      query: sortby,
                      navigation: navigation,
                    });
                  }}
                  name="low_height"
                >
                  : Low To Height
                </div>
                <div
                  className="result__search__items__page__items__need__search__body__navigations__options__price__dropdown--items"
                  onClick={(e) => {
                    HandleNavigationResultItems.price({
                      tag: e.target,
                      query: sortby,
                      navigation: navigation,
                    });
                  }}
                  name="height_low"
                >
                  : Height To Low
                </div>
              </div>
            </div>
          </div>
          <div className="result__search__items__page__items__need__search__body--locaiton">
            <div className="result__search__items__page__items__need__search__body__locaiton--options">
              <span className="result__search__items__page__items__need__search__body__locaiton__options--current">
              {!!page?page:1}
              </span>
              <span className="result__search__items__page__items__need__search__body__locaiton__options--bar">
                /
              </span>
              <span className="result__search__items__page__items__need__search__body__locaiton__options--length">
                {maxSteps}
              </span>
            </div>
            <div className="result__search__items__page__items__need__search__body__locaiton--btn">
              <div
                className="result__search__items__page__items__need__search__body__locaiton__btn--prev"
                onClick={(e) => {
                  HandleNavigationResultItems.btnPage({
                    btn: "left",
                    navigation: navigation,
                    query: page,
                    minSteps,
                    tag: e.target,
                  });
                }}
                maxStep={maxSteps}
              >
                <Icons.arrowAngleLeft className="result__search__items__page__items__need__search__body__locaiton__btn__prev--icon" />
              </div>
              <div
                onClick={(e) => {
                  HandleNavigationResultItems.btnPage({
                    btn: "right",
                    navigation: navigation,
                    query: page,
                    maxSteps,
                    tag: e.target,
                  });
                }}
                maxStep={maxSteps}
                className="result__search__items__page__items__need__search__body__locaiton__btn--next result__search__items__page__items__need__search__body__locaiton__btn--active"
              >
                <Icons.arrowAngleRight className="result__search__items__page__items__need__search__body__locaiton__btn__next--icon result__search__items__page__items__need__search__body__locaiton__btn__icon--active" />
              </div>
            </div>
          </div>
        </div>
        <div className="result__search__items__page__items__need__search__body--items">
          <RenderItemsNeedSearch data={data} />
        </div>
      </div>
    </div>
  );
};

export default ItemsNeedSearch;

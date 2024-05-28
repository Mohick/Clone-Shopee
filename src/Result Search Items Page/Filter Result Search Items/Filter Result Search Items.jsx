import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import "./Filter Result Search Items Max-width 600px.css";
import "./Filter Result Search Items Max-width 1000px.css";
import RenderFilterOptionsResultSearch from "./render items/render options";
import { useLocation, useNavigate } from "react-router";
import { useCallback } from "react";
import handleFilterNavigation from "./handle filter navigation/handle filter navigation";

const FilterResultSearchItems = () => {
  const navigation = useNavigate();
  let UseQuery;
  useCallback(
    (UseQuery = () => {
      return new URLSearchParams(useLocation().search);
    }),
    []
  );
  const query = UseQuery();
  return (
    <div id="result__search__items__page__filter">
      <div className="result__search__items__page__filter--header">
        <Icons.filter className="result__search__items__page__filter__header--icon" />
        <span className="result__search__items__page__filter__header--title">
          SEARCH FILTER
        </span>
      </div>
      <div className="result__search__items__page__filter--body">
        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            By category
          </div>
          <RenderFilterOptionsResultSearch />
          <div className="result__search__items__page__filter__body__items--btn--show--more" onClick={(e)=>{
            handleFilterNavigation.openShowMorePC(e.target)
          }}>
            more
            <Icons.arrowAngleDown className="result__search__items__page__filter__body__items__btn__show__more--icon" />
          </div>
        </div>
        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            Shipped from
          </div>
          <div className="result__search__items__page__filter__body__items--options">
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "TP.HCM",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"TP.HCM"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                TP.HCM
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "dong nai",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"dong nai"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                dong nai
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Ha Noi",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Ha Noi"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Ha Noi
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Dong Thap",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Dong Thap"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Dong Thap
              </span>
            </div>
          </div>
          <div className="result__search__items__page__filter__body__items--options--more">
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "oversea",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"oversea"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                oversea
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Phu Tho",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Phu Tho"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Phu Tho
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Quang Ninh",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Quang Ninh"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Quang Ninh
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Thanh Hoa",
                    query,
                    "shipFrom"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Thanh Hoa"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Thanh Hoa
              </span>
            </div>
          </div>

          <div className="result__search__items__page__filter__body__items--btn--show--more" onClick={(e)=>{
            handleFilterNavigation.openShowMorePC(e.target)
          }}>
            more
            <Icons.arrowAngleDown className="result__search__items__page__filter__body__items__btn__show__more--icon" />
          </div>
        </div>
        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            Shipping options
          </div>
          <div className="result__search__items__page__filter__body__items--options">
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Express",
                    query,
                    "shippingOptions"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Express"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Express
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Fast",
                    query,
                    "shippingOptions"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Fast"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Fast
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "Saving",
                    query,
                    "shippingOptions"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"Saving"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                Saving
              </span>
            </div>
          </div>
        </div>
        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            Brands
          </div>
          <div className="result__search__items__page__filter__body__items--options">
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "VN",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"VN"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                VN
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "ALong",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"ALong"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                ALong
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "MUSHIHUI",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"MUSHIHUI"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                MUSHIHUI
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "UNDERCOOL",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"UNDERCOOL"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                UNDERCOOL
              </span>
            </div>
          </div>
          <div className="result__search__items__page__filter__body__items--options--more">
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "GOTI",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"GOTI"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                GOTI
              </span>
            </div>
            <div className="result__search__items__page__filter__body__items__options--choose">
              <input
                onClick={() =>
                  handleFilterNavigation.multipleOptions(
                    navigation,
                    "VM STYLE",
                    query,
                    "brands"
                  )
                }
                className="result__search__items__page__filter__body__items__options__choose--check"
                type="checkbox"
                name={"VM STYLE"}
              />
              <span className="result__search__items__page__filter__body__items__options__choose--name">
                VM STYLE
              </span>
            </div>
          </div>
          <div className="result__search__items__page__filter__body__items--btn--show--more" onClick={(e)=>{
            handleFilterNavigation.openShowMorePC(e.target)
          }}>
            more
            <Icons.arrowAngleDown className="result__search__items__page__filter__body__items__btn__show__more--icon" />
          </div>
        </div>

        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            Price Range
          </div>
          <div className="result__search__items__page__filter__body__items--price">
            <input
              placeholder="Min"
              className="result__search__items__page__filter__body__items__price--min"
              type="number"
            />
            <div className="result__search__items__page__filter__body__items__price--bar--row">
              -
            </div>
            <input
              placeholder="Max"
              className="result__search__items__page__filter__body__items__price--max"
              type="number"
            />
          </div>
          <div className="result__search__items__page__filter__body__items--alert">
            Please input valid price range
          </div>
          <button
            className="result__search__items__page__filter__body__items--btn--submit"
            onClick={() => {
              handleFilterNavigation.btnPriceInputPc(
                navigation,
                query,
                "price"
              );
            }}
          >
            Apply
          </button>
        </div>
        <div className="result__search__items__page__filter__body--items">
          <div className="result__search__items__page__filter__body__items--title">
            Rating
          </div>
          <div className="result__search__items__page__filter__body__items--options">
            <div
              className="result__search__items__page__filter__body__items--rating"
              onClick={() => {
                handleFilterNavigation.ratingVoteStarPc(
                  navigation,
                  "5",
                  "rating",
                  "result__search__items__page__filter__body__items--options"
                );
              }}
            >
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
            </div>
            <div
              className="result__search__items__page__filter__body__items--rating"
              onClick={() => {
                handleFilterNavigation.ratingVoteStarPc(
                  navigation,
                  "4",
                  "rating",
                  "result__search__items__page__filter__body__items--options"
                );
              }}
            >
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              & Up
            </div>
            <div
              className="result__search__items__page__filter__body__items--rating"
              onClick={() => {
                handleFilterNavigation.ratingVoteStarPc(
                  navigation,
                  "3",
                  "rating",
                  "result__search__items__page__filter__body__items--options"
                );
              }}
            >
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              & Up
            </div>
            <div
              className="result__search__items__page__filter__body__items--rating"
              onClick={() => {
                handleFilterNavigation.ratingVoteStarPc(
                  navigation,
                  "2",
                  "rating",
                  "result__search__items__page__filter__body__items--options"
                );
              }}
            >
              {" "}
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              & Up
            </div>
            <div
              className="result__search__items__page__filter__body__items--rating"
              onClick={() => {
                handleFilterNavigation.ratingVoteStarPc(
                  navigation,
                  "1",
                  "rating",
                  "result__search__items__page__filter__body__items--options"
                );
              }}
            >
              {" "}
              <Icons.starFull className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              <Icons.starEmpty className="result__search__items__page__filter__body__items__rating--icon" />
              & Up
            </div>
          </div>
        </div>
      </div>
      <div className="result__search__items__page__filter--footer">
        Clear All
      </div>
    </div>
  );
};

export default FilterResultSearchItems;

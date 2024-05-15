import { useEffect, useState } from "react";
import { Icons } from "../../../Container  Component  SVG ICON/Manage Icon";
import "./Modal Filter Max-width 600px.css";
import axios from "axios";
import { useParams } from "react-router";

function ModalFilterResultSearch() {
  let { title } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getDate = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/1a0f57fa-e361-4b7f-8c4f-74dfe3d67a39")
        .then((response) => {
          const data = response.data;
          const filterDate = data.filter((item) => {
            return item.name.includes(title);
          });
          let setDate = new Map();
          filterDate.forEach((item) => {
            const getKind = ("" + item.kind).trim().toLowerCase();
            if (setDate.get(getKind)?.kind != getKind) {
              setDate.set(getKind, { kind: getKind, length: 1 });
            } else {
              if (setDate.get(getKind)?.length > 0) {
                setDate.set(setDate.get(getKind), {
                  kind: setDate.get(getKind).kind,
                  length: ++setDate.get(getKind).length,
                });
              }
            }
          });
          const configValueMapToArray = Object.values(
            Object.fromEntries(setDate)
          );
          if (configValueMapToArray.length > 3) {
            setItems([
              configValueMapToArray.slice(0, 4),
              configValueMapToArray.slice(4, configValueMapToArray.length - 1),
            ]);
          } else {
            setItems([configValueMapToArray]);
          }
        });
    }, 0);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return (
    <div id="modal__filter__result__search">
      <div className="modal__filter__result__search--frame ">
        <div className="modal__filter__result__search--header">
          Search Filter
        </div>
        <div className="modal__filter__result__search--body">
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              By category
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                {items[0]?.map((item) => {
                  return (
                    <div className="modal__filter__result__search__body__items--options">
                      <span className="modal__filter__result__search__body__items__options--text">
                        {item.kind}
                      </span>
                      <span className="modal__filter__result__search__body__items__options--length">
                        ({item.length})
                      </span>
                    </div>
                  );
                })}
              </div>
              {items.length > 4 ? (
                <div className="modal__filter__result__search__body__box--options--views--more">
                  {items[1]?.map((item) => {
                    return (
                      <div className="modal__filter__result__search__body__items--options">
                        <span className="modal__filter__result__search__body__items__options--text">
                          {item.kind}
                        </span>
                        <span className="modal__filter__result__search__body__items__options--length">
                          ( {item.length})
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : undefined}
              <div className="modal__filter__result__search__body__items--btn--show--more">
                <span className="modal__filter__result__search__body__items__btn__show--text">
                  Show
                </span>
                <span className="modal__filter__result__search__body__items__btn__show--changes">
                  More
                </span>
                <Icons.arrowAngleDown className="modal__filter__result__search__body__items__btn__show--icon--down" />
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Shipped from
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="01"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    TP.HCM
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="02"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    dong nai
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="03"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Ha Noi
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="04"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    oversea
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="05"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Dong Thap
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="06"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Phu Tho
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="07"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Quang Ninh
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="08"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Thanh Hoa
                  </span>
                </div>
              </div>
            </div>
            <div className="modal__filter__result__search__body__items--btn--show--more">
              <span className="modal__filter__result__search__body__items__btn__show--text">
                Show
              </span>
              <span className="modal__filter__result__search__body__items__btn__show--changes">
                More
              </span>
              <Icons.arrowAngleDown className="modal__filter__result__search__body__items__btn__show--icon--down" />
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Shipping options
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Express
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Fast
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Saving
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Brands
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    VN
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    ALong
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    MUSHIHUI
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    UNDERCOOL
                  </span>
                </div>
                <div className="modal__filter__result__search__body__box--options--views--more">
                  <div className="modal__filter__result__search__body__items--options">
                    <span className="modal__filter__result__search__body__items__options--text">
                      GOTI
                    </span>
                  </div>
                  <div className="modal__filter__result__search__body__items--options">
                    <span className="modal__filter__result__search__body__items__options--text">
                      VM STYLE
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal__filter__result__search__body__items--btn--show--more">
                <span className="modal__filter__result__search__body__items__btn__show--text">
                  Show
                </span>
                <span className="modal__filter__result__search__body__items__btn__show--changes">
                  More
                </span>
                <Icons.arrowAngleDown className="modal__filter__result__search__body__items__btn__show--icon--down" />
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Price Range (₫)
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__items__body--search--price">
                <input
                  className="modal__filter__result__search__body__items__body__search__price--min"
                  placeholder="MIN"
                  type="text"
                />
                <div className="modal__filter__result__search__body__items__body__search__price--row--bar"></div>
                <input
                  className="modal__filter__result__search__body__items__body__search__price--max"
                  placeholder="MAX"
                  type="text"
                />
              </div>
              <div className="modal__filter__result__search__body__items__body--btn--price">
                <div className="modal__filter__result__search__body__items__body__btn__price--options">
                  0-100k
                </div>
                <div className="modal__filter__result__search__body__items__body__btn__price--options">
                  100k-200k
                </div>
                <div className="modal__filter__result__search__body__items__body__btn__price--options">
                  200k-300k
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Shop Type
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Shopee Mall
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Preferred Shop
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Preferred Shop +
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Trending Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Condition
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    Used
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    New with tag
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Payment Options
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    0% INSTALLMENT
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Rating
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    5 Stars
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    4 Stars & Up
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    3 Stars & Up
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    2 Stars & Up
                  </span>
                </div>
                <div className="modal__filter__result__search__body__items--options">
                  <span className="modal__filter__result__search__body__items__options--text">
                    1 Stars & Up
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Service and Promotion
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="01"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Voucher Xtra
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="02"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Anything Cheap
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="03"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Wholesale
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  data-code="04"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    On sale
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__filter__result__search--footer"> 
          <div className="modal__filter__result__search__footer--reset">Reset</div>
          <div className="modal__filter__result__search__footer--apply">Apply</div>
        </div>
      </div>
    </div>
  );
}

export default ModalFilterResultSearch;

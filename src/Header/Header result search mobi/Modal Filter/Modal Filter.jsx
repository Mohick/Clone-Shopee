import { useEffect, useState } from "react";
import { Icons } from "../../../Container  Component  SVG ICON/Manage Icon";
import "./Modal Filter Max-width 600px.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import HandleFIlterResultSearch from "./handle  filter result search/Handle FIlter";
import HandleFIlter from "./handle  filter result search/Handle FIlter";
function ModalFilterResultSearch({ data }) {
  const [items, setItems] = useState([]);
  const useQuery = function () {
    return new URLSearchParams(useLocation().search);
  };
  const navigation = useNavigate();
  const query = useQuery();

  useEffect(() => {
    const getDate = setTimeout(() => {
      let setDate = new Map();
      data.forEach((item) => {
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
      const configValueMapToArray = Object.values(Object.fromEntries(setDate));

      if (configValueMapToArray.length > 3) {
        setItems([
          configValueMapToArray.slice(0, 4),
          configValueMapToArray.slice(4, configValueMapToArray.length - 1),
        ]);
      } else {
        setItems([configValueMapToArray]);
      }
    }, 0);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return items.length == 0 ? undefined : (
    <div
      id="modal__filter__result__search"
      onClick={HandleFIlterResultSearch.closeModalFilter}
    >
      <div
        className="modal__filter__result__search--frame"
        onClick={(e) => e.stopPropagation()}
      >
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
                {items[0]?.map((item, index) => (
                  <div
                    className="modal__filter__result__search__body__items--options"
                    key={index}
                    onClick={(e) => {
                      HandleFIlter.createClassChooseForOptions(
                        e.target,
                        item.kind
                      );
                    }}
                    title="byCategory"
                    name={item.kind}
                  >
                    <span className="modal__filter__result__search__body__items__options--text">
                      {item.kind}
                    </span>
                    <span className="modal__filter__result__search__body__items__options--length">
                      ({item.length})
                    </span>
                  </div>
                ))}
              </div>
              {items[1]?.length > 4 && (
                <>
                  <div className="modal__filter__result__search__body__box--options--views--more">
                    {items[1]?.map((item, index) => (
                      <div
                        key={index}
                        className="modal__filter__result__search__body__items--options"
                        onClick={(e) =>
                          HandleFIlter.createClassChooseForOptions(
                            e.target,
                            item.kind
                          )
                        }
                        title="byCategory"
                        name={item.kind}
                      >
                        <span className="modal__filter__result__search__body__items__options--text">
                          {item.kind}
                        </span>
                        <span className="modal__filter__result__search__body__items__options--length">
                          ({item.length})
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="modal__filter__result__search__body__items--btn--show--more"
                    onClick={(e) => {
                      HandleFIlter.showMore(e.target.parentElement);
                    }}
                  >
                    <span className="modal__filter__result__search__body__items__btn__show--text">
                      Show
                    </span>
                    <span className="modal__filter__result__search__body__items__btn__show--changes">
                      More
                    </span>
                    <Icons.arrowAngleDown className="modal__filter__result__search__body__items__btn__show--icon--down" />
                  </div>
                </>
              )}
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
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="01"
                  name="TP.HCM"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    TP.HCM
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="02"
                  name="dong nai"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    dong nai
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="03"
                  name="Ha Noi"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Ha Noi
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="04"
                  name="oversea"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    oversea
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="05"
                  name="Dong Thap"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Dong Thap
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="06"
                  name="Phu Tho"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Phu Tho
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="07"
                  name="Quang Ninh"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Quang Ninh
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shipFrom"
                  data-code="08"
                  name="Thanh Hoa"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Thanh Hoa
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Shipping options
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shippingOptions"
                  name="Express"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Express
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shippingOptions"
                  name="Fast"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Fast
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="shippingOptions"
                  name="Saving"
                >
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
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="VN"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    VN
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="ALong"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    ALong
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="MUSHIHUI"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    MUSHIHUI
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="UNDERCOOL"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    UNDERCOOL
                  </span>
                </div>
              </div>
              <div className="modal__filter__result__search__body__box--options--views--more">
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="GOTI"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    GOTI
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  title="brands"
                  name="VM STYLE"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    VM STYLE
                  </span>
                </div>
              </div>
              <div
                className="modal__filter__result__search__body__items--btn--show--more"
                onClick={(e) => {
                  HandleFIlter.showMore(e.target.parentElement);
                }}
              >
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
                  type="number"
                />
                <div className="modal__filter__result__search__body__items__body__search__price--row--bar"></div>
                <input
                  className="modal__filter__result__search__body__items__body__search__price--max"
                  placeholder="MAX"
                  type="number"
                />
              </div>
              <div className="modal__filter__result__search__body__items__body--btn--price">
                <div
                  className="modal__filter__result__search__body__items__body__btn__price--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForPriceRange(e.target, {
                      min: 0,
                      max: 100000,
                    })
                  }
                >
                  0-100k
                </div>
                <div
                  className="modal__filter__result__search__body__items__body__btn__price--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForPriceRange(e.target, {
                      min: 100000,
                      max: 200000,
                    })
                  }
                >
                  100k-200k
                </div>
                <div
                  className="modal__filter__result__search__body__items__body__btn__price--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForPriceRange(e.target, {
                      min: 200000,
                      max: 300000,
                    })
                  }
                >
                  200k-300k
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
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForRating(e.target)
                  }
                  title="rating"
                  name="5"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    5 Stars
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForRating(e.target)
                  }
                  title="rating"
                  name="4"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    4 Stars & Up
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForRating(e.target)
                  }
                  title="rating"
                  name="3"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    3 Stars & Up
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForRating(e.target)
                  }
                  title="rating"
                  name="2"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    2 Stars & Up
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForRating(e.target)
                  }
                  title="rating"
                  name="1"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    1 Star & Up
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="modal__filter__result__search__body--items">
            <div className="modal__filter__result__search__body__items--title">
              Service and Promotion
            </div>
            <div className="modal__filter__result__search__body__items--body">
              <div className="modal__filter__result__search__body__box--options">
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  data-code="01"

                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Voucher Xtra
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  data-code="02"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Anything Cheap
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  data-code="03"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    Wholesale
                  </span>
                </div>
                <div
                  className="modal__filter__result__search__body__items--options"
                  onClick={(e) =>
                    HandleFIlter.createClassChooseForOptions(e.target)
                  }
                  data-code="04"
                >
                  <span className="modal__filter__result__search__body__items__options--text">
                    On sale
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="modal__filter__result__search--footer">
          <div
            className="modal__filter__result__search__footer--reset"
            onClick={() => {
              HandleFIlter.resetOptions(
                navigation,
                query,
                HandleFIlter.createClassChooseForRating
              );
            }}
          >
            Reset
          </div>
          <div
            className="modal__filter__result__search__footer--apply"
            onClick={() => {
              HandleFIlter.handleBtnApplyFilter(navigation, query);
            }}
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFilterResultSearch;

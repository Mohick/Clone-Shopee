import { useEffect, useState } from "react";
import { Icons } from "../../Container  Component  SVG ICON/Manage Icon";
import "./Relate Shop Max-witdh 400px.css";
// import "./Relate Shop Min-witdh 400px.css";
import "./Relate Shop Min-witdh 1000px.css";

import axios from "axios";

const RelateShopResultSearchItems = function () {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getDate = setTimeout(() => {
      axios
        .get("https://run.mocky.io/v3/309514d9-cd7f-45d0-87ea-ce83fae1b23e")
        .then((res) => {
          const data = res.data;
          setItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => {
      clearTimeout(getDate);
    };
  }, []);
  return (
    <div id="relate__shop__sesult__search__items">
      <div className="relate__shop__sesult__search__items--layout layout">
        <div className="relate__shop__sesult__search__items--header">
          <div className="relate__shop__sesult__search__items__header--relate">
            shops related to
          </div>
          <div className="relate__shop__sesult__search__items__header--more">
            <span className="relate__shop__sesult__search__items__header__more--text">
              More Shops
            </span>
            <Icons.arrowAngleRight className="relate__shop__sesult__search__items__header__more--icon" />
          </div>
        </div>
        <div className="relate__shop__sesult__search__items__box--body--footer">
          <div className="relate__shop__sesult__search__items--body">
            <div className="relate__shop__sesult__search__items__body--box--info">
              <div className="relate__shop__sesult__search__items__body__box__info--logo">
                <img
                  src="https://down-vn.img.susercontent.com/file/514917af98dbc1cca17a1ea4a70666be_tn"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="relate__shop__sesult__search__items__body__box__info--product">
                <div className="relate__shop__sesult__search__items__body__box__info__product--title">
                  ENFA CHÍNH HÃNG
                </div>
                <div className="relate__shop__sesult__search__items__body__box__info__product--vote">
                  <div className="relate__shop__sesult__search__items__body__box__info__product__vote--ensure">
                    Mall
                  </div>
                  <div className="relate__shop__sesult__search__items__body__box__info__product__vote--star">
                    <div className="relate__shop__sesult__search__items__body__box__info__product__vote__star--icon">
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-mobilemall-live-sg/search/78ec09f5fe55a61c45ec.svg"
                        alt=""
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="relate__shop__sesult__search__items__body__box__info__product__vote__star--text">
                      4.9
                    </div>
                  </div>
                  <div className="relate__shop__sesult__search__items__body__box__info__product__vote--follower">
                    165,5k Followers
                  </div>
                  <div className="relate__shop__sesult__search__items__body__box__info__product__vote--ads">
                    Ad
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="relate__shop__sesult__search__items__body--box--visit">
              <span className="relate__shop__sesult__search__items__body__box__visit--text">
                Visit Shop
              </span>
              <Icons.arrowAngleRight className="relate__shop__sesult__search__items__body__box__visit--icon" />
            </div>
          </div>
          <div className="relate__shop__sesult__search__items--footer">
            {items.map((item, index) => {
              return (
                <div
                  className="relate__shop__sesult__search__items__footer--items"
                  key={index}
                >
                  <div className="relate__shop__sesult__search__items__footer__items--views">
                    <div className="relate__shop__sesult__search__items__footer__items__views--img">
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        title={item.product_name}
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="relate__shop__sesult__search__items__footer__items__views--discount">
                      -{item.discount}
                    </div>
                  </div>
                  <div className="relate__shop__sesult__search__items__footer__items--price">
                    ₫ {item.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelateShopResultSearchItems;

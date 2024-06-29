import axios from "axios";
import { useEffect, useState } from "react";
import "./Top Product Max-width 600px.css";
import "./Top Product Min-width 1000px.css";
import IconAngleRight from "../../Container  Component  SVG ICON/Icon Angle Right";
import IconAngleLeft from "../../Container  Component  SVG ICON/Icon Angle Left";
import handleArrowTopProduct from "./handle arrow top product/handle arrow top product";
function TopProductMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;

    axios
      .get("https://json-be-shopee.onrender.com/top__products__main__page")
      .then((response) => {
        if (allow) {
          const data = response.data;
          setItems(data);
        }
      });
    return () => {
      allow = false;
    };
  }, []);
  if (items.length == 0) return;
  return (
    <div id="top__product__main__page">
      <div className="top__product__main__page--layout layout">
        <div className="top__product__main__page--header">
          <div className="top__product__main__page__header--title">
            top products
          </div>
          <div className="top__product__main__page__header--more">
            <div className="top__product__main__page__header__more--title">
              see more
            </div>
            <div className="top__product__main__page__header__more--icon">
              <IconAngleRight width={"1.5rem"} height={"1.5rem"} />
            </div>
          </div>
        </div>
        <div className="top__product__main__page--body">
          <div className="top__product__main__page__body--frame">
            {items.map((item, i) => {
              return (
                <div className="top__product__main__page__body--items" key={i}>
                  <div className="top__product__main__page__body__items--header">
                    <div className="top__product__main__page__body__items__header--img">
                      <img
                        loading="lazy"
                        width={"100%"}
                        height={"100%"}
                        src={item.url}
                        alt=""
                      />
                    </div>

                    <div className="top__product__main__page__body__items__header--length--month">
                      {item.lengthItems}
                    </div>
                  </div>
                  <div className="top__product__main__page__body__items__logo--top">
                    <img
                      loading="lazy"
                      width={"100%"}
                      height={"100%"}
                      src="./Top Product/top.png"
                      alt=""
                    />
                  </div>
                  <div className="top__product__main__page__body__items__title">
                    {item.name}
                  </div>{" "}
                  <div className="top__product__main__page__body__items__sold">
                    20k+ sold
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="top__product__main__page__body--arrow--right top__product__main__page__body__arrow--active"
            onClick={() => {
              handleArrowTopProduct("right");
            }}
          >
            <IconAngleRight width={"2rem"} height={"2rem"} />
          </div>
          <div
            className="top__product__main__page__body--arrow--left"
            onClick={() => {
              handleArrowTopProduct("left");
            }}
          >
            <IconAngleLeft width={"2rem"} height={"2rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProductMainPage;

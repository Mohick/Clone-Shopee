import axios from "axios";
import { useEffect, useState } from "react";
import IconElectrics from "../../../Container  Component  SVG ICON/Icon Electric Shopee";
import "./Items Flash sale MainPage Max-width 600px.css";
import "./Items Flash sale MainPage Main-width 1000px.css";
import IconAngleRight from "../../../Container  Component  SVG ICON/Icon Angle Right";
import IconAngleLeft from "../../../Container  Component  SVG ICON/Icon Angle Left";
import { handleArrowFlashSale } from "./handle arrow Flash Sale/handle arrow Flash Sale";
function ItemsFlashSaleMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;
    axios
      .get("https://run.mocky.io/v3/73725fc9-97fb-4c39-af43-944486343d7c")
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
  return (
    <div className="flash__sale--body">
      {items.map((items, index) => {
        return (
          <div className="flash__sale__body--items" key={index}>
            <div className="flash__sale__body__items--img">
              <div className="flash__sale__body__items__img--main">
                <img
                  loading="lazy"
                  width={"100%"}
                  height={"100%"}
                  src={items.img}
                  alt=""
                />
              </div>
              <div className="flash__sale__body__items__img--event">
                <img
                  loading="lazy"
                  width={"100%"}
                  height={"100%"}
                  src="./Logo Flash  Sale/day sale.png"
                  alt=""
                />
              </div>
              <div className="flash__sale__body__items__img--discount">
                <div className="flash__sale__body__items__img__discount--icon">
                  <IconElectrics width="10" height="16" fill="none" />
                </div>
                <div className="flash__sale__body__items__img__discount--number">
                  -{items.discount}%
                </div>
              </div>
            </div>
            <div className="flash__sale__body__items--cost">
              <div className="flash__sale__body__items--cost--unit">₫</div>
              <div className="flash__sale__body__items--cost--price">
                {items.cost}
              </div>
            </div>
            <div className="flash__sale__body__items--sell">
              {(items.sold / items.sale) * 100 == 100 ? (
                <div className="flash__sale__body__items__sell--sold">
                  <div className="flash__sale__body__items__sell__sold--title">
                    {" "}
                    sold out{" "}
                  </div>
                  <div className="flash__sale__body__items__sell__sold--progress" width={`${(items.sold / items.sale) * 100 }%`}></div>
                </div>
              ) : (
                <div className="flash__sale__body__items__sell--still">
                  <div className="flash__sale__body__items__sell__still--title">
                    {items.sold} Sold
                  </div>
                  <div
                    className="flash__sale__body__items__sell__still--progress"
                    style={{ width: `${(items.sold / items.sale) * 100}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div
        className="flash__sale__body--arrow--left  "
        onClick={() => {
          handleArrowFlashSale("left");
        }}
      >
        <IconAngleLeft width={"2rem"} height={"2rem"} />
      </div>
      <div
        className="flash__sale__body--arrow--right flash__sale__body__arrow--active"
        onClick={() => {
          handleArrowFlashSale("right");
        }}
      >
        <IconAngleRight width={"2rem"} height={"2rem"} />
      </div>
    </div>
  );
}

export default ItemsFlashSaleMainPage;

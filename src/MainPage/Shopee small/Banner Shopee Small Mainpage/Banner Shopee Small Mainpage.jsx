import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Banner Shopee Small Mainpage Max-width 600px.css";
import "./Banner Shopee Small Mainpage Min-width 1000px.css";
import IconAngleRight from "../../../Container  Component  SVG ICON/Icon Angle Right";
import IconAngleLeft from "../../../Container  Component  SVG ICON/Icon Angle Left";
import HandleScrollBannerSmall from "./Handle Scroll ";
import HandleScrollBannerShopeeSmall from "./handle Banner Shopee Small";

function BannerShopeeSmall() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;
    axios
      .get("https://run.mocky.io/v3/b72e42ad-c738-4219-884b-f3288c0ed6fe")
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
    <div className="shopee__small__body--banner">
      <div className="shopee__small__body__banner--img">
        <div className="shopee__small__body__banner__img--last--sub">
          <img
            width={"100%"}
            height={"100%"}
            src={items[items.length - 1]?.url}
            alt=""
          />
        </div>
        <div
          style={{ flex: `0 0 calc(100% * ${items.length})` }}
          className="shopee__small__body__banner__img--main"
        >
          {items.map((item, index) => {
            return (
              <div
                style={{ flex: `0 0 calc(100% / ${items.length})` }}
                className="shopee__small__body__banner__img__main--items"
                index--items={index}
              >
                <img width={"100%"} height={"100%"} src={item.url} alt="" />
              </div>
            );
          })}
        </div>
        <div className="shopee__small__body__banner__img--first--sub">
          <img width={"100%"} height={"100%"} src={items[0]?.url} alt="" />
        </div>
      </div>
      <div className="shopee__small__body__banner--dots">
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                data--dots={index}
                className="shopee__small__body__banner__dot--items shopee__small__body__banner__dot__items--active"
                location={true}
                onClick={()=>{
                  HandleScrollBannerShopeeSmall.handleDotsItems(item,index)
                }}
              ></div>
            );
          } else {
            return (
              <div
              onClick={()=>{
                HandleScrollBannerShopeeSmall.handleDotsItems( item,index)
              }}
                key={index}
                className="shopee__small__body__banner__dot--items"
              ></div>
            );
          }
        })}
      </div>
      <div
        className="shopee__small__body__banner--arrow--right"
        onClick={() => {
          HandleScrollBannerShopeeSmall.handleClickArrow("right");
        }}
      >
        <IconAngleRight fill={"#fff"} width={"2rem"} height={"2rem"} />
      </div>
      <div
        className="shopee__small__body__banner--arrow--left"
        onClick={() => {
          HandleScrollBannerShopeeSmall.handleClickArrow("left");
        }}
      >
        <IconAngleLeft fill={"#fff"} width={"2rem"} height={"2rem"} />
      </div>
      <HandleScrollBannerSmall/>
    </div>
  );
}

export default BannerShopeeSmall;

import axios from "axios";
import { memo, useState } from "react";
import { useEffect } from "react";
import "./Banner Shopee Max-width 600px.css";
import "./Banner Shopee Min-width 1000px.css";
import IconAngleRight from "../Container  Component  SVG ICON/Icon Angle Right";
import IconAngleLeft from "../Container  Component  SVG ICON/Icon Angle Left";
import HandleScrollBannerShopee from "./handle Banner shopee";
import HandleScrollBanner from "./Handle Scroll ";

function BannerShope({ url, classItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const allow = setTimeout(() => {
      axios.get(url).then((response) => {
        const data = response.data;
        setItems(data);
      });
    }, 0);
    return () => {
      clearTimeout(allow);
    };
  }, []);
  if (items.length == 0) return;
  return (
    <div
      className={`shopee__banner__body--banner ${(
        "" + classItems
      ).trim()}__shopee__banner__body--banner`}
    >
      <div
        className={`shopee__banner__body__banner--img ${(
          "" + classItems
        ).trim()}__shopee__banner__body__banner--img`}
      >
        <div
          className={`shopee__banner__body__banner__img--last--sub ${(
            "" + classItems
          ).trim()}__shopee__banner__body__banner__img--last--sub`}
        >
          <img
            className="h-full"
            loading="lazy"
            width={"100%"}
            height={"100%"}
            src={items[items.length - 1]?.url}
            alt=""
            
          />
        </div>
        <div
          style={{ flex: `0 0 calc(100% * ${items.length})` }}
          className={`shopee__banner__body__banner__img--main ${(
            "" + classItems
          ).trim()}__shopee__banner__body__banner__img--main`}
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                style={{ flex: `0 0 calc(100% / ${items.length})` }}
                className={`shopee__banner__body__banner__img__main--items ${(
                  "" + classItems
                ).trim()}__shopee__banner__body__banner__img__main--items`}
              >
                <img
                  className="h-full"
                  loading="lazy"
                  width={"100%"}
                  height={"100%"}
                  src={item.url}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div
          className={`shopee__banner__body__banner__img--first--sub  ${(
            "" + classItems
          ).trim()}__shopee__banner__body__banner__img--first--sub`}
        >
          <img
            className="h-full"
            loading="lazy"
            width={"100%"}
            height={"100%"}
            src={items[0]?.url}
            alt=""
          />
        </div>
      </div>
      <div
        className={`shopee__banner__body__banner--dots  ${(
          "" + classItems
        ).trim()}__shopee__banner__body__banner--dots`}
      >
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <div
                key={index}
                className={`shopee__banner__body__banner__dot--items
                ${(
                  "" + classItems
                ).trim()}__shopee__banner__body__banner__dot--items shopee__banner__body__banner__dot__items--active`}
                onClick={() => {
                  HandleScrollBannerShopee.handleDotsItems(
                    item,
                    index,
                    ("" + classItems).trim()
                  );
                }}
              ></div>
            );
          } else {
            return (
              <div
                onClick={() => {
                  HandleScrollBannerShopee.handleDotsItems(
                    item,
                    index,
                    ("" + classItems).trim()
                  );
                }}
                key={index}
                className={`shopee__banner__body__banner__dot--items  ${(
                  "" + classItems
                ).trim()}__shopee__banner__body__banner__dot--items`}
              ></div>
            );
          }
        })}
      </div>
      <div
        className={`shopee__banner__body__banner--arrow--right ${(
          "" + classItems
        ).trim()}--arrow--right`}
        onClick={() => {
          HandleScrollBannerShopee.handleClickArrow(
            "right",
            ("" + classItems).trim()
          );
        }}
      >
        <IconAngleRight fill={"#fff"} width={"2rem"} height={"2rem"} />
      </div>
      <div
        className={`shopee__banner__body__banner--arrow--left ${(
          "" + classItems
        ).trim()}--arrow--left`}
        onClick={() => {
          HandleScrollBannerShopee.handleClickArrow(
            "left",
            ("" + classItems).trim()
          );
        }}
      >
        <IconAngleLeft fill={"#fff"} width={"2rem"} height={"2rem"} />
      </div>
      <HandleScrollBanner classItems={("" + classItems).trim()} />
    </div>
  );
}

export default memo(BannerShope);

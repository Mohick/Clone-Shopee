import { useCallback, useEffect, useState } from "react";
import "./Shopee Small Items Max-width 600px.css";
import "./Shopee Small Items Min-width 1000px.css";
import axios from "axios";
import RenderItemsShopeeSmallMainPage from "./Hanle Render Items/Render Items  Shopee Small";
import IconAngleRight from "../../../Container  Component  SVG ICON/Icon Angle Right";
import IconAngleLeft from "../../../Container  Component  SVG ICON/Icon Angle Left";
import { handleBtnArrowShopeeSmall } from "./handle btn arrow shopee small/handle btn arrow shopee small";

function ShopeeSmallItemsMainPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let allow = true;
    axios
      .get("https://run.mocky.io/v3/04d455d2-06ed-4e91-a7b1-33dfa53cfcf4")
      .then((response) => {
        if (allow) {
          const data = response.data;
          setItems([data[0].items, data[1].items]);
        }
      });
    return () => {
      return (allow = false);
    };
  }, []);
  useCallback(() => {}, []);
  return (
    <div className="shopee__small__body--frame">
      <div className="shopee__small__body__frame--items">
        <div className="shopee__small__body__frame__items--first">
          <RenderItemsShopeeSmallMainPage arrayItems={items[0]} />
        </div>
        <div className="shopee__small__body__frame__items--last">
          <RenderItemsShopeeSmallMainPage arrayItems={items[1]} />
          <div className="shopee__small__body__box--items--more">
            <div className="shopee__small__body__box__items__more--title">
              See All
            </div>
            <div className="shopee__small__body__box__items__more--icon">
              <IconAngleRight width={"1rem"} height={"1rem"} fill={"#fff"} />
            </div>
          </div>
        </div>
      </div>
      <div className="shopee__small__body__frame--arrow--left" onClick={()=>{
        handleBtnArrowShopeeSmall('left')
      }}>
        <IconAngleLeft width={'2rem'} height={'2rem'}/>
      </div>
      <div className="shopee__small__body__frame--arrow--right shopee__small__body__frame__arrow--active" onClick={()=>{
        handleBtnArrowShopeeSmall('right')
      }}>
        <IconAngleRight width={'2rem'} height={'2rem'} />
      </div>
    </div>
  );
}

export default ShopeeSmallItemsMainPage;

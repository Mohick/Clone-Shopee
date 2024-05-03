import { useEffect, useState } from "react";
import HandleScrollBannerShopeeSmall from "./handle Banner Shopee Small";
function HandleScrollBannerSmall() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const setTimeAutoNext = setInterval(() => {
      HandleScrollBannerShopeeSmall.handleClickArrow("right");
    }, 3000);
    const createScroll = setTimeout(() => {
      const frameImg = document.querySelector(".shopee__small__body__banner--img");
      frameImg.addEventListener("scrollend", () => {
        HandleScrollBannerShopeeSmall.handleScrollItems();
        HandleScrollBannerShopeeSmall.autoReLocationDots();
        setTime(time + 1);
      });
    }, 0);
    return () => {
        clearTimeout(createScroll);
        clearInterval(setTimeAutoNext);
    };
}, time);
  return <></>
}

export default HandleScrollBannerSmall;

import { memo, useEffect, useState } from "react";
import HandleScrollBannerShopee from "./handle Banner shopee.js";
function HandleScrollBanner({classItems}) {
  const [count,setCount] = useState(0)
  useEffect(() => {

    const setTimeAutoNext = setInterval(() => {
      HandleScrollBannerShopee.handleClickArrow("right",classItems);
    }, 3000);
    const createScroll = setTimeout(() => {
      const frameImg = document.querySelector(`.${classItems}__shopee__banner__body__banner--img`);
      frameImg.addEventListener("scrollend", () => {
        HandleScrollBannerShopee.handleScrollItems(classItems);
        HandleScrollBannerShopee.autoReLocationDots(classItems);
        setCount(count + 1)
      });
    }, 0);
    return () => {
        clearTimeout(createScroll);
        clearInterval(setTimeAutoNext);
    };
}, [count]);
  return <></>
}

export default memo(HandleScrollBanner);

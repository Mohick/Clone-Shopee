class HandleScrollBannerShopeeSmall {
  handleScrollItems() {
    const boxFrame = document.querySelector(".shopee__small__body__banner--img");
    const firstItemsImg = document.querySelector(
      ".shopee__small__body__banner__img--last--sub"
    );
    const mainItems = document.querySelector(
      ".shopee__small__body__banner__img--main"
    );
    const lastItemsImg = document.querySelector(
      ".shopee__small__body__banner__img--first--sub"
    );
   

    switch (true) {
      case boxFrame.getBoundingClientRect().left ==
        firstItemsImg.getBoundingClientRect().left:
        boxFrame.scrollTo({
          left: mainItems.clientWidth,
          behavior: "auto",
        });
        break;
      case Math.floor(boxFrame.getBoundingClientRect().left) ==
        Math.floor(lastItemsImg.getBoundingClientRect().left):
        boxFrame.scrollTo({
          left: firstItemsImg.clientWidth,
          behavior: "auto",
        });
        break;
    }
  }
  handleClickArrow(arrow = "right") {
    const boxFrame = document.querySelector(".shopee__small__body__banner--img");
    const mainImgBanner = document.querySelector(
      ".shopee__small__body__banner__img--main"
    );
    const lastItemsImg = document.querySelector(
      ".shopee__small__body__banner__img--first--sub"
    );

    switch (arrow) {
      case "left":
        boxFrame.scrollTo({
          left: boxFrame.scrollLeft - boxFrame.clientWidth,
          behavior: "smooth",
        });
        break;
      case "right":
        boxFrame.scrollTo({
          left: boxFrame.scrollLeft + boxFrame.clientWidth,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  }
  handleDotsItems(item,index) {
    const getDotActive = document.querySelector(".shopee__small__body__banner__dot__items--active");
    getDotActive?.classList.remove("shopee__small__body__banner__dot__items--active");
    const frameShowBanner = document.querySelector(".shopee__small__body__banner--img")
    const allItemsDots=document.querySelectorAll(".shopee__small__body__banner__dot--items")
    allItemsDots[index].classList.add("shopee__small__body__banner__dot__items--active")
    frameShowBanner.scrollTo({
      left:frameShowBanner.clientWidth + (index*frameShowBanner.clientWidth) ,
      behavior:'smooth'
    })
  }
  autoReLocationDots() {
    const getAllImgItems = document.querySelectorAll('.shopee__small__body__banner__img__main--items')
    const frameShowBanner = document.querySelector(".shopee__small__body__banner--img")

    let objectsContainerNearLeftFrame = new Map();
    for (let index = 0; index < getAllImgItems.length; index++) {
      const item = getAllImgItems[index];
      const locationsItem = Math.floor(frameShowBanner.getBoundingClientRect().left -  item.getBoundingClientRect().left)
      objectsContainerNearLeftFrame.set(index, {locationsItem,index})
    }
   const convertMapToObjects =  Object.fromEntries(objectsContainerNearLeftFrame)
   const getValuesObjects = Object.values(convertMapToObjects).filter((item)=>{
    if(item.locationsItem+frameShowBanner.clientWidth/2) {
      return item.locationsItem == -1 || item.locationsItem == 0
    }
   })

   const getDotActive = document.querySelector(".shopee__small__body__banner__dot__items--active");
   getDotActive?.classList.remove("shopee__small__body__banner__dot__items--active");
   const getAllDotsItems = document.querySelectorAll('.shopee__small__body__banner__dot--items')
   getAllDotsItems[getValuesObjects[0].index].classList.add("shopee__small__body__banner__dot__items--active")
  }
}

export default new HandleScrollBannerShopeeSmall();

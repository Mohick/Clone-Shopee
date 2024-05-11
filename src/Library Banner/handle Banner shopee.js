class HandleScrollBannerShopee {
  async handleScrollItems(classItems) {
    const boxFrame = document.querySelector(
      `.${classItems}__shopee__banner__body__banner--img`
    );
    const firstItemsImg = document.querySelector(
      `.${classItems}__shopee__banner__body__banner__img--last--sub`
    );
    const mainItems = document.querySelector(
      `.${classItems}__shopee__banner__body__banner__img--main`
    );
    const lastItemsImg = document.querySelector(
      `.${classItems}__shopee__banner__body__banner__img--first--sub`
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
  async handleClickArrow(arrow = "right", classItems) {
    const boxFrame = document.querySelector(
      `.${classItems}__shopee__banner__body__banner--img`
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
  async handleDotsItems(item, index, classItems) {
    const frameShowBanner = document.querySelector(
      `.${classItems}__shopee__banner__body__banner--img`
    );
    const allItemsDots = frameShowBanner.querySelectorAll(
      `.${classItems}__shopee__banner__body__banner__dot--items`
    );
    const getDotActive = frameShowBanner.querySelector(
      `.${classItems}--active`
    );
    getDotActive?.classList.remove(
      `shopee__banner__body__banner__dot__items--active`
    );
    frameShowBanner.scrollTo({
      left: frameShowBanner.clientWidth + index * frameShowBanner.clientWidth,
      behavior: "smooth",
    });
  }
  async autoReLocationDots(classItems) {
    const getAllImgItems = document.querySelectorAll(
      `.${classItems}__shopee__banner__body__banner__img__main--items`
    );
    const frameShowBanner = document.querySelector(
      `.${classItems}__shopee__banner__body--banner`
    );

    let objectsContainerNearLeftFrame = new Map();
    for (let index = 0; index < getAllImgItems.length; index++) {
      const item = getAllImgItems[index];
      const locationsItem = Math.floor(
        frameShowBanner.getBoundingClientRect().left -
          item.getBoundingClientRect().left
      );
      objectsContainerNearLeftFrame.set(index, { locationsItem, index });
    }
    const convertMapToObjects = Object.fromEntries(
      objectsContainerNearLeftFrame
    );
    const getValuesObjects = Object.values(convertMapToObjects).filter(
      (item) => {
        return item.locationsItem > -frameShowBanner.clientWidth;
      }
    );
    const getDotActive = frameShowBanner.querySelector(
      `.shopee__banner__body__banner__dot__items--active`
    );
    getDotActive?.classList.remove(
      `shopee__banner__body__banner__dot__items--active`
    );
    const getAllDotsItems = frameShowBanner.querySelectorAll(
      `.${classItems}__shopee__banner__body__banner__dot--items`
    );

    const sortLocaltiems = getValuesObjects.sort((a,b)=> {
      return Math.abs(a.locationsItem) - Math.abs(b.locationsItem)
    }
    )
    getAllDotsItems[sortLocaltiems[0].index].classList.add(
      `shopee__banner__body__banner__dot__items--active`
    );
  }
}

export default new HandleScrollBannerShopee();

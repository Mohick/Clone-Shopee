function handleBtnArrowShopeeSmall(arrow = "right") {
  const boxFrame = document.querySelector(".shopee__small__body__frame--items");
  const arrayLeft = document.querySelector(
    ".shopee__small__body__frame--arrow--left"
  );
  const arrayRight = document.querySelector(
    ".shopee__small__body__frame--arrow--right"
  );
  switch (arrow) {
    case "left":
      boxFrame.scrollTo({
        left: boxFrame.scrollLeft - boxFrame.offsetWidth,
        behavior: "smooth",
      });
      arrayRight.classList.add("shopee__small__body__frame__arrow--active");
      setTimeout(() => {
        boxFrame.addEventListener("scrollend", () => {
          if (Math.floor(boxFrame.scrollLeft) == 0) {
            arrayLeft.classList.remove(
              "shopee__small__body__frame__arrow--active"
            );
            arrayRight.classList.add(
              "shopee__small__body__frame__arrow--active"
            );
          }
        });
      }, 0);
      break;
    case "right":
      boxFrame.scrollTo({
        left: boxFrame.scrollLeft + boxFrame.offsetWidth,
        behavior: "smooth",
      });
      arrayLeft.classList.add("shopee__small__body__frame__arrow--active");
      setTimeout(() => {
        boxFrame.addEventListener("scrollend", () => {
          if (
            Math.floor(boxFrame.scrollLeft + boxFrame.clientWidth)  + 10 >=
            Math.floor(boxFrame.scrollWidth)
          ) {
            arrayRight.classList.remove(
              "shopee__small__body__frame__arrow--active"
            );
            arrayLeft.classList.add(
              "shopee__small__body__frame__arrow--active"
            );
          }
        });
      }, 0);
      break;
    default:
      boxFrame.scrollLeft += boxFrame.offsetWidth;
      break;
  }
}

export { handleBtnArrowShopeeSmall };

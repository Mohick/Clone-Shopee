function handleArrowFlashSale(arrow) {
  const frameSCroll = document.querySelector(".flash__sale--body");
  const btnArrowLeft = document.querySelector(
    ".flash__sale__body--arrow--left"
  );
  const btnArrowRight = document.querySelector(
    ".flash__sale__body--arrow--right"
  );
  switch (arrow) {
    case "left":
      frameSCroll.scrollTo({
        left: frameSCroll.scrollLeft - frameSCroll.offsetWidth,
        behavior: "smooth",
      });
      btnArrowRight.classList.add("flash__sale__body__arrow--active");
      frameSCroll.addEventListener("scrollend", () => {
        if (Math.abs(Math.floor(frameSCroll.scrollLeft)) < 1) {
          btnArrowLeft.classList.remove("flash__sale__body__arrow--active");
          btnArrowRight.classList.add("flash__sale__body__arrow--active");
        }
      });
      break;
    case "right":
      frameSCroll.scrollTo({
        left: frameSCroll.offsetWidth - 20 + frameSCroll.scrollLeft,
        behavior: "smooth",
      });
      btnArrowLeft.classList.add("flash__sale__body__arrow--active");
      frameSCroll.addEventListener("scrollend", () => {
        if (
          Math.floor(frameSCroll.scrollLeft + frameSCroll.clientWidth) >=
          frameSCroll.scrollWidth
        ) {
          btnArrowRight.classList.remove("flash__sale__body__arrow--active");
          btnArrowLeft.classList.add("flash__sale__body__arrow--active");
        }
      });
      break;

    default:
      break;
  }
}

export { handleArrowFlashSale };

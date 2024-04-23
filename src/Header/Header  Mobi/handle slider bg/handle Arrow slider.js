import { handleWhenUserClickDotsSliderMobi } from "./handle When User Click dots";

function handleWhenUserClickArrowSliderMobi(arrow) {
  const nameArrow = ("" + arrow).trim().toLowerCase();
  const getAllDotsItems = document.querySelectorAll(
    ".header__main__page__mobi__slider__box__dots--item"
  );
  switch (nameArrow) {
    case "next".trim().toLowerCase():
      for (let i = 0; i < getAllDotsItems.length; i++) {
        if (!!getAllDotsItems[i].getAttribute("current-index")) {
            Number(getAllDotsItems[i].getAttribute("current-index")) == (getAllDotsItems.length - 1) ? CallRelocalDots(getAllDotsItems[0]):CallRelocalDots(getAllDotsItems[i + 1])
          return;
        }
      }
      break;
    default:
      console.log("error", nameArrow);
  }
}

function CallRelocalDots(items) {
  handleWhenUserClickDotsSliderMobi(items);
}
export { handleWhenUserClickArrowSliderMobi };

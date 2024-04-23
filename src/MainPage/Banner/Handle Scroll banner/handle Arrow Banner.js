import { handleWhenUserClickDotsBanner } from "./handle When User Click dots";

function handleWhenUserClickArrow(arrow) {
  const nameArrow = ("" + arrow).trim().toLowerCase();
  const getAllDotsItems = document.querySelectorAll(
    ".banner__main__page__box__dots--item"
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
    case "prev".trim().toLowerCase():
      for (let i = 0; i < getAllDotsItems.length; i++) {
        if (!!getAllDotsItems[i].getAttribute("current-index")) {
            Number(getAllDotsItems[i].getAttribute("current-index")) == 0 ? CallRelocalDots(getAllDotsItems[getAllDotsItems.length - 1]):CallRelocalDots(getAllDotsItems[i - 1])
          return;
        }
      }
      break;
    default:
      console.log("error", nameArrow);
  }
}

function CallRelocalDots(items) {
  handleWhenUserClickDotsBanner(items);
}
export { handleWhenUserClickArrow };
